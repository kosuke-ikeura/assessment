(function(){
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    /**
     * 指定した要素の子供を全て削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllchildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0) { //名前が空の時は処理を終了する
            return;
        }
        console.log(userName);
    //診断結果表示のエリア作成
    removeAllchildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    };

    //TODO ツイートエリアの作成
    removeAllchildren(tweetDivided);
    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}に見つめられてあ人は、気になって仕方がないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけの特徴がみんなを楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。{userName}の良さにみんなが気を引かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}が感じたことにみんなが共感し、わかりこあうことができます。',
        '{userName}のいいところは感受性です。{userName}に気にかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えにみんなが感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えに多くの人が魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思った時にしっかりと衝動を抑えられる{userName}がみんなから評価されています。',
        '{userName}のいいところは優しさです。{userName}の雰囲気や立ち振る舞いに多くの人が癒されています。'
    ];

    /**
     * 名前の文字列を渡すと診断結果を返す関数
     * @param {string} userName ユーザーの名前
     * @return {string} 診断結果
     */
    function assessment(userName) {
        // 全文字のコード番号を取得してそれを足し合わせる
        let sum0fcharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sum0fcharCode = sum0fcharCode + userName.charCodeAt(i);
        }

        // 文字のコードの番号の合計を回答の数で割って添字の数値を求める
        const index = sum0fcharCode % answers.length;
        let result = answers[index];

        result = result.replace(/\{userName\}/g, userName);
        return result;
    }
    //テストコード
    console.assert(
        assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
        '診断結果の文言の特的の部分を名前に置き換える処理が正しくありません。'
    );
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出廬Y区s流処理が正しくありません。'
    );
})();
