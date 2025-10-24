function startGame() {
  // 1. Computer picks random number 1–50
  let secretNumber = Math.floor(Math.random() * 50) + 1;

  // 2. Initialize variables
  let guess;
  let attempts = 0;

  // 3. Loop until guess is correct
  while (guess !== secretNumber) {
    let input = prompt("Guess a number between 1 and 50:");

    // Handle cancel
    if (input === null) {
      alert("Game cancelled.");
      return;
    }

    guess = parseInt(input, 10);

    if (isNaN(guess)) {
      alert(" Please enter a valid number!");
      continue; // skip this attempt
    }

    attempts++;

    if (guess === secretNumber) {
      alert(` Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempts.`);
    } else if (guess > secretNumber) {
      alert("Too high! Try again ⬇");
    } else {
      alert("Too low! Try again ⬆");
    }
  }
}
