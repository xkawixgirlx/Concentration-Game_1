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
let timer;
let timerLeft = 120; //seconds 
let winner;
let mode;
let score = 0; 



  /*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');
const tileImgEls = document.querySelector('section.cards');


//!
//*
//?

//! setInterval();
  /*----- event listeners -----*/
// *.addEventListener(evt);
playAgainBtn.addEventListener('click', init);




  /*----- functions -----*/
init();


function init () {
  board = getShuffledTiles();
  console.log(board);
}
render (); 

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

function gameOver () {
  cancelInterval(timer);
  $('button').show(); 
}

function timerLeft() {
  timerLeft = timerLeft - 1;
  if (timerLeft >= 0)
  $('#timer').html(timerLeft);
else {
gameOver();
  }
}

function timerStart() {
  timer = setInterval(updateTimer, 1000); // 1000 milliseconds is 1 sec.
  updateTimer(); 
  $('button').hide();
}

 


function render() {
    renderTimer();
    renderModes(); 
    renderButton();
    renderScore();
  };

 


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


