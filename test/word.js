var assert = require('assert');
const Word = require('../src/word.js')

describe('Word', function() {
    it('should return all _ when no letters have not been guessed', function() {
      const w = new Word('test');
      assert.equal(w.toString(), '____');
    });
    it('should return the partial word when letters have been guessed', function() {
        const w = new Word('test');
        w.guess('t')
        assert.equal(w.toString(), 't__t');
    });
});
