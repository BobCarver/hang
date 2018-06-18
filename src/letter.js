function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.toString = function () {
        return this.guessed ? this.letter : '_';
    }
    this.guess = function(ch) { this.guessed |= ch == this.letter}
};

module.exports = Letter;