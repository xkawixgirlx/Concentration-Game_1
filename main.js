  /*----- constants -----*/
const FLIPPED_CARDS = {
    'null': 'yellow',  //show back of card not flipped
    '1' : 'green' //show card clicked
}



  /*----- state variables -----*/
  /*States:
  Flipped/not flipped
  1st card? 
  Board render
  Audio
  Play Again/Play Button 
  Timer Countdown
  Modes/Levels*/
let deck1;
let deck2;
let timer;
let winner;
let mode;



  /*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');


//!
//*
//?

//! setInterval();
  /*----- event listeners -----*/
// *.addEventListener(evt);
playAgainBtn.addEventListener('click', init);




  /*----- functions -----*/
function init () {

deck1 = [ [null, null, null, null], //bottom row back of cards
        [null, null, null, null], //lower-middle cards
        [null, null, null, null], //middle-upper cards
        [null, null, null, null], //top row of cards
];

deck2 = [ [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
];


render ();
} 


 


function render() {
    renderDecks();
    renderTimer();
    renderModes(); 
    renderButton();
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


