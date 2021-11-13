Options.Triggers.push({
    zoneId: ZoneId.EdensGateResurrection,
    timelineFile: 'e1n.txt',
    triggers: [
        {
            id: 'E1N Eden\'s Gravity',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3D94', source: 'Eden Prime', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3D94', source: 'Prim-Eden', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3D94', source: 'Primo-Éden', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3D94', source: 'エデン・プライム', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3D94', source: '至尊伊甸', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3D94', source: '에덴 프라임', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'E1N Fragor Maximus',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3DA4', source: 'Eden Prime', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3DA4', source: 'Prim-Eden', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3DA4', source: 'Primo-Éden', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3DA4', source: 'エデン・プライム', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3DA4', source: '至尊伊甸', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3DA4', source: '에덴 프라임', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'E1N Dimensional Shift',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3D9C', source: 'Eden Prime', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3D9C', source: 'Prim-Eden', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3D9C', source: 'Primo-Éden', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3D9C', source: 'エデン・プライム', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3D9C', source: '至尊伊甸', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3D9C', source: '에덴 프라임', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'E1N Eden\'s Flare',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3D97', source: 'Eden Prime', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3D97', source: 'Prim-Eden', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3D97', source: 'Primo-Éden', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3D97', source: 'エデン・プライム', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3D97', source: '至尊伊甸', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3D97', source: '에덴 프라임', capture: false }),
            response: Responses.getUnder('alert'),
        },
        {
            id: 'E1N Vice of Vanity You',
            type: 'Tether',
            netRegex: NetRegexes.tether({ id: '0011', target: 'Eden Prime' }),
            netRegexDe: NetRegexes.tether({ id: '0011', target: 'Prim-Eden' }),
            netRegexFr: NetRegexes.tether({ id: '0011', target: 'Primo-Éden' }),
            netRegexJa: NetRegexes.tether({ id: '0011', target: 'エデン・プライム' }),
            netRegexCn: NetRegexes.tether({ id: '0011', target: '至尊伊甸' }),
            netRegexKo: NetRegexes.tether({ id: '0011', target: '에덴 프라임' }),
            condition: (data, matches) => data.me === matches.source,
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Tank Laser on YOU',
                    de: 'Tank Laser auf DIR',
                    fr: 'Tank laser sur VOUS',
                    ja: '自分にタンクレーザー',
                    cn: '坦克射线点名',
                    ko: '탱 레이저 대상자',
                },
            },
        },
        {
            id: 'E1N Spear Of Paradise',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3DA1', source: 'Eden Prime' }),
            netRegexDe: NetRegexes.startsUsing({ id: '3DA1', source: 'Prim-Eden' }),
            netRegexFr: NetRegexes.startsUsing({ id: '3DA1', source: 'Primo-Éden' }),
            netRegexJa: NetRegexes.startsUsing({ id: '3DA1', source: 'エデン・プライム' }),
            netRegexCn: NetRegexes.startsUsing({ id: '3DA1', source: '至尊伊甸' }),
            netRegexKo: NetRegexes.startsUsing({ id: '3DA1', source: '에덴 프라임' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'E1N Vice of Apathy Mark',
            type: 'HeadMarker',
            netRegex: NetRegexes.headMarker({ id: '001C' }),
            condition: Conditions.targetIsYou(),
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Drop Puddle, Run Middle',
                    de: 'Flächen ablegen, danach in die Mitte',
                    fr: 'Déposez les zones au sol, courez au milieu',
                    ja: '捨て、そして中へ',
                    cn: '放圈，回中央',
                    ko: '장판 깔고 중앙으로',
                },
            },
        },
        {
            // 10.5 second cast, maybe warn 6 seconds ahead so that folks bait outside.
            id: 'E1N Pure Light',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3DA3', source: 'Eden Prime', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3DA3', source: 'Prim-Eden', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3DA3', source: 'Primo-Éden', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3DA3', source: 'エデン・プライム', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3DA3', source: '至尊伊甸', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3DA3', source: '에덴 프라임', capture: false }),
            delaySeconds: 4.5,
            response: Responses.getBehind(),
        },
    ],
    timelineReplace: [
        {
            'locale': 'de',
            'replaceSync': {
                'Eden(?! )': 'Eden',
                'Eden Prime': 'Prim-Eden',
                'Guardian of Paradise': 'Hüter von Eden',
            },
            'replaceText': {
                'Delta Attack': 'Delta-Attacke',
                'Dimensional Shift': 'Dimensionsverschiebung',
                'Eden\'s Blizzard III': 'Eden-Eisga',
                'Eden\'s Fire III': 'Eden-Feuga',
                'Eden\'s Flare': 'Eden-Flare',
                'Eden\'s Gravity': 'Eden-Gravitas',
                'Eden\'s Thunder III': 'Eden-Blitzga',
                'Eternal Breath': 'Ewiger Atem',
                'Fragor Maximus': 'Fragor Maximus',
                'Heavensunder': 'Himmelsdonner',
                'Mana Burst': 'Manastoß',
                'Mana Slice': 'Manahieb',
                'Paradisal Dive': 'Paradiessturz',
                'Paradise Lost': 'Verlorenes Paradies',
                'Primeval Stasis': 'Urzeitliche Stase',
                'Pure Beam': 'Läuternder Strahl',
                'Pure Light': 'Läuterndes Licht',
                'Spear Of Paradise': 'Paradiesspeer',
                'Unto Dust': 'Sprengung',
                'Vice And Virtue': 'Laster und Tugend',
                'Vice Of Apathy': 'Laster der Apathie',
                'Vice Of Vanity': 'Laster der Eitelkeit',
            },
        },
        {
            'locale': 'fr',
            'replaceSync': {
                'Eden(?! )': 'Éden',
                'Eden Prime': 'Primo-Éden',
                'Guardian of Paradise': 'Gardien du jardin',
            },
            'replaceText': {
                'Delta Attack': 'Attaque Delta',
                'Dimensional Shift': 'Translation dimensionnelle',
                'Eden\'s Blizzard III': 'Méga Glace édénique',
                'Eden\'s Fire III': 'Méga Feu édénique',
                'Eden\'s Flare': 'Brasier édénique',
                'Eden\'s Gravity': 'Gravité édénique',
                'Eden\'s Thunder III': 'Méga Foudre édénique',
                'Eternal Breath': 'Souffle de l\'éternel',
                'Fragor Maximus': 'Fragor Maximus',
                'Heavensunder': 'Ravageur de paradis',
                'Mana Burst': 'Explosion de mana',
                'Mana Slice': 'Taillade de mana',
                'Paradisal Dive': 'Piqué du paradis',
                'Paradise Lost': 'Paradis perdu',
                'Primeval Stasis': 'Stase primordiale',
                'Pure Beam': 'Rayon purificateur',
                'Pure Light': 'Lumière purificatrice',
                'Spear of Paradise': 'Lance du paradis',
                'Unto Dust': 'Déflagration',
                'Vice and Virtue': 'Vice et vertue',
                'Vice of Apathy': 'Péché d\'apathie',
                'Vice of Vanity': 'Péché de vanité',
            },
        },
        {
            'locale': 'ja',
            'replaceSync': {
                'Eden(?! )': 'エデン',
                'Eden Prime': 'エデン・プライム',
                'Guardian of Paradise': 'エデン・ガーデナー',
            },
            'replaceText': {
                'Delta Attack': 'デルタアタック',
                'Dimensional Shift': 'ディメンションシフト',
                'Eden\'s Blizzard III': 'エデン・ブリザガ',
                'Eden\'s Fire III': 'エデン・ファイガ',
                'Eden\'s Flare': 'エデン・フレア',
                'Eden\'s Gravity': 'エデン・グラビデ',
                'Eden\'s Thunder III': 'エデン・サンダガ',
                'Eternal Breath': 'エターナル・ブレス',
                'Fragor Maximus': 'フラゴルマクシマス',
                'Heavensunder': 'ヘヴンサンダー',
                'Mana Burst': 'マナバースト',
                'Mana Slice': 'マナスラッシュ',
                'Paradisal Dive': 'パラダイスダイブ',
                'Paradise Lost': 'パラダイスロスト',
                'Primeval Stasis': 'プライムイーバルステーシス',
                'Pure Beam': 'ピュアレイ',
                'Pure Light': 'ピュアライト',
                'Unto Dust': '爆裂',
                'Spear of Paradise': 'スピア・オブ・パラダイス',
                'Vice and Virtue': 'ヴァイス・アンド・ヴァーチュー',
                'Vice of Apathy': 'ヴァイス・オブ・アパシー',
                'Vice of Vanity': 'ヴァイス・オブ・ヴァニティー',
            },
        },
        {
            'locale': 'cn',
            'replaceSync': {
                'Eden(?! )': '伊甸',
                'Eden Prime': '至尊伊甸',
                'Guardian of Paradise': '伊甸守护者',
            },
            'replaceText': {
                'Delta Attack': '三角攻击',
                'Dimensional Shift': '空间转换',
                'Eden\'s Blizzard III': '伊甸冰封',
                'Eden\'s Fire III': '伊甸爆炎',
                'Eden\'s Flare': '伊甸核爆',
                'Eden\'s Gravity': '伊甸重力',
                'Eden\'s Thunder III': '伊甸暴雷',
                'Eternal Breath': '永恒吐息',
                'Fragor Maximus': '极大爆炸',
                'Heavensunder': '天国分断',
                'Mana Burst': '魔力爆发',
                'Mana Slice': '魔力斩击',
                'Paradisal Dive': '乐园冲',
                'Paradise Lost': '失乐园',
                'Primeval Stasis': '原初停滞',
                'Pure Beam': '净土射线',
                'Pure Light': '净土之光',
                'Spear of Paradise': '乐园之枪',
                'Unto Dust': '归于尘土',
                'Vice and Virtue': '恶习与美德',
                'Vice of Apathy': '冷漠之恶',
                'Vice of Vanity': '虚荣之恶',
            },
        },
        {
            'locale': 'ko',
            'replaceSync': {
                'Eden(?! )': '에덴',
                'Eden Prime': '에덴 프라임',
                'Guardian of Paradise': '에덴 정원사',
            },
            'replaceText': {
                'Delta Attack': '델타 공격',
                'Dimensional Shift': '차원 전환',
                'Eden\'s Blizzard III': '에덴 블리자가',
                'Eden\'s Fire III': '에덴 파이가',
                'Eden\'s Flare': '에덴 플레어',
                'Eden\'s Gravity': '에덴 그라비데',
                'Eden\'s Thunder III': '에덴 선더가',
                'Eternal Breath': '영원의 숨결',
                'Fragor Maximus': '우주 탄생',
                'Heavensunder': '천국의 낙뢰',
                'Mana Burst': '마나 폭발',
                'Mana Slice': '마나 베기',
                'Paradisal Dive': '낙원 강하',
                'Paradise Lost': '실낙원',
                'Primeval Stasis': '태초의 안정',
                'Pure Beam': '완전한 광선',
                'Pure Light': '완전한 빛',
                'Spear of Paradise': '낙원의 창',
                'Unto Dust': '폭렬',
                'Vice and Virtue': '선과 악',
                'Vice of Apathy': '냉담의 악덕',
                'Vice of Vanity': '허영의 악덕',
            },
        },
    ],
});
