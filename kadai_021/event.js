//ボタンをクリックして下さいを取り出す//
console.log(document.getElementById('text'));

//ボタンを取り出す//
console.log(document.getElementById('btn'));

//クリックしたときにイベント処理を実行する//
window.addEventListener('click', () => {
    setTimeout(() => {
    //ボタンをクリックしましたを2秒(2000ミリ秒)後に表示する//
    const text = document.getElementById('text');
    text.textContent  = "ボタンをクリックしました";
}, 2000);
});
