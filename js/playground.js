let player1Name;
let player2Name;
const p1Name = "p1N";
const p2Name = "p2N";
const p1NameID = document.getElementById("p1Name");
const p2NameID = document.getElementById("p2Name");

p1NameID.innerHTML = sessionStorage.getItem(p1Name);
p2NameID.innerHTML = sessionStorage.getItem(p2Name);

console.log(sessionStorage.getItem(p1Name));
console.log(sessionStorage.getItem(p2Name));

const tiles = document.getElementsByClassName("tile");
const playerX = "X";
const playerO = "O";
let turno = true;

//

const imprimir = (t) => {
  let tileElegido = t.currentTarget;
  let tileID = tileElegido.id;
  console.log(tileID);

  let tile = document.getElementById(tileID);

  if ((tileElegido.innerHTML = " ")) {
    if (turno == true) {
      tile.addEventListener("click", () => {
        tile.innerHTML = playerX;
        turno = false;
        tile.removeEventListener("click", imprimir);
      });
    } else {
      tile.addEventListener("click", () => {
        tile.innerHTML = playerO;
        turno = true;
        tile.removeEventListener("click", imprimir);
      });
    }
  }
};

for (const t of tiles) {
  t.addEventListener("click", imprimir);
}
