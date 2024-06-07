const clearck = window.sessionStorage.getItem("clear");
const player = document.getElementById("player");
const title = document.getElementById("title");
const caption = document.getElementById("caption");
const message = document.getElementById("message");
const back = document.getElementById("back");
const qr = document.getElementById("qr");
const advice = document.getElementById("advice");
const backhome = document.getElementById("backhome");

function seikaianime() {
    title.style.animationName = 'route';
    title.style.animationDuration = '1.5s';
    title.style.fontSize = "2.4rem";
    advice.style.fontSize = "1.5rem";
}

switch(result) {
    case "jEa1":
        if(clearck == "true") {
            seikaianime();
            window.localStorage.removeItem("nowthink");
            back.style.display = "none";
            title.innerText = "【正解】";
            advice.innerText = "「商店街」に行ってみよう!";
        } else {
            qr.style.display = "none";
            title.innerText = "もう一度考えてみよう！";
            advice.innerText = "【ヒント①】巣鴨は約780mの長さの通りになっているよ";
        }
        break;
    case "uTa2":
        if(clearck == "true") {
            seikaianime();
            window.localStorage.removeItem("nowthink");
            back.style.display = "none";
            title.innerText = "【正解】";
            advice.innerText = "「お岩さんの墓」に行ってみよう!";
        } else {
            qr.style.display = "none";
            title.innerText = "もう一度考えてみよう！";
            advice.innerText = "【ヒント②】みんなの先祖様が眠っている場所かもしれないよ";
        }
        break;
    case "mIN3":
        if(clearck == "true") {
            seikaianime();
            window.localStorage.removeItem("nowthink");
            back.style.display = "none";
            title.innerText = "【正解】";
            advice.innerText = "「とげぬき地蔵」に行ってみよう";
        } else {
            qr.style.display = "none";
            title.innerText = "もう一度考えてみよう！";
            advice.innerText = "【ヒント③】これは病気を治し、寿命を延ばす力を持っているみたいだよ";
        }
        break;
    case "Kju4":
        if(clearck == "true") {
            seikaianime();
            window.localStorage.removeItem("nowthink");
            backhome.style.display = "block";
            back.style.display = "none";
            title.innerText = "【正解】";
            advice.innerText = "出口の係員に答えを伝えよう!";
            qr.style.display = "none";
        } else {
            qr.style.display = "none";
            title.innerText = "もう一度考えてみよう！";
            advice.innerText = "【ヒント④】6/8〜6/9の2日間で学祭が行われているよ!";
        }
        break;
    default:
        console.log("notset");
        break;
}

back.addEventListener("click", function() {
    window.history.back();
});