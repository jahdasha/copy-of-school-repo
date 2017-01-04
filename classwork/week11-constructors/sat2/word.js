var Letter = require("./letter.js");

var Word = function (wrd){
	this.word = wrd;
	this.lets = []; // letter object
	this.found = false;

	this.getLets = function(){
		for(var i=0; i < this.word.length; i++){
			this.lets.push(new Letter(this.word[i]));
			// this.lets.push(new Letter(this.word[let])); is we use this the for loop would never run

		}
	}

// Note to self figure this function out
	//found the current word
    this.didWeFindTheWord = function() {
        //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
        this.found = this.lets.every(function(curLet) {
            return curLet.appear;
        });

        return this.found;
    };

// Note to self figure this function out
	this.checkIfLetterFound = function (guessLetter){
		var whatToReturn = 0;

		for(var i=0; i<this.lets.length; i++){
			if (this.lets[i].charac === guessLetter){
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}

		return whatToReturn;
	}

// Note to self figure this function out
    this.wordRender = function() {
        var str = '';

        for(var i=0; i < this.lets.length; i++){
            str += this.lets[i].letterRender();
        }

        return str;
    };

}
module.exports = Word;