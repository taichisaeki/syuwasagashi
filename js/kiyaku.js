if(window.localStorage.getItem("kiyaku") !== "ok") {
    document.getElementById("kiyaku").style.display = "flex";
}

if(window.localStorage.getItem("kiyaku") === "ok") {
  document.getElementById("main").style.display = "block";

}

function notesout() {
  document.getElementById("notes").style.display = "none";
  
  window.location.reload();
}

function saveUserCount() {
  // 現在のタイムスタンプを取得
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  var ua = window.navigator.userAgent.toLowerCase();

  if(ua.indexOf("windows nt") !== -1) {
    os = "Windows";
  } else if(ua.indexOf("android") !== -1) {
    os = "Android";
  } else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
    os = "iOS";
  } else if(ua.indexOf("mac os x") !== -1) {
    os = "Mac";
  } else {
    os = "Unknown";
  }

  // データをJSON形式に変換
  const data = JSON.stringify({
    timestamp: timestamp,
    os: os
  });

  // XMLHttpRequestオブジェクトを作成
  const xhr = new XMLHttpRequest();

  // 送信処理を設定
  xhr.open('POST', './data.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(os + ":" + timestamp);
    } else {
      console.error('error', xhr.statusText);
    }
  };

  // データを送信
  xhr.send(data);
}




document.getElementById("start").addEventListener('click', function() {
    var checkbox = document.getElementById("check");
    if (checkbox.checked) {
      window.localStorage.setItem("kiyaku", "ok");
      document.getElementById("kiyaku").style.display = "none";
      document.getElementById("notes").style.display = "flex";
      setTimeout(notesout, 3000);
      //window.location.reload();
    } else {
      alert("利用規約へ同意をしてください");
    }
});