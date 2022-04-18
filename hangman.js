let words = ["Appleseeds", "Prebootcamp", "abed", "code","apple", "Computer","web","internet"];
let word = words[Math.floor(Math.random() * words.length)];
let remainingLetter = word.length;
let asterisk = [];
let attempts = 10;
let noMatch = 0;
let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let repeatedGuess =[];

function startGame() {
    for( let i = 0; i < word.length; i++){
        asterisk[i] = "*";
    }
    while(remainingLetter > 0){
        console.log("You have " + attempts + " guesses");
        console.log("The word is:");
        console.log(asterisk.join(" "));
        let guess = prompt("What is your guess?");
        if (guess.length !== 1 || format.test(guess) || (!isNaN(guess * 1))) {
            console.log("Please enter only one character");
        } else if (!repeatedGuess.includes(guess)) {
            for (let j = 0; j < word.length; j++) {
                if (word[j].toLowerCase() === guess.toLowerCase()) {
                    asterisk[j] = guess.toLowerCase();
                    remainingLetter--;
                    repeatedGuess.push(guess.toLowerCase());
                } else {
                    noMatch++;
                }
            }
        }
        if (noMatch === word.length){
            attempts--;
        }
        if(attempts === 0){
            console.log("game over :(");
            break;
        }
        noMatch = 0
    }
    console.log(asterisk.join(" "));
    if(attempts !== 0){
        console.log("Wow You are good!!!");
    }
}

function welcomeMsg () {
    let figlet = require('figlet');
    figlet('Hangman\n Assignment!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        startGame();
    });
}

welcomeMsg();
