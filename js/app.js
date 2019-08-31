/********* 
Treehouse FSJS Techdegree
Project 4 - OOP Game App
app.js 
Andy Tuinstra
**********/
let game = null;

//starts game when the start game button is clicked
$('#btn__reset').on('click' , function (){
    game = new Game();
    game.startGame();
});

//event listener for button clicks on the onscreen keyboard
$('.key').on('click', function(e) {
    game.handleInteraction(e.target);
});