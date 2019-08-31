/********* 
Treehouse FSJS Techdegree
Project 4 - OOP Game App
Game.js 
Andy Tuinstra
**********/

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    //makes new phrase and sets it in an array
    createPhrases(){
        const phraseArray = [];
        phraseArray.push(
            new Phrase('Apple of my Eye'),
            new Phrase('Back to Square One'),
            new Phrase('Chow Down'),
            new Phrase('Do not bite the hand that feeds you'),
            new Phrase('Bring home the Bacon')
        );
        return phraseArray;
    };

    startGame(){
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    //self explanitory, grabs a random phrase from the array of phrases
    getRandomPhrase(){
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return phrase;
    };

    checkForWin(){
        let score = 0;
        $('ul li').each(function(){
            if ($(this).hasClass('show')){
                score +=1;
            };
        });
        if (score === this.activePhrase.phrase.replace(/\s/g, '').length) {
            return true;
        } else {
            return false;
        }
    };

    removeLife(){
        if (this.activePhrase.checkLetter() === false){
            $('[alt="Heart Icon"]:first').remove();
            $('.tries:first').append('<img src="images/lostHeart.png" alt="Lost Heart" height="35" width="30">');
            this.missed +=1;
        };
        if (this.missed === 5){
            this.gameOver(false);
        };
    };

    gameOver(gameWin){
        $('#overlay').show();
        if (gameWin === false){
            $('#game-over-message').text('Sorry! Better luck next time!');
            $('#overlay').addClass('lose')
            $('.key').prop('disabled', true);
            $('#phrase ul li').remove();

            //removes the 'used' code and basically refreshes it for a new game
            $('.key').prop('disabled', false).removeClass('chosen wrong')
            $('.tries img').remove();
            $('.tries').append('<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">')
        } else {
            $('#game-over-message').text('You won! Great Work!');
            $('#overlay').addClass('win')
            $('.key').prop('disabled', true);
            $('#phrase ul li').remove();

            //removes the 'used' code and basically refreshes it for a new game
            $('.key').prop('disabled', false).removeClass('chosen wrong')
            $('.tries img').remove();
            $('.tries').append('<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">')
        }
    };

    handleInteraction(button) {
        const letterClick = $(button).text();
        if (this.activePhrase.checkLetter(letterClick) === true) {
            $(button).prop('disabled', true).addClass('chosen');
            this.activePhrase.showMatchedLetter(letterClick);
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
        } else {
            $(button).prop('disabled', true).addClass('wrong');
            this.removeLife();
        }
    };
};

