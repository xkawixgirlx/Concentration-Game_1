  /*----- constants -----*/
const SOURCE_TILES = [
  { img: 'https://i.imgur.com/ZXPKaiN.jpg', matched: false },
  { img: 'https://i.imgur.com/XMEsZBX.jpg', matched: false },
  { img: 'https://i.imgur.com/6jX1bMT.jpg', matched: false },
  { img: 'https://i.imgur.com/yKdqsBv.jpg', matched: false },
  { img: 'https://i.imgur.com/1BV3HLr.jpg', matched: false },
  { img: 'https://i.imgur.com/QYmN6Hp.jpg', matched: false },
  { img: 'https://i.imgur.com/D5pWE05.jpg', matched: false },
  { img: 'https://i.imgur.com/Ss4Xo3x.jpg', matched: false }
];
const TILE_BACK = 'https://i.imgur.com/WoEmI2M.jpg';
const DISPLAY_TILES_TIME = 1500; //in milliseconds = 1 sec.



  /*----- state variables -----*/
  /*States:
  Flipped/not flipped matched: 
  1st card? initialCard
  Board render
  Audio Icebox feature
  Play Again/Play Button 
  Timer Countdown
  Modes/Levels*/
  /*let timer; Icebox feature
  let timeLeft = 120; //seconds */
  /*let mode;*/ //IceBox feature
let board;
let winner;
let score; 
let initialCard;
let badGuessCount;



  /*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');
const tileImgEls = document.querySelector('section > img');


//!
//*
//?

//! setInterval();
  /*----- event listeners -----*/
// *.addEventListener(evt);
playAgainBtn.addEventListener('click', init);
document.getElementById('cards').addEventListener('click', handleCardClick);



  /*----- functions -----*/
init();


function init() {
  board = getShuffledTiles();
  score = 0;
  winner = null;
  initialCard = null;
  badGuessCount = 0;
  // console.log(board);
  render(); 
}

function getShuffledTiles() {
  const tempTiles = [];
  const tiles = [];
  SOURCE_TILES.forEach(function(tile) {
       tempTiles.push({...tile}, {...tile});
  });

  while (tempTiles.length) {
    const rndIdx = Math.floor(Math.random() * tempTiles.length);
    const rndTile = tempTiles.splice(rndIdx, 1)[0];
    tiles.push(rndTile);
  }
  return tiles;
}

function handleCardClick(evt) {
  const tileIdx = parseInt(evt.target.id);
  const clickedCard = board[tileIdx];
  let ignoreClick = false;
  if (ignoreClick || isNaN(tileIdx) || !clickedCard) return; 
  console.log(tileIdx)
  if (!initialCard) {
    initialCard = clickedCard;
  } else if (initialCard === clickedCard) {
    badGuessCount ++;
    initialCard = null; 
  } else if (initialCard) {
    if (clickedCard.img === initialCard.img) {
    console.log('You found a Match!');
    clickedCard.matched = true;
    initialCard.matched = true; 
    initialCard = null;
    winner = board.every(tile => tile.matched);
    incrementScore(); 
  } else {
    ignoreClick = true;
    badGuessCount ++;
    clickedCard.matched = true; 
    setTimeout(function() {
      ignoreClick = false;
      clickedCard.matched = false; 
      initialCard = null;
      render();
    }, DISPLAY_TILES_TIME);
  }
} 
render();
}


function gameOver() {
  cancelInterval(timer);
  $('button').show();
  badGuessCount = 0; 
}


function updateScore() {
  const scoreEl = document.getElementById('scoreMatch');
  scoreEl.textContent = score;
}


function incrementScore() {
  score += 5;
  updateScore();  
}


function getWinner() {
  let winner = board.every(tile => tile.matched); 
  console.log('Congratulations! You Win!');
}

function render() {
  renderBoard(); 
  renderButton();
  renderScore();
}

function renderTimer() {

}
function renderBoard() {
  board.forEach(function(tile, tileIdx) {
    const tileEl = document.getElementById(tileIdx);
    tileEl.src = tile.matched || tile === initialCard ? tile.img : TILE_BACK;
  });
}

function renderButton() {

}
function renderScore() {
  const scoreEl = document.getElementById('scoreMatch');
  scoreEl.textContent = score;
}


/*Pseudocode:
define win condition/Lose Condition - if else? maybe while if Zen Mode
define array of cards x2
Event listeners for Audio and play again/ first card flip buttons
Render cards();
RenderBoard();
Hard Mode - adjusts the timer time 
Zen Mode - no time limit Hard Code end or pause button. 
Logic to know if cards are matching. 
Does cards from Array1 === Array2 if true increment score? 
All cards match === win
Timer hits Zero === Loss
Zen Mode: how many points can you get. winner = null;
 */


