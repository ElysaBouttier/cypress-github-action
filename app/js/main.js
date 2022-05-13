// /////////////////////////////////////////////
//      ///////// EXERCICE  /////////
// /////////////////////////////////////////////

function check() {
  let keyValue = Number(document.getElementById("key").value);
  let textToCryptValue = document.getElementById("textToCrypt").value;
  if ((keyValue || textToCryptValue) == null) {
    keyValue = 0;
    textToCrypt = "";
  }

  let result = cesar(keyValue, textToCryptValue);
  console.log(result);
  return result;
};

let btn = document.getElementById("cypherBtn");
let result = document.getElementById('result');
btn.addEventListener("click", function test() {
  check();
  result.innerHTML = check();
});
