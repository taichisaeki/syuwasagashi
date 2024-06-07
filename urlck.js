let url = new URL(window.location.href);// URLを取得
let params = url.searchParams;// URLSearchParamsオブジェクトを取得
const questionNum = params.get("q");
const result = params.get("r");
const ansNum = params.get("a"); 
switch(questionNum) {
  case "jEa1":
      console.log("1問目");
      break;
  case "uTa2":
      if (window.localStorage.getItem("q1") !== "ok") {
          alert("ルールブックの問題から始めてください");
          window.location.href = "./";
        }          
      break;
  case "mIN3":
      if (window.localStorage.getItem("q2") !== "ok") {
          alert("ルールブックの問題から始めてください");
          window.location.href = "./";
        }          
      break;
  case "Kju4":
      if (window.localStorage.getItem("q3") !== "ok") {
          alert("ルールブックの問題から始めてください");
          window.location.href = "./";
        }          
      break;
  case "reset":
    alert("データをリセットします");
    window.localStorage.removeItem("q1");
    window.localStorage.removeItem("q2");
    window.localStorage.removeItem("q3");
    window.localStorage.removeItem("q4");
    window.localStorage.removeItem("kiyaku");
    alert("データがリセットされました");
    window.location.href = "./index.html";
  default:
    console.log("1問目");
    break;
}

switch(result) {
  case "jEa1":
      console.log("1問目");
      break;
  case "uTa2":
      if (window.localStorage.getItem("q1") !== "ok") {
          alert("ルールブックの問題から始めてください");
          window.location.href = "./";
        }          
      break;
  case "mIN3":
      if (window.localStorage.getItem("q2") !== "ok") {
          alert("ルールブックの問題から始めてください");
          window.location.href = "./";
        }          
      break;
  case "Kju4":
      if (window.localStorage.getItem("q3") !== "ok") {
          alert("ルールブックの問題から始めてください");
          window.location.href = "./";
        }          
      break;
  case "reset":
    alert("データをリセットします");
    window.localStorage.removeItem("q1");
    window.localStorage.removeItem("q2");
    window.localStorage.removeItem("q3");
    window.localStorage.removeItem("q4");
    window.localStorage.removeItem("kiyaku");
    alert("データがリセットされました");
    window.location.href = "./index.html";
    break;
  default:
    console.log("1問目");
    break;

}