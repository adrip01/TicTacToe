let player1Name;
let player2Name;
const p1Name = "p1N";
const p2Name = "p2N";

document.getElementById("p1Name").innerHTML = sessionStorage.getItem(p1Name);
document.getElementById("p2Name").innerHTML = sessionStorage.getItem(p2Name);

console.log(sessionStorage.getItem(p1Name));
console.log(sessionStorage.getItem(p2Name));
