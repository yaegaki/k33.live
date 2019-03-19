export interface Word {
    text: string;
    source: string;
    desc: string;
    url: string;
    f: boolean;
}

// youtube source
function y(text: string, title: string, id: string, sec: number, f: boolean): Word {
    const source = 'youtube';
    const url = `https://www.youtube.com/watch?v=${id}&t=${sec}s`;
    const desc = title;
    return { text, desc, source, url, f };
}

// twitter source
function t(text: string, id: string, year: number, month: number, day: number, f: boolean): Word {
    const source = 'twitter';
    const url = `https://twitter.com/kagura_suzu/status/${id}`;
    const desc = `twitter ${year}/${month}/${day}`;
    return { text, desc, source, url, f };
}

export const Words: Word[] = [
    // youtube
    // y('無味の勝利の味がする', '【カスタムロボＶ2】レイⅡ縛り試行錯誤ロボ#07【アイドル部】', 'YkdhvMDK1yo', 2350, true),

    // 【カスタムロボＶ2】レイⅡ縛り試行錯誤ロボ#08【アイドル部】
    y('ザッッッッッッッッッコ！', '【カスタムロボＶ2】レイⅡ縛り試行錯誤ロボ#08【アイドル部】', 'U5vADRJzhm0', 19*60+53, true),
    
    // APE OUT #01
    y('任せろ、2週目のゴリラは強いぞ', 'APE OUT かっこいいジャズとゴリラのゲーム', '8Ue433jTegw', 3*60+53, true),
    y('知的生命体のにおいがするな', 'APE OUT かっこいいジャズとゴリラのゲーム', '8Ue433jTegw', 5*60+35, true),
    y('そこにいるなぁ！命がなぁ！', 'APE OUT かっこいいジャズとゴリラのゲーム', '8Ue433jTegw', 25*60+8, true),


    // デトロイト #06
    y('来るな人間ども！', '全滅させたけど本気で全員生存を目指す2周目Detroit #05【Detroit: Become Human】', 'vEQaUdlA5UA', 1*3600+8*60+25, true),
    y('爆破するしかないじゃん！', '全滅させたけど本気で全員生存を目指す2周目Detroit #05【Detroit: Become Human】', 'vEQaUdlA5UA', 1*3600+9*60+48, true),
    y('さっきのカナダのおじさん見習えよ！', '全滅させたけど本気で全員生存を目指す2周目Detroit #05【Detroit: Become Human】', 'vEQaUdlA5UA', 2*3600+31*60+6, true),

    // 【マリパ2】これまでのすべてに【最終回】
    y('笑いが止まらねぇや', '【マリパ2】これまでのすべてに【最終回】', 'pOwefNegaUE', 1*3600+54, true),

    // 【マリパ2】初見でも優勝します【アイドル部】
    y('ドンキーうまくない？裸ネクタイのくせに。そのネクタイの知能指数が高いのかな？', '【マリパ2】初見でも優勝します【アイドル部】', 's01qYdG9V-M', 19*60+34, true),
    y('銀行強盗からのし上がった蛮族を許すな', '【マリパ2】初見でも優勝します【アイドル部】', 's01qYdG9V-M', 51*60+50, true),


    //【スマブラSP】ガチャプレイしかできないけど乱闘はできます【アイドル部】
    y('クソが！言葉が悪いですよ。', '【スマブラSP】ガチャプレイしかできないけど乱闘はできます【アイドル部】', 'xbI8O0wL_fI', 8*60, true),
    y('刃物を持ったゴリラは最強だぞ！', '【スマブラSP】ガチャプレイしかできないけど乱闘はできます【アイドル部】', 'xbI8O0wL_fI', 55*60+50, true),


    //【Project Nimbus】モビウスのいない夕食【3-4】
    y('そういえばなんか頭のおかしい人いましたね', '【Project Nimbus】モビウスのいない夕食【3-4】', 'sGKk0534Uow', 4*60+24, true),

    // 【Project Nimbus】知らない天井だ【3-1】
    y('許さんぞ、許さんぞお前ら！', '【Project Nimbus】知らない天井だ【3-1】', '5UqXFm6zTMM', 29*60+56, true),

    // 【Project Nimbus】人形ロボットの操作も任せてください【アイドル部】
    y('私を狙った罰だ、これは', '【Project Nimbus】人形ロボットの操作も任せてください【アイドル部】', 'OIw9eVMy2UY', 24*60+58, true),

    // twitter
    // t('ゴリラ向けの質問だったんですね', '1105858317740433408', 2019, 3, 13, true),
];