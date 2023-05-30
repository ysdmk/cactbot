import Conditions from '../../../../../resources/conditions';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export interface Data extends RaidbossData {
  cursing?: string[];
  wailing?: string[];
  sphere?: string[];
  donut?: string[];
}

const triggerSet: TriggerSet<Data> = {
  id: 'DunScaith',
  zoneId: ZoneId.DunScaith,
  timelineFile: 'dun_scaith.txt',
  timelineTriggers: [
    {
      id: 'Dun Scaith Spike Of Darkness',
      regex: /Spike Of Darkness/,
      beforeSeconds: 4,
      response: Responses.tankBuster(),
    },
  ],
  triggers: [
    // Basic stack occurs across all encounters except Deathgaze.
    {
      id: 'Dun Scaith Generic Stack-up',
      type: 'HeadMarker',
      netRegex: { id: '003E' },
      response: Responses.stackMarkerOn(),
    },
    // DEATHGAZE
    {
      id: 'Dun Scaith Void Death Circle',
      type: 'StartsUsing',
      netRegex: { id: ['1C7F', '1C90'], source: 'Deathgaze Hollow', capture: false },
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Out of death circle',
          de: 'Raus aus den Todeskreisen',
          fr: 'Sortez du cercle de mort',
          ja: 'ヴォイド・デス、外へ',
          cn: '离开圈内并扯断连线',
          ko: '데스 장판 빠져나오기',
        },
      },
    },
    {
      // Currently set up to just notify the healers/Bard to cleanse.
      // Or use / 16:\y{ObjectId}:Deathgaze Hollow:1C85:Doomsay:\y{ObjectId}:(\y{Name})
      // This would allow for notifying who needs cleansing directly, but might be spammy
      id: 'Dun Scaith Doom',
      type: 'StartsUsing',
      netRegex: { id: ['1C84', '1C85'], source: 'Deathgaze Hollow', capture: false },
      condition: (data) => data.CanCleanse(),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Cleanse Doom soon!',
          de: 'Verhängnis bald reinigen!',
          fr: 'Dissipez le Glas bientôt !',
          ja: '死の宣告、エスナ！',
          cn: '尽快驱散死亡宣告！',
          ko: '죽음의 선고 해제',
        },
      },
    },
    {
      // There's another Void Blizzard IV with ID 1C77, but it's not the timing we want
      // The actual knockback cast is Void Aero IV, but it gives only 2-3s warning.
      id: 'Dun Scaith Blizzard Pillars',
      type: 'StartsUsing',
      netRegex: { id: '1C8B', source: 'Deathgaze Hollow', capture: false },
      suppressSeconds: 5,
      response: Responses.knockback(),
    },
    {
      id: 'Dun Scaith Void Sprite',
      type: 'AddedCombatant',
      netRegex: { npcNameId: '5508', capture: false },
      suppressSeconds: 10,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Kill sprites',
          de: 'Exergone töten',
          fr: 'Tuez les élémentaires',
          ja: 'スプライトを倒す',
          cn: '击杀虚无元精',
          ko: '정령 잡기',
        },
      },
    },
    {
      id: 'Dun Scaith Aero 2',
      type: 'HeadMarker',
      netRegex: { id: '0046' },
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Drop Tornado outside',
          de: 'Wirbel draußen ablegen',
          fr: 'Déposez les tornades à l\'extérieur',
          ja: 'エアロガ、外に置く',
          cn: '场地边缘放风圈',
          ko: '회오리 외곽으로 유도',
        },
      },
    },
    {
      // Deathgaze has two separate casts for this
      // Which one appears to depend on whether it's used alongside Bolt of Darkness
      // Mechanically the handling is the same
      id: 'Dun Scaith Aero 3',
      type: 'StartsUsing',
      netRegex: { id: ['1C7B', '1C8D'], source: 'Deathgaze Hollow', capture: false },
      suppressSeconds: 5,
      response: Responses.knockback(),
    },
    {
      // It's not certain what causes Deathgaze to choose which ability.
      // Both are present with cast times of 2.7 seconds,
      // and neither seems to target players directly.
      id: 'Dun Scaith Void Death Squares',
      type: 'StartsUsing',
      netRegex: { id: ['1C82', '1C83'], source: 'Deathgaze Hollow', capture: false },
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid death squares',
          de: 'Weiche den Todes-Feldern aus',
          fr: 'Évitez les carrés de mort',
          ja: 'ヴォイド・デスジャ、エリアの外に',
          cn: '离开即死区域',
          ko: '검은 장판 피하기',
        },
      },
    },
    // FERDIAD
    {
      id: 'Dun Scaith Scythe Drop',
      type: 'HeadMarker',
      netRegex: { id: '0017' },
      condition: Conditions.targetIsYou(),
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Drop scythe outside',
          de: 'Sense draußen ablegen',
          fr: 'Déposez la faux à l\'extérieur',
          ja: 'ブラックウインド、外に置く',
          cn: '场地边缘放镰刀',
          ko: '낫 외곽으로 유도',
        },
      },
    },
    {
      id: 'Dun Scaith Jongleur\'s X',
      type: 'StartsUsing',
      netRegex: { id: '1C98', source: 'Ferdiad Hollow' },
      response: Responses.tankBuster(),
    },
    {
      // 5510 is Wailing Atomos (blue), 5511 is Cursing Atomos(yellow).
      // Sometimes it will happen that Aether/Chakrams will start casting before
      // the addedCombatant line that contains the Atomos.
      // When this happens, a simple startsCasting trigger will silently fail.
      // To avoid this, we store the IDs of Atomos for later comparison.
      id: 'Dun Scaith Atomos Setup',
      type: 'AddedCombatant',
      netRegex: { npcNameId: ['5510', '5511'] },
      run: (data, matches) => {
        data.cursing ??= [];
        data.wailing ??= [];
        const id = matches.id.toUpperCase();
        matches.npcNameId === '5510' ? data.wailing.push(id) : data.cursing.push(id);
      },
    },
    {
      // Wailing Atomos is blue, Cursing Atomos is yellow.
      // 1C9F:Aether is the circle AoE, 1CA0:Aetherial Chakram is the donut AoE
      id: 'Dun Scaith Atomos Compile',
      type: 'StartsUsing',
      netRegex: { id: ['1C9F', '1CA0'] },
      delaySeconds: .5,
      run: (data, matches) => {
        data.sphere ??= [];
        data.donut ??= [];
        const target = data.wailing?.includes(matches.targetId) ? 'wailing' : 'cursing';
        if (matches.id === '1C9F')
          data.sphere.push(target);
        else
          data.donut.push(target);
      },
    },
    {
      id: 'Dun Scaith Atomos Response',
      type: 'StartsUsing',
      netRegex: { id: ['1C9F', '1CA0'], capture: false },
      delaySeconds: 1,
      suppressSeconds: 5,
      alertText: (data, _matches, output) => {
        if (data.donut?.length === 2) {
          return output.goToAnyUntethered!();
        } else if (data.sphere?.length === 2) {
          return output.avoidAllUntethered!();
        } else if (data.donut?.length === 1) {
          // Wailing Atomos is blue, Cursing Atomos is yellow.
          // If there's exactly 1 Chakram, the other Atomos is irrelevant.
          // (Any Chakram Atomos is guaranteed to be safe.)
          if (data.donut?.[0] === 'wailing')
            return output.goToUntetheredBlue!();

          return output.goToUntetheredYellow!();
        }
        // If there's only a Sphere on the field, the other Atomos color isn't guaranteed safe.
        // Therefore we need to specify staying away from the Sphere-tethered Atomos.
        if (data.sphere?.[0] === 'wailing')
          return output.avoidUntetheredBlue!();

        return output.avoidUntetheredYellow!();
      },
      outputStrings: {
        goToAnyUntethered: {
          en: 'Go To Any Untethered',
          de: 'Gehe zu einem Unverbundenen',
          fr: 'Allez sous une Gueule non liée',
          ja: '線のないアトモスに近づく',
          cn: '靠近无线小怪',
          ko: '아무 아트모스 근처로',
        },
        avoidAllUntethered: {
          en: 'Avoid All Untethered',
          de: 'Vermeide alle Unverbundenen',
          fr: 'Évitez toutes les Gueules non liées',
          ja: '線のないアトモスから離れる',
          cn: '远离无线小怪',
          ko: '모든 아트모스 피하기',
        },
        goToUntetheredBlue: {
          en: 'Go to Untethered Blue',
          de: 'Gehe zu dem nicht verbundenen blauem Atomos',
          fr: 'Allez sous une Gueule bleue non liée',
          ja: '線のない青色アトモスに近づく',
          cn: '靠近蓝色小怪',
          ko: '파란 아트모스로 이동',
        },
        goToUntetheredYellow: {
          en: 'Go to Untethered Yellow',
          de: 'Gehe zu dem nicht verbundenen gelben Atomos',
          fr: 'Allez sous une Gueule jaune non liée',
          ja: '線のない黄色アトモスに近づく',
          cn: '靠近黄色小怪',
          ko: '노란 아트모스로 이동',
        },
        avoidUntetheredBlue: {
          en: 'Avoid Untethered Blue',
          de: 'Weiche dem nicht verbundenen blauem Atomos aus',
          fr: 'Évitez une Gueule bleue non liée',
          ja: '線のない青色アトモスから離れる',
          cn: '远离蓝色小怪',
          ko: '파란 아트모스 피하기',
        },
        avoidUntetheredYellow: {
          en: 'Avoid Untethered Yellow',
          de: 'Weiche dem nicht verbundenen gelben Atomos aus',
          fr: 'Évitez une Gueule jaune non liée',
          ja: '線のない黄色アトモスから離れる',
          cn: '远离黄色小怪',
          ko: '노란 아트모스 피하기',
        },
      },
    },
    {
      id: 'Dun Scaith Atomos Cleanup',
      type: 'Ability',
      netRegex: { id: ['1CA1', '1CA2'], capture: false },
      run: (data) => {
        delete data.cursing;
        delete data.wailing;
        delete data.sphere;
        delete data.donut;
      },
    },
    {
      id: 'Dun Scaith Blackfire',
      type: 'StartsUsing',
      netRegex: { id: '1CAA', source: 'Ferdiad Hollow', capture: false },
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid puddles',
          de: 'Flächen ausweichen',
          fr: 'Évitez les zones au sol',
          ja: '円範囲攻撃、避ける',
          cn: '离开圈圈',
          ko: '장판 피하기',
        },
      },
    },
    {
      // https://xivapi.com/Status/1137
      id: 'Dun Scaith Debilitator Fire',
      type: 'GainsEffect',
      netRegex: { effectId: '471', capture: false },
      suppressSeconds: 10,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Change puddles to water',
          de: 'Ändere Flächen zu Wasser',
          fr: 'Changez les zones au sol en eau',
          ja: '青い水に入れ替える',
          cn: '将地上的圈踩成蓝色',
          ko: '파란 장판으로 바꾸기',
        },
      },
    },
    {
      // https://xivapi.com/Status/1157
      id: 'Dun Scaith Debilitator Water',
      type: 'GainsEffect',
      netRegex: { effectId: '485', capture: false },
      suppressSeconds: 10,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Change puddles to fire',
          de: 'Ändere Flächen zu Feuer',
          fr: 'Changez les zones au sol en feu',
          ja: '赤い火に入れ替える',
          cn: '将地上的圈踩成红色',
          ko: '빨간 장판으로 바꾸기',
        },
      },
    },
    // PROTO-ULTIMA
    {
      // Covers both 1E52 Aetherochemical Flare and 1D9D Supernova. Response to both is the same.
      id: 'Dun Scaith Proto-Ultima Raid Damage',
      type: 'StartsUsing',
      netRegex: { id: ['1E52', '1D9D'], source: 'Proto Ultima', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Dun Scaith Prey Markers',
      type: 'GainsEffect',
      netRegex: { effectId: '232' },
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Prey--Avoid party and keep moving',
          de: 'Markiert - Weg von der Gruppe und bleib in Bewegung',
          fr: 'Marquage - Évitez les autres et bougez',
          ja: 'マーキング - 外に移動し続ける',
          cn: '离开人群并保持移动',
          ko: '파티에서 떨어지고 계속 움직이기',
        },
      },
    },
    {
      // Triggering off the Bit appearance
      // The cast time on Aetheromodulator is under 3 seconds
      id: 'Dun Scaith Bit Circles',
      type: 'AddedCombatant',
      netRegex: { npcNameId: '3782', capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid Bit AoEs',
          de: 'Weiche den Bit AoEs aus',
          fr: 'Évitez les AoE des forets',
          ja: 'AoEを避ける',
          cn: '躲避小型AOE',
          ko: '비트 장판 피하기',
        },
      },
    },
    {
      id: 'Dun Scaith Aether Collectors',
      type: 'AddedCombatant',
      netRegex: { npcNameId: '3781', capture: false },
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Kill collectors',
          de: 'Ätherakkumulator besiegen',
          fr: 'Détruisez les accumulateurs',
          ja: 'エーテル集積器を倒す',
          cn: '击杀以太收集器',
          ko: '에테르 집적기 파괴',
        },
      },
    },
    // SCATHACH
    {
      // The actual attack is 1D20, but the castbar windup is 1D1F
      id: 'Dun Scaith Shadespin',
      type: 'StartsUsing',
      netRegex: { id: '1D1[EF]', source: 'Scathach', capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid arm slaps',
          de: 'Weiche den Armschlägen aus',
          fr: 'Évitez les claques de bras',
          ja: '影の手を避ける',
          cn: '站在boss背后方向',
          ko: '날개 피하기',
        },
      },
    },
    {
      id: 'Dun Scaith Thirty Thorns',
      type: 'Ability',
      netRegex: { id: ['1D1B', '1D2B'], source: 'Scathach', capture: false },
      suppressSeconds: 5,
      response: Responses.outOfMelee(),
    },
    {
      id: 'Dun Scaith Thirty Arrows',
      type: 'StartsUsing',
      netRegex: { id: '1D2F', source: 'Scathach', capture: false },
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid line AoEs',
          de: 'Weiche den Linien AoEs aus',
          fr: 'Évitez les AoEs en ligne',
          ja: 'スカアハの正面に立たない',
          cn: '躲开boss正面路线',
          ko: '직선 장판 피하기',
        },
      },
    },
    {
      id: 'Dun Scaith Thirty Souls',
      type: 'StartsUsing',
      netRegex: { id: '1D32', source: 'Scathach', capture: false },
      response: Responses.aoe(),
    },
    {
      // Ordinarily we wouldn't use a game log line for this.
      // However, the RP text seems to be the only indicator.
      id: 'Dun Scaith Shadow Links',
      type: 'GameLog',
      gameLogType: 'Message',
      netRegex: { line: 'Shadows gather on the floor.*?', capture: false },
      suppressSeconds: 5,
      response: Responses.stopMoving(),
    },
    {
      id: 'Dun Scaith Shadow Limb Spawn',
      type: 'AddedCombatant',
      netRegex: { npcNameId: '5516', capture: false },
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Kill the hands',
          de: 'Besiege die Hand',
          fr: 'Tuez les mains',
          ja: '影の手を倒す',
          cn: '击杀影之手',
          ko: '손 처치하기',
        },
      },
    },
    {
      id: 'Dun Scaith Connla Spawn',
      type: 'StartsUsing',
      netRegex: { id: '1CD1', source: 'Connla', capture: false },
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid AoE, Kill Connla',
          de: 'Weiche AoE aus, besiege Connla',
          fr: 'Évitez les AoE, tuez Connla',
          ja: 'AoEを避け、コンラを倒す',
          cn: '躲避AOE后击杀康拉',
          ko: '장판 피하고 콘라 처치',
        },
      },
    },
    {
      // This trigger is common to both Scathach and Diabolos, since handling is 100% identical.
      id: 'Dun Scaith Nox Orbs',
      type: 'HeadMarker',
      netRegex: { id: '005C' },
      condition: Conditions.targetIsYou(),
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Take orb outside',
          de: 'Orb nach außen bringen',
          fr: 'Prenez l\'orbe à l\'extérieur',
          ja: '黒い球体を外に引く',
          cn: '把球带出人群，移动到球不再出现为止',
          ko: '구슬 외곽으로 유도',
        },
      },
    },
    {
      // This trigger is common to both Scathach and Diabolos, since handling is 100% identical.
      id: 'Dun Scaith Shadethrust',
      type: 'StartsUsing',
      netRegex: { id: ['1D23', '1C1A'], source: ['Scathach', 'Diabolos Hollow'], capture: false },
      response: Responses.awayFromFront(),
    },
    // DIABOLOS
    {
      id: 'Dun Scaith Ultimate Terror',
      type: 'StartsUsing',
      netRegex: { id: '1C12', source: 'Diabolos', capture: false },
      response: Responses.getIn(),
    },
    {
      id: 'Dun Scaith Nightmare',
      type: 'StartsUsing',
      netRegex: { id: ['1C0E', '1C20'], capture: false },
      response: Responses.lookAway(),
    },
    {
      id: 'Dun Scaith Noctoshield',
      type: 'GainsEffect',
      netRegex: { target: 'Diabolos', effectId: '1AA', capture: false },
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Boss hitting hard--Shield/Mitigate',
          de: 'Harter Hit vom Boss - Schild/Milderung',
          fr: 'Le boss frappe fort - Bouclier/Mitigation',
          ja: '大ダメージ物理タンクバスター - ダメージ軽減/バリア',
          cn: 'MT大伤害物理死刑—注意减伤/治疗盾',
          ko: '탱커버스터 - 뎀감/보호막',
        },
      },
    },
    {
      id: 'Dun Scaith Ruinous Omen',
      type: 'StartsUsing',
      netRegex: { id: ['1C10', '1C11'], source: 'Diabolos', capture: false },
      suppressSeconds: 5,
      response: Responses.aoe(),
    },
    {
      id: 'Dun Scaith Deathgates',
      type: 'AddedCombatant',
      netRegex: { npcNameId: '5523', capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Kill the deathgates',
          de: 'Besiege die Tore des Todes',
          fr: 'Détruisez les portes de mort',
          ja: '召喚の扉を倒す',
          cn: '击杀召唤之门',
          ko: '소환의 문 파괴',
        },
      },
    },
    {
      id: 'Dun Scaith Camisado',
      type: 'StartsUsing',
      netRegex: { id: '1C19', source: 'Diabolos Hollow' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Dun Scaith Hollow Night',
      type: 'HeadMarker',
      netRegex: { id: '005B' },
      alertText: (data, matches, output) => {
        if (matches.target === data.me)
          return output.gazeStackOnYou!();

        return output.stackOnAndLookAway!({ player: data.ShortName(matches.target) });
      },
      outputStrings: {
        gazeStackOnYou: {
          en: 'Gaze stack on YOU',
          de: 'Blick-Sammeln auf DIR',
          fr: 'Package sur VOUS',
          ja: '自分に頭割り',
          cn: '点名分摊',
          ko: '시선 쉐어 대상자',
        },
        stackOnAndLookAway: {
          en: 'Stack on ${player} and look away',
          de: 'Sammeln bei ${player} und wewg schauen',
          fr: 'Packez-vous sur ${player} et regardez ailleurs',
          ja: '${player}に頭割り、見ない',
          cn: '靠近并背对${player}分摊',
          ko: '${player} 쉐어, 바라보지않기',
        },
      },
    },
    {
      id: 'Dun Scaith Hollow Omen',
      type: 'StartsUsing',
      netRegex: { id: ['1C22', '1C23'], source: 'Diabolos Hollow', capture: false },
      suppressSeconds: 5,
      response: Responses.bigAoe(),
    },
    {
      // This is the tank version of the stack marker. It has minimal circular bordering
      id: 'Dun Scaith Blindside',
      type: 'HeadMarker',
      netRegex: { id: '005D' },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Dun Scaith Earth Shaker',
      type: 'HeadMarker',
      netRegex: { id: '0028' },
      condition: Conditions.targetIsYou(),
      response: Responses.earthshaker(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Aether': 'Äthersphäre',
        'Aether Collector': 'Ätherakkumulator',
        'Aetherial Chakram': 'ätherisch(?:e|er|es|en) Chakram',
        'Connla': 'Connla',
        'Cursing Atomos': 'Fluch-Atomos',
        'Deathgate': 'Tor des Todes',
        'Deathgaze Hollow': 'Nihil-Thanatos',
        'Diabolos Hollow': 'Nihil-Diabolos',
        'Diabolos(?! )': 'Diabolos',
        'Ferdiad Hollow': 'Nihil-Ferdiad',
        'Lifegate': 'Tor des Lebens',
        'Proto Bit': 'Proto-Drohne',
        'Proto Ultima': 'Proto-Ultima',
        'Scathach': 'Scathach',
        'Shadow Limb': 'Schattenhand',
        'Shadowcourt Jester': 'Schattenhof-Narr',
        'Shadows gather on the floor': 'Schatten sammeln sich auf dem Boden',
        'The Queen\'s Graces': 'Anmut der Königin',
        'The Queen\'s Pride': 'Stolz der Königin',
        'The Rostrum': 'Podium',
        'The main deck': 'Hauptdeck',
        'Void Sprite': 'Nichts-Exergon',
        'Wailing Atomos': 'Heul-Atomos',
      },
      'replaceText': {
        '--deathgate spawn--': '--Tor des Todes erscheint--',
        '--lifegate spawn--': '--Tor des Lebens erscheint--',
        '--shadows gather--': '--Schatten sammeln sich--',
        '--towers appear--': '--Türme erscheinen--',
        'Aether Bend': 'Ätherbeugung',
        'Aetherial Pool': 'Ätherstau',
        'Aetherochemical Flare': 'Ätherochemisches Flare',
        'Aetherochemical Laser': 'Ätherochemischer Laser',
        'Black Wind': 'Schwarzer Wind',
        'Blackbolt': 'Schwarzer Schuss',
        'Blackfire': 'Schwarzfeuer',
        'Blinding Shadow': 'Blendender Schatten',
        'Blindside': 'Schwache Seite',
        'Bolt Of Darkness': 'Dunkles Geschoss',
        '(?<! )Camisado': 'Camisado',
        'Citadel Buster': 'Zitadellensprenger',
        'Debilitator': 'Schwachmacher',
        'Diffractive Laser': 'Diffraktiver Laser',
        'Doomsay': 'Todesfluch',
        'Double Edge': 'Doppelschliff',
        'Dream Shroud': 'Traumgewand',
        'Earth Shaker': 'Erdstoß',
        'Eikonizer': 'Ikonisator',
        'Explosion': 'Explosion',
        'Flameflow': 'Flammenstrom',
        'Flare Star': 'Flare-Stern',
        'Hollow Camisado': 'Hohles Camisado',
        'Hollow Night(?!mare)': 'Hohlnacht',
        'Hollow Nightmare': 'Hohler Albtraum',
        'Hollow Omen': 'Hohles Omen',
        'Hollow Terror': 'Hohler Terror',
        'Hollowshield': 'Hohlschild',
        'Jester\'s Jig': 'Narretei',
        'Jester\'s Reap': 'Narrensense',
        'Jester\'s Reward': 'Lohn des Possenreißers',
        'Jongleur\'s X': 'Jonglage',
        'Juggling Sphere': 'Jonglierball',
        'Light Pillar': 'Lichtsäule',
        'Manos': 'Manos',
        '(?<!Hollow )Nightmare': 'Albtraum',
        'Night Terror': 'Nachtterror',
        'Noctoshield': 'Nachtschild',
        'Nox': 'Nox',
        'Particle Beam': 'Partikelstrahl',
        'Pavor Inanis': 'Pavor Inanis',
        'Pitfall': 'Berstender Boden',
        'Ruinous Omen': 'Ruinöses Omen',
        'Shadesmite': 'Schattenhieb',
        'Shadespin': 'Dunkeldrehung',
        'Shadethrust': 'Schattenschub',
        'Shadow Release': 'Entschattung',
        'Sleight': 'Trick',
        'Soar': 'Auffliegen',
        'Spike Of Darkness': 'Spitze der Dunkelheit',
        'Supernova': 'Wahnstrahl',
        '(?<!( |t))Terror': 'Terror',
        'Thirty Arrows': 'Dreißig Pfeile',
        'Thirty Cries': 'Dreißig Schreie',
        'Thirty Sickles': 'Dreißig Sicheln',
        'Thirty Souls': 'Dreißig Seelen',
        'Thirty Thorns': 'Dreißig Dornen',
        'Touchdown': 'Himmelsturz',
        'Ultimate Terror': 'Ultimativer Terror',
        'Void Aero II(?!I)': 'Nichts-Windra',
        'Void Aero III': 'Nichts-Windga',
        'Void Aero IV': 'Nichts-Windka',
        'Void Blizzard III': 'Nichts-Eisga',
        'Void Blizzard IV': 'Nichts-Eiska',
        'Void Death(?! IV)': 'Nichts-Tod',
        'Void Death IV': 'Nichts-Todka',
        'Wormhole': 'Wurmloch',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Aether': 'sphère éthérée',
        'Aether Collector': 'accumulateur d\'éther',
        'Aetherial Chakram': 'chakram éthéré',
        'Connla': 'Connla',
        'Cursing Atomos': 'gueule maudissante',
        'Deathgate': 'porte de mort',
        'Deathgaze Hollow': 'mortalis nihil',
        'Diabolos Hollow': 'Diabolos nihil',
        'Diabolos(?! )': 'Diabolos',
        'Ferdiad Hollow': 'Ferdiad nihil',
        'Lifegate': 'porte de vie',
        'Proto Bit': 'proto-foret',
        'Proto Ultima': 'Proto-Ultima',
        'Scathach': 'Scáthach',
        'Shadow Limb': 'Mains d\'ombre',
        'Shadowcourt Jester': 'bouffon de la Cour des ombres',
        'Shadows gather on the floor': 'Le pouvoir des ombres se concentre sur le sol',
        'The Queen\'s Graces': 'Grâces de la Reine',
        'The Queen\'s Pride': 'Fierté de la Reine',
        'The Rostrum': 'Scène',
        'The main deck': 'Pont principal',
        'Void Sprite': 'élémentaire du vide',
        'Wailing Atomos': 'gueule gémissante',
      },
      'replaceText': {
        '--deathgate spawn--': '--apparition des portes de mort--',
        '--lifegate spawn--': '--apparition des portes de vie--',
        '--shadows gather--': '--pouvoir des ombres--',
        '--towers appear--': '--apparition des tours--',
        'Aether Bend': 'Diffraction éthérée',
        'Aetherial Pool': 'Attraction éthéréenne',
        'Aetherochemical Flare': 'Brasier magismologique',
        'Aetherochemical Laser': 'Laser magismologique',
        'Black Wind': 'Vent noir',
        'Blackbolt': 'Éclair noir',
        'Blackfire': 'Flamme noire',
        'Blinding Shadow': 'Ombre aveuglante',
        'Blindside': 'Mystification',
        'Bolt Of Darkness': 'Éclair des ténèbres',
        '(?<!Hollow )Camisado(?! nihil)': 'Camisado',
        'Citadel Buster': 'Casse-citadelle',
        'Debilitator': 'Débilitant',
        'Diffractive Laser': 'Rayon accélérateur',
        'Doomsay': 'Malédiction funeste',
        'Double Edge': 'Double tranchant',
        'Dream Shroud': 'Voile onirique',
        'Earth Shaker': 'Secousse',
        'Eikonizer': 'Casse-Primordial',
        'Explosion': 'Explosion',
        'Flameflow': 'Flot de flammes',
        'Flare Star': 'Astre flamboyant',
        'Hollow Camisado': 'Camisado nihil',
        'Hollow Night(?!mare)': 'Nuit nihil',
        'Hollow Nightmare': 'Cauchemar nihil',
        'Hollow Omen': 'Présage nihil',
        'Hollow Terror': 'Terreur nihil',
        'Hollowshield': 'Bouclier nihil',
        'Jester\'s Jig': 'Gigue du bouffon',
        'Jester\'s Reap': 'Bouffon du roi',
        'Jester\'s Reward': 'Récompense du bouffon',
        'Jongleur\'s X': 'Jongleur fou',
        'Juggling Sphere': 'Sphère jongleuse',
        'Light Pillar': 'Colonne lumineuse',
        'Manos': 'Concentration ombrale',
        'Night Terror': 'Terreur nocturne',
        '(?<!Hollow )Nightmare': 'Cauchemar',
        'Noctoshield': 'Nocto-bouclier',
        'Nox': 'Nox',
        'Particle Beam': 'Rayon explosif',
        'Pavor Inanis': 'Pavor inanis',
        'Pitfall': 'Embûche',
        'Ruinous Omen': 'Mauvais présage',
        'Shadesmite': 'Frappe ombrale',
        'Shadespin': 'Tourbillon ombral',
        'Shadethrust': 'Transpercement ténèbreux',
        'Shadow Release': 'Libération ombrale',
        'Sleight': 'Maestria',
        'Soar': 'Ascension',
        'Spike Of Darkness': 'Pointes des ténèbres',
        'Supernova': 'Démence spatiale',
        '(?<! )Terror': 'Terreur',
        'Thirty Arrows': 'Trente flèches',
        'Thirty Cries': 'Trente cris',
        'Thirty Sickles': 'Trente faucilles',
        'Thirty Souls': 'Trente âmes',
        'Thirty Thorns': 'Trente épines',
        'Touchdown': 'Atterrissage',
        'Ultimate Terror': 'Terreur ultime',
        'Void Aero II(?!I)': 'Extra Vent du néant',
        'Void Aero III': 'Méga Vent du néant',
        'Void Aero IV': 'Giga Vent du néant',
        'Void Blizzard III': 'Méga Glace du néant',
        'Void Blizzard IV': 'Giga Glace du néant',
        'Void Death': 'Mort du néant',
        'Wormhole': 'Vortex',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Aether(?! |ial)': 'エーテルスフィア',
        'Aether Collector': 'エーテル集積器',
        'Aetherial Chakram': 'エーテルチャクラム',
        'Connla': 'コンラ',
        'Cursing Atomos': '怨声のアトモス',
        'Deathgate': '召喚の扉',
        'Deathgaze Hollow': 'デスゲイズ・ホロー',
        'Diabolos Hollow': 'ディアボロス・ホロー',
        'Diabolos(?! )': 'ディアボロス',
        'Ferdiad Hollow': 'フェルディア・ホロー',
        'Lifegate': '魔力の扉',
        'Proto Bit': 'プロトビット',
        'Proto Ultima': 'プロトアルテマ',
        'Scathach': 'スカアハ',
        'Shadow Limb': '影の手',
        'Shadowcourt Jester': 'クィーンズ・ジェスター',
        'Shadows gather on the floor': '床に影の力が集束していく',
        'The Queen\'s Graces': '女王の間',
        'The Queen\'s Pride': '女王の観閲広場',
        'The Rostrum': '道化の舞台',
        'The main deck': 'レディ・ラドリア号主甲板',
        'Void Sprite': 'ヴォイド・スプライト',
        'Wailing Atomos': '虚声のアトモス',
      },
      'replaceText': {
        '--deathgate spawn--': '--召喚の扉出現--',
        '--lifegate spawn--': '--魔力の扉出現--',
        '--shadows gather--': '--影の力を集めてる--',
        '--towers appear--': '--塔出現--',
        'Aether Bend': 'エーテルベント',
        'Aetherial Pool': 'エーテリアルプール',
        'Aetherochemical Flare': '魔科学フレア',
        'Aetherochemical Laser': '魔科学レーザー',
        'Black Wind': 'ブラックウインド',
        'Blackbolt': 'ブラックボルト',
        'Blackfire': '漆黒の炎',
        'Blinding Shadow': 'ブライテストシャドウ',
        'Blindside': 'ブラインドサイド',
        'Bolt Of Darkness': 'ダークネスボルト',
        '(?<!Hollow )Camisado': 'カミサドー',
        'Citadel Buster': 'シタデルバスター',
        'Debilitator': 'ウィークメーカー',
        'Diffractive Laser': '拡散レーザー',
        'Doomsay': '死の呪い',
        'Double Edge': '諸刃の剣',
        'Dream Shroud': 'ドリームシュラウド',
        'Earth Shaker': 'アースシェイカー',
        'Eikonizer': 'プライマルバスター',
        'Explosion': '爆発',
        'Flameflow': 'フレイムフロウ',
        'Flare Star': 'フレアスター',
        'Hollow Camisado': 'ホローカミサドー',
        'Hollow Night(?!mare)': 'ホローナイト',
        'Hollow Nightmare': 'ホローナイトメア',
        'Hollow Omen': 'ホローオーメン',
        'Hollow Terror': 'ホローテラー',
        'Hollowshield': 'ホローシールド',
        'Jester\'s Jig': 'ジェスターズジグ',
        'Jester\'s Reap': 'ジェスターズリープ',
        'Jester\'s Reward': 'ジェスターズリワード',
        'Jongleur\'s X': 'ダークジャグリング',
        'Juggling Sphere': 'ジャグリング・スフィア',
        'Light Pillar': 'リヒト・ゾイレ',
        'Manos': '影の凝縮',
        'Night Terror': 'ナイトテラー',
        '(?<!Hollow )Nightmare': 'ナイトメア',
        'Noctoshield': 'ノクトシールド',
        'Nox': 'ノックス',
        'Particle Beam': '波動爆発',
        'Pavor Inanis': 'パボルイナニス',
        'Pitfall': '強襲',
        'Ruinous Omen': 'ルイナスオーメン',
        'Shadesmite': 'シェードスマイト',
        'Shadespin': 'シェードスピン',
        'Shadethrust': 'シャドウスラスト',
        'Shadow Release': '影の解放',
        'Sleight': 'スレイト',
        'Soar': '飛翔',
        'Spike Of Darkness': 'ダークネススパイク',
        'Supernova': 'インサニティサン',
        '(?<! )Terror': '恐怖',
        'Thirty Arrows': 'サーティー・アローズ',
        'Thirty Cries': 'サーティー・クライス',
        'Thirty Sickles': 'サーティー・シックルズ',
        'Thirty Souls': 'サーティー・ソウルズ',
        'Thirty Thorns': 'サーティー・ソーンズ',
        'Touchdown': 'タッチダウン',
        'Ultimate Terror': 'アルティメットテラー',
        'Void Aero II(?!I)': 'ヴォイド・エアロラ',
        'Void Aero III': 'ヴォイド・エアロガ',
        'Void Aero IV': 'ヴォイド・エアロジャ',
        'Void Blizzard III': 'ヴォイド・ブリザガ',
        'Void Blizzard IV': 'ヴォイド・ブリザジャ',
        'Void Death(?! )': 'ヴォイド・デス',
        'Void Death IV': 'ヴォイド・デスジャ',
        'Wormhole': 'ワームホール',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Aether(?! |ial)': '以太晶球',
        'Aether Collector': '以太收集器',
        'Aetherial Chakram': '以太轮',
        'Connla': '康拉',
        'Cursing Atomos': '怨声的阿托莫斯',
        'Deathgate': '召唤之门',
        'Deathgaze Hollow': '虚空死亡凝视',
        'Diabolos Hollow': '虚空迪亚波罗斯',
        'Diabolos(?! )': '迪亚波罗斯',
        'Ferdiad Hollow': '虚空弗迪亚',
        'Lifegate': '魔力之门',
        'Proto Bit': '原型浮游炮',
        'Proto Ultima': '究极神兵原型',
        'Scathach': '斯卡哈',
        'Shadow Limb': '影之手',
        'Shadowcourt Jester': '女王小丑',
        'Shadows gather on the floor': '影之力正在向地面聚集',
        'The Queen\'s Graces': '女王之间',
        'The Queen\'s Pride': '女王的阅兵广场',
        'The Rostrum': '小丑舞台',
        'The main deck': '主甲板',
        'Void Sprite': '虚无元精',
        'Wailing Atomos': '虚声的阿托莫斯',
      },
      'replaceText': {
        '--deathgate spawn--': '--召唤之门出现--',
        '--lifegate spawn--': '--魔力之门出现--',
        '--shadows gather--': '--影之力--',
        '--towers appear--': '--塔出现--',
        'Aether Bend': '以太曲折',
        'Aetherial Pool': '以太池',
        'Aetherochemical Flare': '魔科学核爆',
        'Aetherochemical Laser': '魔科学激光',
        'Black Wind': '黑风',
        'Blackbolt': '黑雷',
        'Blackfire': '漆黑之炎',
        'Blinding Shadow': '蔽目之影',
        'Blindside': '盲点袭击',
        'Bolt Of Darkness': '黑暗电光',
        '(?<! )Camisado': '夜袭',
        'Citadel Buster': '攻城炮',
        'Debilitator': '弱点生成',
        'Diffractive Laser': '扩散射线',
        'Doomsay': '死亡诅咒',
        'Double Edge': '双刃剑',
        'Dream Shroud': '梦境之障',
        'Earth Shaker': '大地摇动',
        'Eikonizer': '荒蛮破坏者',
        'Explosion': '爆炸',
        'Flameflow': '烈炎流',
        'Flare Star': '耀星',
        'Hollow Camisado': '虚空夜袭',
        'Hollow Night(?!mare)': '虚空暗夜',
        'Hollow Nightmare': '虚空噩梦',
        'Hollow Omen': '虚空预兆',
        'Hollow Terror': '虚空恐惧',
        'Hollowshield': '虚空之障',
        'Jester\'s Jig': '小丑的吉格舞',
        'Jester\'s Reap': '小丑收割',
        'Jester\'s Reward': '小丑的奖励',
        'Jongleur\'s X': '黑暗杂耍',
        'Juggling Sphere': '杂耍球',
        'Light Pillar': '光柱',
        'Manos': '影子凝缩',
        'Night Terror': '暗夜恐惧',
        '(?<!Hollow )Nightmare': '噩梦',
        'Noctoshield': '夜障',
        'Nox': '夜',
        'Particle Beam': '波动爆炸',
        'Pavor Inanis': '虚空之惊',
        'Pitfall': '强袭',
        'Ruinous Omen': '破灭预兆',
        'Shadesmite': '阴影重击',
        'Shadespin': '阴影回旋',
        'Shadethrust': '暗影直刺',
        'Shadow Release': '影子释放',
        'Sleight': '诡计',
        'Soar': '飞翔',
        'Spike Of Darkness': '黑暗钉刺',
        'Supernova': '空间错乱',
        '(?<! )Terror': '恐怖',
        'Thirty Arrows': '三十矢',
        'Thirty Cries': '三十泣',
        'Thirty Sickles': '三十镰',
        'Thirty Souls': '三十魂',
        'Thirty Thorns': '三十棘',
        'Touchdown': '空降',
        'Ultimate Terror': '究极恐惧',
        'Void Aero II(?!I)': '虚空烈风',
        'Void Aero III': '虚空暴风',
        'Void Aero IV': '虚空飙风',
        'Void Blizzard III': '虚空冰封',
        'Void Blizzard IV': '虚空冰澈',
        'Void Death(?! )': '虚空即死',
        'Void Death IV': '虚空极死',
        'Wormhole': '虫洞',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Aether': '에테르 구체',
        'Aether Collector': '에테르 집적기',
        'Aetherial Chakram': '에테르 차크람',
        'Connla': '콘라',
        'Cursing Atomos': '원성의 아토모스',
        'Deathgate': '소환의 문',
        'Deathgaze Hollow': '공허의 저승파수꾼',
        'Diabolos Hollow': '공허의 디아볼로스',
        'Diabolos(?! )': '디아볼로스',
        'Ferdiad Hollow': '공허의 페르디아',
        'Lifegate': '마력의 문',
        'Proto Bit': '프로토 비트',
        'Proto Ultima': '프로토 알테마',
        'Scathach': '스카하크',
        'Shadow Limb': '그림자 손',
        'Shadowcourt Jester': '여왕의 어릿광대',
        'Shadows gather on the floor': '바닥에 그림자의 힘이 모여듭니다',
        'The Queen\'s Graces': '여왕의 방',
        'The Queen\'s Pride': '여왕의 사열 광장',
        'The Rostrum': '광대의 무대',
        'The main deck': '레이디 래들리아호 주 갑판',
        'Void Sprite': '보이드 정령',
        'Wailing Atomos': '허성의 아토모스',
      },
      'replaceText': {
        '--deathgate spawn--': '--소환의 문 생성--',
        '--lifegate spawn--': '--마력의 문 생성--',
        '--shadows gather--': '--그림자 모임--',
        '--towers appear--': '--기둥 생성--',
        'Aether Bend': '에테르 굴절',
        'Aetherial Pool': '에테르 웅덩이',
        'Aetherochemical Flare': '마과학 플레어',
        'Aetherochemical Laser': '마과학 레이저',
        'Black Wind': '검은 바람',
        'Blackbolt': '검은 전광',
        'Blackfire': '칠흑의 불꽃',
        'Blinding Shadow': '눈부신 그림자',
        'Blindside': '맹점 기습',
        'Bolt Of Darkness': '암흑포',
        '(?<!Hollow )Camisado': '야습',
        'Citadel Buster': '공성포',
        'Debilitator': '약점 부여',
        'Diffractive Laser': '확산 레이저',
        'Doomsay': '죽음의 저주',
        'Double Edge': '양날의 검',
        'Dream Shroud': '꿈의 장막',
        'Earth Shaker': '요동치는 대지',
        'Eikonizer': '대 야만신포',
        'Explosion': '폭발',
        'Flameflow': '화염 순환',
        'Flare Star': '타오르는 별',
        'Hollow Camisado': '공허의 야습',
        'Hollow Night(?!mare)': '공허의 밤',
        'Hollow Nightmare': '공허의 악몽',
        'Hollow Omen': '공허의 전조',
        'Hollowshield': '공허의 방패',
        'Jester\'s Jig': '광대의 춤',
        'Jester\'s Reap': '광대의 낫질',
        'Jester\'s Reward': '광대의 답례',
        'Jongleur\'s X': '어둠의 곡예',
        'Juggling Sphere': '마술 구체',
        'Light Pillar': '빛 기둥',
        'Manos': '그림자 응축',
        '(?<!Hollow )Nightmare': '악몽',
        'Noctoshield': '밤의 방패',
        'Nox': '암야',
        'Particle Beam': '파동 폭발',
        'Pavor Inanis': '공허의 경외',
        'Pitfall': '강습',
        'Ruinous Omen': '재앙의 전조',
        'Shadesmite': '그림자 강타',
        'Shadespin': '그림자 회전',
        'Shadethrust': '그림자 관통',
        'Shadow Release': '그림자 해방',
        'Sleight': '교묘한 술책',
        'Soar': '비상',
        'Spike Of Darkness': '어둠의 강타',
        'Supernova': '광란의 태양',
        'Ultimate Terror': '궁극의 공포',
        '(?<!Ultimate )Terror': '공포',
        'Thirty Arrows': '서른 화살',
        'Thirty Cries': '서른 울음',
        'Thirty Sickles': '서른 낫',
        'Thirty Souls': '서른 혼',
        'Thirty Thorns': '서른 가시',
        'Touchdown': '착지',
        'Void Aero II(?!I)': '보이드 에어로라',
        'Void Aero III': '보이드 에어로가',
        'Void Aero IV': '보이드 에어로쟈',
        'Void Blizzard III': '보이드 블리자가',
        'Void Blizzard IV': '보이드 블리자쟈',
        'Void Death': '보이드 데스',
        'Wormhole': '웜홀',
      },
    },
  ],
};

export default triggerSet;
