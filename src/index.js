var keypress = require('keypress');
const Word = require('./word')
// use decoration to enable stdin to start sending ya events 
keypress(process.stdin);

function randomWord() { return ['one','two','three'][Math.floor(Math.random() * 3)]}
// Esc[2J to clear screen

var game = new Word(randomWord())
console.log(game.toString());

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl ) {
        if(key.name == 'c') process.stdin.pause();
    } else if( ! game.guessed() ) {
        if ('abcdefghijklmnopqurstuvwxyz'.includes(ch) ) {
            game.guess(ch)
            console.log(game.toString());
            if ( game. guessed() ) console.log('You won!  Another game (y/n)?')
        }
    } else {
        if(  ch != 'y') process.exit();
        console.log((game = new Word(randomWord())).toString())
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();


