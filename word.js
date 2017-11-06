//Bringing in data from letter.js
var letters = require("./letter.js");
//Creating variable to store array of words
var words = ["Al Capone", "Bugsy Siegel", "John Dillinger", "Bonnie and Clyde", "Mickey Cohen", "Pretty Boy Floyd", "Frank Costello"]; 
//Creating a word constructor to select a name from the array and push up to the hangman variable
var selection = function() {
	this.lives = 9;
	this.letters = [];
	this.letraPicks = [];
	this.pick = words[Math.floor(Math.random() *6) + 1];
	//Testing wether 'pick' argument is working
	//console.log(this.pick);
	for (var i = 0; i < this.pick.length; i++) {
		this.letters.push(new Letter.Letras(this.pick[i]));
	}
};  



module.exports = Word;
