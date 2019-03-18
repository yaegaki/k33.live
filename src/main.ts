import { Words, Word } from './words';

(() => {
    // このスクリプトがbodyの最後に追加されている前提.
    const words = $('.suzu .words');
    const suzu = $('.suzu');
    const name = $('.suzu .name');

    const sleep = (t: number) => new Promise(r => setTimeout(r, t));

    function createWord(w: Word): JQuery<HTMLElement> {
        const t = `<div class="word">
    <div>${w.text}</div>
    <div class="link">- 「<a href="${w.url}" target="_blank" rel="noopener">${w.desc}</a>」 より</div>
</div>`;

        return $(t);
    }

    function shuffule<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            [array[i], array[r]] = [array[r], array[i]];
        }
    }


    function setWords(f: boolean) {
        // 全削除.
        words.html('');

        const _Words = Words.filter(w => w.f === f);
        shuffule(_Words);
        _Words.slice(0, 5).forEach(w => {
            words.append(createWord(w));
        });
    }

    async function changeWords(evilFlag: boolean) {
        words.css('opacity', '0');
        // 完全に消えるまで待つ.
        await sleep(250);
        setWords(evilFlag);
        words.css('opacity', '1');
    }

    let filter = {
        'grayscale': 0,
        'brightness': 50,
        'blur': 5,
    };

    // (;_;)
    var e: any = $('#bgndVideo');
    var player = e.YTPlayer();

    player.on('YTPReady', function () {
        player.YTPApplyFilters(filter);
    });

    player.on('YTPStart', () => {
        // ローディングのアイコンを非表示にするために少し非表示.
        setTimeout(() => {
            $('.mbYTP_wrapper').addClass('ready');
        }, 500);
    });

    let lastUpdateDate = Date.now();
    player.on('YTPTime', () => {
        lastUpdateDate = Date.now();
    });

    setInterval(() =>
    {
        const diff = Date.now() - lastUpdateDate;
        // 5秒以上止まっている場合はplayしてみる
        if (diff > 5000) {
            player.YTPPlay();
        }
    }, 5000);

    async function metronome() {
        let evilFlag = false;
        while (true) {
            // 15秒待つ.
            await sleep(15000);
            // 現在evilでないならグリッチエフェクトをつける
            if (!evilFlag) name.addClass('glitch');

            // 5秒後に切り替え.
            await sleep(5000);
            // 現在evilならグリッチエフェクトを外す.
            if (evilFlag) name.removeClass('glitch');
            evilFlag = !evilFlag;
            suzu.toggleClass('evil');
            // 非同期の完了は待たない.
            changeWords(evilFlag);
            if (evilFlag) {
                filter.grayscale = 100;
                name.text('神楽すず.EVIL');
            }
            else {
                filter.grayscale = 0;
                name.text('神楽すず.LIVE');
            }
            // 背景VIDEOに更新したフィルタを適用.
            player.YTPApplyFilters(filter);
        }
    }

    setWords(false);
    metronome();
})();
