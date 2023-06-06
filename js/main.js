let player1Name = "Bob";
let player2Name = "Melisa";
const p1Name = "p1N";
const p2Name = "p2N";
const input1 = document.getElementById("inputPlayer1");

input1.addEventListener("input", updateValue);

function updateValue() {
  sessionStorage.removeItem(p1Name);
  sessionStorage.setItem(p1Name, input1.value);
}
console.log(player1Name);

document.getElementById("startButton").addEventListener("click", () => {
  sessionStorage.setItem(p1Name, player1Name);
  sessionStorage.setItem(p2Name, player2Name);
  window.location.assign("playground.html");
});

console.log(player1Name);
console.log(player2Name);
