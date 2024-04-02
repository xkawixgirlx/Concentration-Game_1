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




  /*----- state variables -----*/
  /*States:
  Flipped/not flipped
  1st card? 
  Board render
  Audio
  Play Again/Play Button 
  Timer Countdown
  Modes/Levels*/
let board;
/*let timer;
let timeLeft = 120; //seconds */
let winner;
/*let mode;*/ //IceBox feature
let score; 
let initialCard;



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
  console.log(board);
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
  if (isNaN(tileIdx)) return; 
  console.log(tileIdx)
  if (!initialCard) {
    initialCard = board[tileIdx];
  }

  render();
}

function gameOver() {
  cancelInterval(timer);
  $('button').show(); 
}

function updateTimeLeft() {
  timeLeft = timeLeft - 1;
  if (timeLeft >= 0) {
    $('#timer').html(timeLeft);
  } else {
    gameOver();
  }
}

function timerStart() {
  timer = setInterval(updateTimer, 1000); // 1000 milliseconds is 1 sec.
  updateTimer(); 
  $('button').hide();
  renderTimer();
}


function incrementScore() {
  let currentTiles = 0;
  if (SOURCE_TILES === currentTiles);
  return score + 5;   
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


