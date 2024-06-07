document.getElementById("btn_1").addEventListener('click', function() {
    location.href = "./video.html?q=jEa1";
});
document.getElementById("btn_2").addEventListener('click', function() {
    location.href = "./video.html?q=uTa2";
});
document.getElementById("btn_3").addEventListener('click', function() {
    location.href = "./video.html?q=mIN3";
});
document.getElementById("btn_4").addEventListener('click', function() {
    location.href = "./video.html?q=Kju4";
});
for (let i = 1; i <= 3; i++) {
    const storageItem = localStorage.getItem(`q${i}`);
    const btn = document.getElementById(`btn_${i}`);
    if (storageItem === 'ok') btn.removeAttribute('disabled');
    else console.log(`notclear${i}`);
}
if(window.localStorage.getItem("q4") == "ok") {
document.getElementById("endActive").style.display = "block";
document.getElementById("btn_4").removeAttribute('disabled');
document.getElementById("qrbtn").style.display = "none";
}
document.getElementById("endActive").addEventListener('click', function() {
    document.getElementById("modal").classList.add("is-active");
});
document.getElementById("modal-close").addEventListener('click', function() {
    document.getElementById("modal").classList.remove("is-active");
});
document.getElementById("reset").addEventListener('click', function() {
alert("またね！");
window.localStorage.removeItem("q1");
window.localStorage.removeItem("q2");
window.localStorage.removeItem("q3");
window.localStorage.removeItem("q4");
window.localStorage.removeItem("kiyaku");
location.reload();
});