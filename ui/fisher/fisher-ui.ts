import { UnreachableCode } from '../../resources/not_reached';
import TimerBar from '../../resources/timerbar';

// TODO: move FisherOptions to its own file?
import { FisherOptions } from './fisher';

class FisherBar extends TimerBar {
  stop() {
    if (this._animationFrame !== undefined)
      cancelAnimationFrame(this._animationFrame);
    this._animationFrame = undefined;
  }
}

// Preferred method but old CEF doesn't have this.
window.customElements.define('fisher-bar', FisherBar);

export default class FisherUI {
  private readonly tugNames = ['unknown', 'light', 'medium', 'heavy'];
  private baitEl: HTMLElement;
  private placeEl: HTMLElement;
  private timeEl: HTMLElement;
  private arrowEl: HTMLElement;
  private castStart?: Date;
  private animationFrame = 0;
  private bars: unknown[];

  constructor(private options: FisherOptions, private element: HTMLElement) {
    const baitEl = element.querySelector('#bait-name');
    const placeEl = element.querySelector('#place-name');
    const timeEl = element.querySelector('#cast-duration');
    const arrowEl = element.querySelector('#fisher-arrow');
    if (
      !(baitEl instanceof HTMLElement) || !(placeEl instanceof HTMLElement) ||
      !(timeEl instanceof HTMLElement) || !(arrowEl instanceof HTMLElement)
    )
      throw new UnreachableCode();

    this.baitEl = baitEl;
    this.placeEl = placeEl;
    this.timeEl = timeEl;
    this.arrowEl = arrowEl;
  }

  draw(): void {
    if (this.castStart === undefined)
      return;
    const timeMs = (Date.now() - this.castStart.valueOf());
    const time = (timeMs / 1000).toFixed(1);

    this.timeEl.innerHTML = time;
    this.arrowEl.style.top = `${timeMs / 600}%`;

    this.animationFrame = requestAnimationFrame(this.draw.bind(this));
  }

  setBait(baitName: string): void {
    this.baitEl.innerHTML = baitName;
  }

  setPlace(place?: string): void {
    const oldPlace = this.placeEl.innerHTML;

    if (!place) {
      if (oldPlace && oldPlace[0] !== '(')
        this.placeEl.innerHTML = '(' + oldPlace + ')';
      else
        this.placeEl.innerHTML = '------------';
    } else {
      this.placeEl.innerHTML = place;
    }
  }

  startTimers(): void {
    const barData = {};

    const rows = this.element.querySelectorAll('.table-row');

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const min = row.getAttribute('data-min');
      const max = row.getAttribute('data-max');
      const bar = document.createElement('fisher-bar');
      let timeouts = [];

      bar.centertext = row.getAttribute('data-fish');

      // Step one: fill until the minimum time
      if ((min && min !== 'undefined') && (max && max !== 'undefined')) {
        row.opacity = 0.8;
        bar.duration = min / 1000;
        bar.stylefill = 'fill';
        // Step two: empty until the maximum time
        timeouts.push(window.setTimeout(() => {
          row.style.opacity = 1;
          bar.stylefill = 'empty';
          bar.value = 0;
          bar.duration = (max - min) / 1000;
          timeouts.push(window.setTimeout(() => {
            row.style.opacity = 0.5;
          }, (max - min)));
        }, min));
      } else {
        bar.duration = 0;
        timeouts = [];
      }

      if (row.getAttribute('data-tug'))
        bar.fg = this.options.Colors[this.tugNames[row.getAttribute('data-tug')]];

      while (row.lastChild)
        row.removeChild(row.lastChild);

      row.appendChild(bar);

      this.bars.push({
        'row': row,
        'bar': bar,
        'timeouts': timeouts,
      });
    }

    this.draw();
  }

  stopTimers(): void {
    // Stops cast time timer and arrow
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;

    this.bars.forEach((bar) => {
      // Stops the timed events
      bar.timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });

      // Stops the bar
      bar.bar.stop();
    });
  }

  redrawFish(hookTimes, tugTypes) {
    // Sort hook times by minimum time, with undefineds being at the end
    const sortedKeys = Object.keys(hookTimes).sort((a, b) => {
      const t = hookTimes;

      if ((!t[a] || !t[a].min) && (!t[b] || !t[b].min))
        return 0;
      else if (!t[a] || !t[a].min)
        return 1;
      else if (!t[b] || !t[b].min)
        return -1;

      return t[a].min - t[b].min;
    });

    // Remove current values from all wells
    Array.prototype.forEach.call(
      this.element.querySelectorAll('.well-entry, .table-row'),
      (node) => {
        node.parentNode.removeChild(node);
      },
    );

    for (let i = 0; i < sortedKeys.length; i++) {
      // First, draw on the well
      const fish = sortedKeys[i];

      if (tugTypes[fish] && hookTimes[fish].min && hookTimes[fish].max) {
        const tug = tugTypes[fish];
        // Create the element with fish-specific styles
        const el = document.createElement('div');
        el.classList.add('well-entry');
        el.setAttribute('data-fish', fish);
        el.style.top = (hookTimes[fish].min / 600).toString() + '%';
        el.style.height = ((hookTimes[fish].max - hookTimes[fish].min) / 600).toString() + '%';
        el.style.backgroundColor = this.options.Colors[this.tugNames[tug]];

        // Put the element in the well
        const well = this.element.querySelector('#fisher-well-' + this.tugNames[tug]);
        well.appendChild(el);
      }

      // Next, make the row for the table
      const row = document.createElement('div');
      row.classList.add('table-row');
      row.setAttribute('data-fish', fish);
      row.setAttribute('data-tug', tugTypes[fish]);
      row.setAttribute('data-min', hookTimes[fish].min);
      row.setAttribute('data-max', hookTimes[fish].max);

      // Add the row to the table
      const table = this.element.querySelector('#fisher-table');
      table.appendChild(row);
    }
  }

  startFishing(): void {
    this.castStart = new Date();
    this.startTimers();
  }

  stopFishing(): void {
    this.stopTimers();
    this.animationFrame = 0;
  }
}
