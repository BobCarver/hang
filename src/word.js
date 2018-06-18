const Letter = require('./letter.js')

function Word(word) {
    this.word = word;
    this.letters = word.split('').map( ch => new Letter(ch))
};

Word.prototype.toString = function () {
    return this.letters.map( l => l.toString()).join('')
}
Word.prototype.guess = function(ch) { for( l of this.letters) l.guess(ch) }
Word.prototype.guessed = function() { this.word = this.toString() }

module.exports = Word;
