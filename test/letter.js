var assert = require('assert');
const Letter = require('../src/letter.js')

describe('Letter', function() {
    it('should return _ when letter has not been guessed', function() {
      const l = new Letter('a');
      assert.equal(l.toString(), '_');
    });
    it('should return the letter when letter has  been guessed', function() {
        const l = new Letter('a');
        l.guess('a')
        assert.equal(l.toString(), 'a');
    });
});
