//Creating constructor to guess letter chosen by selector();
//'char' is for the letter chosen
//'update' stays false until a letter is correctly guessed. Will change "_" to actual letter
//'post' will display "_" if update space remains false
var Letter = function (char) {
	this.char = char;
	this.update = false;
	this.post = function() {
		if (this.update === false) {
			return("_")
		} else {
			console.log(this.char);
		}
	};
}; 

//Testing letter.js
//console.log("Enter flicks!")
module.exports = Letter;