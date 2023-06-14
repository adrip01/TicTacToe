// hacer session storage con objetos??

const p1NameID = document.getElementById("p1Name");
const p2NameID = document.getElementById("p2Name");

p1NameID.innerHTML = sessionStorage.getItem(p1Name);
p2NameID.innerHTML = sessionStorage.getItem(p2Name);

//logica del juego
const tiles = document.getElementsByClassName("tile");
const playerTextX = "X";
const playerTextO = "O";
let activePlayer = playerTextX;
let counterOfMoves = 0;
let winnerTriggered = false;

showActivePlayer = () => {
  let activePlayerName;
  if (activePlayer === playerTextX) {
    activePlayerName = sessionStorage.getItem(p1Name);
  } else {
    activePlayerName = sessionStorage.getItem(p2Name);
  }

  document.getElementById(
    "activePlayerDisplay"
  ).innerHTML = `It's ${activePlayerName} turn`;
};

showActivePlayer();

showTieMessage = () => {
  document.getElementById(
    "messageSpawn"
  ).innerHTML = `<div class="containerMessage">
                      <div class="message">IT'S A TIE!</div>
                 </div>`;
};

const print = (e) => {
  let choosenTile = e.currentTarget;

  let tile = choosenTile;

  if (tile.innerHTML == "") {
    tile.innerHTML = activePlayer;
    counterOfMoves++;
    winner();
    activePlayer = activePlayer === playerTextX ? playerTextO : playerTextX;
    showActivePlayer();

    if (counterOfMoves == 9 && !winnerTriggered) {
      showTieMessage();
      stop();
    }
  }
};

for (const t of tiles) {
  t.addEventListener("click", print);
}

const stop = () => {
  for (const t of tiles) {
    t.removeEventListener("click", print);
  }
};

showWinnerMessage = () => {
  if (activePlayer === playerTextX) {
    activeWinner = sessionStorage.getItem(p1Name);
  } else {
    activeWinner = sessionStorage.getItem(p2Name);
  }
  document.getElementById(
    "messageSpawn"
  ).innerHTML = `<div class="containerMessage">
                     <div class="message">${activeWinner} WINS!</div>
                 </div>`;
};

const winner = () => {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winCombos) {
    const [a, b, c] = combo;
    const comboInner = [
      tiles[a].innerHTML,
      tiles[b].innerHTML,
      tiles[c].innerHTML,
    ];

    if (
      comboInner[0] === comboInner[1] &&
      comboInner[1] === comboInner[2] &&
      (comboInner[0] === playerTextX || comboInner[0] === playerTextO)
    ) {
      tiles[a].innerHTML = activePlayer;
      showWinnerMessage();
      stop();
    }
  }
};
