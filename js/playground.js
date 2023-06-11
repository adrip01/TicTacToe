let player1Name;
let player2Name;
const p1Name = "p1N";
const p2Name = "p2N";
const p1NameID = document.getElementById("p1Name");
const p2NameID = document.getElementById("p2Name");

p1NameID.innerHTML = sessionStorage.getItem(p1Name);
p2NameID.innerHTML = sessionStorage.getItem(p2Name);

//logica del juego

const tiles = document.getElementsByClassName("tile");
const playerX = "X";
const playerO = "O";
let activePlayer = playerX;

const imprimir = (t) => {
  let tileElegido = t.currentTarget;
  let tileID = tileElegido.id;

  let tile = document.getElementById(tileID);

  if (tile.innerHTML == "") {
    tile.innerHTML = activePlayer;
    winner();
    activePlayer = activePlayer === playerX ? playerO : playerX;
  }
};

for (const t of tiles) {
  t.addEventListener("click", imprimir);
}

const stop = () => {
  for (const t of tiles) {
    t.removeEventListener("click", imprimir);
  }
};

const winner = () => {
  //horizontal
  const combo012 = [tiles[0].innerHTML, tiles[1].innerHTML, tiles[2].innerHTML];
  const combo345 = [tiles[3].innerHTML, tiles[4].innerHTML, tiles[5].innerHTML];
  const combo678 = [tiles[6].innerHTML, tiles[7].innerHTML, tiles[8].innerHTML];
  //vertical
  const combo036 = [tiles[0].innerHTML, tiles[3].innerHTML, tiles[6].innerHTML];
  const combo147 = [tiles[1].innerHTML, tiles[4].innerHTML, tiles[7].innerHTML];
  const combo258 = [tiles[2].innerHTML, tiles[5].innerHTML, tiles[8].innerHTML];
  //diagonal
  const combo048 = [tiles[0].innerHTML, tiles[4].innerHTML, tiles[8].innerHTML];
  const combo246 = [tiles[2].innerHTML, tiles[4].innerHTML, tiles[6].innerHTML];

  if (
    combo012[0] === combo012[1] &&
    combo012[1] === combo012[2] &&
    (combo012[0] === playerX || combo012[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo012[0]} WINS!`;
    stop();
  } else if (
    combo345[0] === combo345[1] &&
    combo345[1] === combo345[2] &&
    (combo345[0] === playerX || combo345[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo345[0]} WINS!`;
    stop();
  } else if (
    combo678[0] === combo678[1] &&
    combo678[1] === combo678[2] &&
    (combo678[0] === playerX || combo678[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo678[0]} WINS!`;
    stop();
  } else if (
    combo036[0] === combo036[1] &&
    combo036[1] === combo036[2] &&
    (combo036[0] === playerX || combo036[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo036[0]} WINS!`;
    stop();
  } else if (
    combo678[0] === combo678[1] &&
    combo678[1] === combo678[2] &&
    (combo678[0] === playerX || combo678[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo678[0]} WINS!`;
    stop();
  } else if (
    combo147[0] === combo147[1] &&
    combo147[1] === combo147[2] &&
    (combo147[0] === playerX || combo147[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo147[0]} WINS!`;
    stop();
  } else if (
    combo258[0] === combo258[1] &&
    combo258[1] === combo678[2] &&
    (combo258[0] === playerX || combo258[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo258[0]} WINS!`;
    stop();
  } else if (
    combo048[0] === combo048[1] &&
    combo048[1] === combo048[2] &&
    (combo048[0] === playerX || combo048[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo048[0]} WINS!`;
    stop();
  } else if (
    combo246[0] === combo246[1] &&
    combo246[1] === combo246[2] &&
    (combo246[0] === playerX || combo246[0] === playerO)
  ) {
    document.getElementById("winnerMessage").innerHTML = `${combo246[0]} WINS!`;
    stop();
  }
};
