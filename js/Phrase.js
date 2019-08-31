/********* 
Treehouse FSJS Techdegree
Project 4 - OOP Game App
Phrase.js 
Andy Tuinstra
**********/

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    };

    //adds phrase to the index game board
    addPhraseToDisplay(){
        for (let i = 0; i < this.phrase.length; i += 1){
            if (this.phrase.charAt(i) === ' ') {
                $('#phrase ul').append('<li class="space">' + this.phrase.charAt(i) + '</li>');
            } else {
                $('#phrase ul').append('<li class="letter">' + this.phrase.charAt(i) + '</li>');
            };
        };
    };

    //checks to see if selected letter matches the letter(s) in the given phrase
    checkLetter(letter){
        return this.phrase.includes(letter);
    };

    //reveals letter(s) on the board if player selected a matching one
    showMatchedLetter(letter){
        if (this.checkLetter(letter) === true) {
            $('.letter').each(function() {
                if ($(this).text() === letter) {
                    $(this).addClass('show');
                    $(this).removeClass('hide');
                }
            });
        }   
    };
};