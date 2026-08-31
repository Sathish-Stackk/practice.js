const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
  guess = Number(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (guess > randomNumber) {
    alert("Too high! Try again.");
  } else if (guess < randomNumber) {
    alert("Too low! Try again.");
  } else {
    alert(`Correct! You guessed it in ${attempts} attempts.`);
  }
} while (guess !== randomNumber);
