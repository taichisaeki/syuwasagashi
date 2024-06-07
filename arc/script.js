
const player = document.getElementById("player");
const shortPlayer = document.getElementById("short-player")
const title = document.getElementById("title");
var hintmessage;
var clear;
const modal = document.getElementById("modal");
const shortModal = document.getElementById("short-video")
const modalClose = document.getElementById("modal-close");
const playAgain = document.getElementById("play-again");
const playShort = document.getElementById("play-short");
const btnWrap = document.getElementById("btn_wrap");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

//画面処理
const dsb = document.getElementById("displayB")
const dlb = document.getElementById("delete");
const hint = document.getElementById("hint");
var off = false;

//button
const ansbuttons = document.querySelectorAll(".ans-buttons");
const ans1 = document.getElementById("1");
const ans2 = document.getElementById("2");
const ans3 = document.getElementById("3");
const ans4 = document.getElementById("4");


player.addEventListener('ended', function() {
    window.localStorage.setItem("nowthink", true);
    modal.classList.remove("is-active");
    modalClose.style.display = "block";
});

shortPlayer.addEventListener("ended", function() {
    shortModal.classList.remove("is-active");
})

/*if(questionNum == "jEa1") {
        ans1.removeAttribute("disabled");
        ans2.removeAttribute("disabled");
        ans3.removeAttribute("disabled");
        ans4.removeAttribute("disabled");
} else {
        ans1.removeAttribute("disabled");
        ans2.removeAttribute("disabled");
        ans3.removeAttribute("disabled");
        ans4.removeAttribute("disabled");
}*/

modalClose.addEventListener("click", function(){
    player.pause();
    modal.classList.remove("is-active");
});

playAgain.addEventListener("click", function() {
    modal.classList.add("is-active");
});

playShort.addEventListener("click", function() {
    shortModal.classList.add("is-active");
});

if(window.localStorage.getItem("nowthink") === "true") {
    modal.classList.remove("is-active");
}
//本番用
switch(questionNum) {
    case "jEa1":
        title.innerText = "Q1. 次にふくちゃんが向かう場所はどこでしょう？"
        player.src = "./videos/first.mp4";
        shortPlayer.src = "./videos/first-short.mp4";
        hintmessage = "食品から洋服までいろいろなものが揃っているよ";
        //ボタンの内容
        ans1.innerText = "お寺";
        ans2.innerText = "商店街"
        ans3.innerText = "スーパー";
        ans4.innerText = "パワースポット";
        clear = "2";
        break;
    case "uTa2":
        player.src = "./videos/second.mp4";
        shortPlayer.src = "./videos/second-short.mp4";
        title.innerText = "Q2. 次にふくちゃんが向かう場所はどこでしょう？";
        hintmessage = "夜は幽霊や妖怪が出てきそうな雰囲気があるよ";
        //ボタンの内容
        ans1.innerText = "プラネタリウム";
        ans2.innerText = "おばけやしき";
        ans3.innerText = "西巣鴨高校";
        ans4.innerText = "お岩さんの墓";
        clear = "4";
        break;
    case "mIN3":
        title.innerText = "Q3. 次にふくちゃんが向かう場所はどこでしょう？";
        player.src = "./videos/third.mp4";
        shortPlayer.src = "./videos/third-short.mp4";
        hintmessage = "お墓と似ている雰囲気があるよ";
        //ボタンの内容
        ans1.innerText = "西巣鴨駅";
        ans2.innerText = "とげぬき地蔵";
        ans3.innerText = "さざえ堂";
        ans4.innerText = "神社";
        clear = "2";
        break;
    case "Kju4":
        title.innerText = "Q4. 次にふくちゃんが向かう場所はどこでしょう？";
        player.src = "./videos/last.mp4";
        shortPlayer.src = "./videos/last-short.mp4";
        hintmessage = "勉強や研究をする場所だよ";
        //ボタンの内容
        ans1.innerText = "大正大学";
        ans2.innerText = "レストラン";
        ans3.innerText = "しゅわカフェ";
        ans4.innerText = "大学図書館";
        clear = "1";
        break;
    default:
        title.innerText = "無効なリクエストです。";
        modal.classList.remove("is-active");
        dsb.style.display = "none";
        playAgain.style.display = "none";
        btnWrap.style.display = "none";
        console.log("notset");
        break;
}

ansbuttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if(e.target.id === clear) {
        window.sessionStorage.setItem("clear", "true");
        window.localStorage.setItem("q" + questionNum.slice(-1), "ok");
        location.href = "./result.html?r=" + questionNum;
      } else {
        window.sessionStorage.setItem("clear", "false");
        window.location.href = "./result.html?r=" + questionNum + "&a=" + e.target.id;
      }
    });
});

dsb.addEventListener("click", function() {
    alert(hintmessage);
});

