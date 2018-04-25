
//Initializing possible outcomes and entries.
var potentialGuess = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z"];

//Creating variables for records.
var resetGuesses = 9; //Initializing # of guesses to be 9.
var scoreWin = 0;
var scoreLoss = 0;
var guessesLeft = resetGuesses; //Setting guesses remaining to initialize with reset.
var prevGuesses = []; //Creating empty array.

document.onkeyup = function () {
    //Storing user input as "userGuess" and turning it lower case for comparison.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess); //Display for reference of user choice.

    //Setting random computer guess using floor and random(0 to .99) against length.
    var compGuess = potentialGuess[Math.floor(Math.random() * potentialGuess.length)];
    console.log(compGuess); //Display for reference of computer choice.



    if (potentialGuess.indexOf(userGuess) !== -1) {//Checking if user input is a letter.

        //Conditions to check for possible outcomes.
        if (userGuess === compGuess) { //Checking if user guessed correctly.
            scoreWin++; //Adding 1 if user is correct.
            guessesLeft = resetGuesses; //Resetting for correct answer.
            prevGuesses.length = 0; //Clearing array.

        } else if (guessesLeft === 1) { //Check if user guess lost due to last guess.
            scoreLoss++; //Adding 1 if user is incorrect.
            guessesLeft = resetGuesses;
            prevGuesses.length = 0;

        } else {
            guessesLeft--; //Reduce user's remaining guesses.
            prevGuesses.push(" " + userGuess); //Adding space for clarity during output.
        }
    }

    //Display output to console log for reference.
    console.log("Wins: " + scoreWin);
    console.log("Losses: " + scoreLoss);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Your guesses so far: " + prevGuesses);

    //Setting information to be provided to html with id=game.
    var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + scoreWin + "</p>" +
        "<p>Losses: " + scoreLoss + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + prevGuesses + "</p>";

    //Modify variable html to include invalid entry statement.
    if (potentialGuess.indexOf(userGuess) === -1) {
        html += "<br><h4>Your entry is not a letter.</h4>"
    }

    //Set id game to be html variable.
    document.querySelector('#game').innerHTML = html;

}