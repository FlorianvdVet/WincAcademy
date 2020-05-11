// Welcome new user and ask for name
let playerName = prompt("Welcome. Please enter your name:", "Guest");

// Greet user by name
alert("Hey " + playerName + "!");

// Let the player choose a lower limit
let lowerLimit = parseInt(prompt("Please enter a lower limit:", 0));

// Let the player choose an upper limit
let upperLimit = parseInt(prompt("Please choose an upper limit:", 10));

// Create a random number between the lower and upper limits
let randomNumber = Math.round(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;

// Ask user for a number
let guessedNumber = parseInt(prompt("Please enter a number between " + lowerLimit + " and " + upperLimit + ":"));

// Set initial attempts to 1, since the player already guessed one time
let attempts = 1;

// If the initial guess is not correct, enter a loop that keeps on running while
// the random number is not guessed AND the player still has some attempts left
while (guessedNumber != randomNumber && attempts < 5) {
  alert("That was not correct! You have " + (5 - attempts) + " attempts left.");
  guessedNumber = parseInt(prompt("Please enter a number between " + lowerLimit + " and " + upperLimit + ":"));
  attempts++;
}

// Check if the number was guessed and notify the player about the result
if (guessedNumber === randomNumber) {
  alert("That's correct, you won!");
} else {
  alert("You have no attempts left. Game over!");
}

// Say goodbye to the player
alert("Bye " + playerName + ". See you next time!");