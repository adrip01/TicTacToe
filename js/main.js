let player1Name = "Bob";
let player2Name = "Melisa";
const p1Name = "p1N";
const p2Name = "p2N";
const input1 = document.getElementById("inputPlayer1");
const input2 = document.getElementById("inputPlayer2");

sessionStorage.clear();

input1.addEventListener("input", updateValue);
input2.addEventListener("input", updateValue2);

function updateValue() {
  sessionStorage.removeItem(p1Name);
  sessionStorage.setItem(p1Name, input1.value);
}
function updateValue2() {
  sessionStorage.removeItem(p2Name);
  sessionStorage.setItem(p2Name, input2.value);
}

document.getElementById("startButton").addEventListener("click", () => {
  window.location.assign("playground.html");
});
