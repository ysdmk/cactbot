Options.Triggers.push({
    zoneId: ZoneId.EdensPromiseUmbra,
    timelineFile: 'e9n.txt',
    triggers: [
        {
            id: 'E9N Ground-Razing Particle Beam',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '55ED', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '55ED', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '55ED', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '55ED', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '55ED', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '55ED', source: '어둠의 구름', capture: false }),
            durationSeconds: 5,
            response: Responses.aoe(),
        },
        {
            id: 'E9N The Art Of Darkness Right',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '5223', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '5223', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '5223', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '5223', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '5223', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '5223', source: '어둠의 구름', capture: false }),
            durationSeconds: 4,
            response: Responses.goLeft(),
        },
        {
            id: 'E9N The Art Of Darkness Left',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '5224', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '5224', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '5224', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '5224', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '5224', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '5224', source: '어둠의 구름', capture: false }),
            durationSeconds: 4,
            response: Responses.goRight(),
        },
        {
            id: 'E9N Wide-Angle Particle Beam',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '5AFF', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '5AFF', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '5AFF', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '5AFF', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '5AFF', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '5AFF', source: '어둠의 구름', capture: false }),
            response: Responses.awayFromFront('info'),
        },
        {
            id: 'E9N Zero-Form Particle Beam',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '55EB', source: 'Cloud Of Darkness' }),
            netRegexDe: NetRegexes.startsUsing({ id: '55EB', source: 'Wolke Der Dunkelheit' }),
            netRegexFr: NetRegexes.startsUsing({ id: '55EB', source: 'Nuage De Ténèbres' }),
            netRegexJa: NetRegexes.startsUsing({ id: '55EB', source: '暗闇の雲' }),
            netRegexCn: NetRegexes.startsUsing({ id: '55EB', source: '暗黑之云' }),
            netRegexKo: NetRegexes.startsUsing({ id: '55EB', source: '어둠의 구름' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'E9N Empty Plane',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '4FC6', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '4FC6', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '4FC6', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '4FC6', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '4FC6', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '4FC6', source: '어둠의 구름', capture: false }),
            durationSeconds: 5,
            response: Responses.aoe(),
        },
        {
            id: 'E9N Obscure Woods',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '4FA2', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '4FA2', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '4FA2', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '4FA2', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '4FA2', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '4FA2', source: '어둠의 구름', capture: false }),
            durationSeconds: 5,
            response: Responses.aoe(),
        },
        {
            id: 'E9N Waste Away',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '55DE', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '55DE', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '55DE', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '55DE', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '55DE', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '55DE', source: '어둠의 구름', capture: false }),
            response: Responses.knockback('info'),
        },
        {
            id: 'E9N Stygian Tether',
            type: 'HeadMarker',
            netRegex: NetRegexes.headMarker({ id: '000C' }),
            condition: Conditions.targetIsYou(),
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Wait Near Bramble',
                    de: 'Warte in der Nähe des Dornenstrauch',
                    fr: 'Attendez près des ronces',
                    ja: '闇の茨へ、蔦を切るまで待つ',
                    cn: '靠近荆棘等待',
                    ko: '장판 근처에서 대기',
                },
            },
        },
        {
            id: 'E9N Stygian Break Tether',
            type: 'Tether',
            netRegex: NetRegexes.tether({ id: '0012' }),
            condition: Conditions.targetIsYou(),
            response: Responses.breakChains(),
        },
        {
            id: 'E9N Wide-Angle Phaser',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: ['55DF', '55E[01]'], source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: ['55DF', '55E[01]'], source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: ['55DF', '55E[01]'], source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: ['55DF', '55E[01]'], source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: ['55DF', '55E[01]'], source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: ['55DF', '55E[01]'], source: '어둠의 구름', capture: false }),
            durationSeconds: 5,
            suppressSeconds: 1,
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Go Sides At Tethered Wall',
                    de: 'Geh seitlich der verundenen Wände',
                    fr: 'Allez vers les côtés du mur lié',
                    ja: '線が繋がった外周の横へ',
                    cn: '去连线的墙壁两边',
                    ko: '선 연결된 쪽으로 이동',
                },
            },
        },
        {
            id: 'E9N Rejuvenating Balm',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '55E2', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '55E2', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '55E2', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '55E2', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '55E2', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '55E2', source: '어둠의 구름', capture: false }),
            durationSeconds: 5,
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Away From Tethered Walls',
                    de: 'Weg von den verbundenen Wänden',
                    fr: 'Éloignez-vous des murs liés',
                    ja: '線が繋がった外周から離れる',
                    cn: '远离连线的墙壁',
                    ko: '보스 선 연결된 방향 피하기',
                },
            },
        },
        {
            id: 'E9N Deluge Of Darkness',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '5155', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '5155', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '5155', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '5155', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '5155', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '5155', source: '어둠의 구름', capture: false }),
            durationSeconds: 5,
            response: Responses.aoe(),
        },
        {
            id: 'E9N Particle Concentration',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '55E8', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '55E8', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '55E8', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '55E8', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '55E8', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '55E8', source: '어둠의 구름', capture: false }),
            delaySeconds: 4,
            durationSeconds: 4,
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Get Towers',
                    de: 'Türme nehmen',
                    fr: 'Prenez les tours',
                    ja: '塔を踏む',
                    cn: '踩塔',
                    ko: '장판 들어가기',
                },
            },
        },
        {
            id: 'E9N Hypercharged Condensation',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '532E', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '532E', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '532E', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '532E', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '532E', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '532E', source: '어둠의 구름', capture: false }),
            delaySeconds: 2,
            durationSeconds: 5,
            response: Responses.killAdds(),
        },
        {
            id: 'E9N Anti-Air Particle Beam',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '55DC', source: 'Cloud Of Darkness', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '55DC', source: 'Wolke Der Dunkelheit', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '55DC', source: 'Nuage De Ténèbres', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '55DC', source: '暗闇の雲', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '55DC', source: '暗黑之云', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '55DC', source: '어둠의 구름', capture: false }),
            response: Responses.getOut('info'),
        },
    ],
    timelineReplace: [
        {
            'locale': 'de',
            'replaceSync': {
                'Cloud Of Darkness': 'Wolke der Dunkelheit',
                'Stygian Arbor': 'stygisch(?:e|er|es|en) Dorn',
            },
            'replaceText': {
                'Anti-air Particle Beam': 'Flugabwehr-Partikelstrahl',
                'Bad Vibrations': 'Starke Vibration',
                'Deluge of Darkness': 'Sintflut der Dunkelheit',
                'Earth-shattering Particle Beam': 'Erderschütternder Partikelstrahl',
                'Empty Plane': 'Düsterer Himmel',
                'Evil Seed': 'Saatkugel',
                'Flood of Emptiness': 'Dunkle Flut: Düsterer Himmel',
                'Flood of Obscurity': 'Flut der Finsternis',
                'Ground-razing Particle Beam': 'Radialer Partikelstrahl',
                'Hypercharged Condensation': 'Elektrisierte Kondensation',
                'Mire of Despair': 'Sumpf der Dunkelheit',
                'Obscure Woods': 'Finsterer Wald',
                '(?<! )Particle Beam': 'Partikelstrahl',
                'Particle Concentration': 'Wellenkugel',
                'Rejuvenating Balm': 'Aktivierte Kugel',
                'Summon': 'Rufen',
                'the Art of Darkness': 'Dunkle Taktik',
                'Waste Away': 'Verdorren',
                'Wide-angle Particle Beam': 'Weitwinkel-Partikelstrahl',
                'Wide-angle Phaser': 'Weitwinkel-Phaser',
                'Zero-form Particle Beam': 'Nullform-Partikelstrahl',
            },
        },
        {
            'locale': 'fr',
            'replaceSync': {
                'Cloud Of Darkness': 'Nuage de Ténèbres',
                'Stygian Arbor': 'arbre ténébreux',
            },
            'replaceText': {
                'Anti-air Particle Beam': 'Faisceau de particules antiaérien',
                'Bad Vibrations': 'Vibration intense',
                'Deluge of Darkness': 'Grand déluge de Ténèbres',
                'Earth-shattering Particle Beam': 'Faisceau de particules fracassant',
                'Empty Plane': 'Cieux obscurs',
                'Evil Seed': 'Tir semant',
                'Flood of Emptiness': 'Déluge de Ténèbres : Cieux obscurs',
                'Flood of Obscurity': 'Déluge de Ténèbres : Forêt obscure',
                'Ground-razing Particle Beam': 'Faisceau de particules radiant',
                'Hypercharged Condensation': 'Aspiration particulaire',
                'Mire of Despair': 'Marais de Ténèbres',
                'Obscure Woods': 'Forêt obscure',
                '(?<! )Particle Beam': 'Rayon explosif',
                'Particle Concentration': 'Rayon sphérique',
                'Rejuvenating Balm': 'Tir vivifiant',
                'Summon': 'Invocation',
                'the Art of Darkness': 'Arts ténébreux',
                'Waste Away': 'Dépérissement',
                'Wide-angle Particle Beam': 'Faisceau de particules élargi',
                'Wide-angle Phaser': 'Faisceau de particules bondissant élargi',
                'Zero-form Particle Beam': 'Faisceau de particules zéro absolu',
            },
        },
        {
            'locale': 'ja',
            'replaceSync': {
                'Cloud Of Darkness': '暗闇の雲',
                'Stygian Arbor': '闇の大樹',
            },
            'replaceText': {
                'Anti-air Particle Beam': '高射式 波動砲',
                'Bad Vibrations': '強振動',
                'Deluge of Darkness': '闇の大氾濫',
                'Earth-shattering Particle Beam': '貫地式 波動砲',
                'Empty Plane': '暗黒天空',
                'Evil Seed': '種子弾',
                'Flood of Emptiness': '闇の氾濫：暗黒天空',
                'Flood of Obscurity': '闇の氾濫：暗黒森林',
                'Ground-razing Particle Beam': '放射式 波動砲',
                'Hypercharged Condensation': '波動雲吸引',
                'Mire of Despair': '闇の沼',
                'Obscure Woods': '暗黒森林',
                '(?<! )Particle Beam': '波動爆発',
                'Particle Concentration': '波動球',
                'Rejuvenating Balm': '活性弾',
                'Summon': '召喚',
                'the Art of Darkness': '闇の戦技',
                'Waste Away': '立ち枯れ',
                'Wide-angle Particle Beam': '広角式 波動砲',
                'Wide-angle Phaser': '広角式 跳躍波動砲',
                'Zero-form Particle Beam': '零式 波動砲',
            },
        },
        {
            'locale': 'cn',
            'replaceSync': {
                'Cloud Of Darkness': '暗黑之云',
                'Stygian Arbor': '暗之大树',
            },
            'replaceText': {
                'Anti-air Particle Beam': '高射式波动炮',
                'Bad Vibrations': '强震动',
                'Deluge of Darkness': '暗之大泛滥',
                'Earth-shattering Particle Beam': '贯地式波动炮',
                'Empty Plane': '暗黑天空',
                'Evil Seed': '种子弹',
                'Flood of Emptiness': '暗之泛滥：暗黑天空',
                'Flood of Obscurity': '暗之泛滥：暗黑森林',
                'Ground-razing Particle Beam': '放射式波动炮',
                'Hypercharged Condensation': '吸引波动云',
                'Mire of Despair': '暗之沼',
                'Obscure Woods': '暗黑森林',
                '(?<! )Particle Beam': '波动爆炸',
                'Particle Concentration': '波动球',
                'Rejuvenating Balm': '活性弹',
                'Summon': '召唤',
                'the Art of Darkness': '暗之战技',
                'Waste Away': '枯萎',
                'Wide-angle Particle Beam': '广角式波动炮',
                'Wide-angle Phaser': '广角式跳跃波动炮',
                'Zero-form Particle Beam': '零式波动炮',
            },
        },
        {
            'locale': 'ko',
            'replaceSync': {
                'Cloud Of Darkness': '어둠의 구름',
                'Stygian Arbor': '어둠의 나무',
            },
            'replaceText': {
                'Anti-air Particle Beam': '고공식 파동포',
                'Bad Vibrations': '강력한 진동',
                'Deluge of Darkness': '어둠의 대범람',
                'Earth-shattering Particle Beam': '붕괴식 파동포',
                'Empty Plane': '암흑의 하늘',
                'Evil Seed': '씨앗탄',
                'Flood of Emptiness': '어둠의 범람: 암흑의 하늘',
                'Flood of Obscurity': '어둠의 범람: 암흑의 숲',
                'Ground-razing Particle Beam': '방사식 파동포',
                'Hypercharged Condensation': '파동운 흡인',
                'Mire of Despair': '어둠의 늪',
                'Obscure Woods': '암흑의 숲',
                '(?<! )Particle Beam': '파동 폭발',
                'Particle Concentration': '파동구',
                'Rejuvenating Balm': '활성탄',
                'Summon': '소환',
                'the Art of Darkness': '어둠의 전투술',
                'Waste Away': '메마름',
                'Wide-angle Particle Beam': '광각식 파동포',
                'Wide-angle Phaser': '광각식 도약파동포',
                'Zero-form Particle Beam': '0식 파동포',
            },
        },
    ],
});
