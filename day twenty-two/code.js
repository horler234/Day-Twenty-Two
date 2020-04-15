let randomNumber = parseInt((Math.random()*100)+1);
let userInput = document.getElementById('userNum');
const guessBtn = document.getElementById('guessNum');
let guessedNo = [];
let livesUsed = 0;

document.getElementById('guessNum').addEventListener("click", function(event) {
  event.preventDefault();
  const guess = parseInt(userInput.value);
  rangeCheck(guess);
});

function addGuesses(guess) {
  guessedNo.push(guess);
}

function showGuesses(guess) {
  document.getElementById('guesses').innerHTML += guess + ' ';
}

function comment(message) {
  document.getElementById('difference').innerHTML = message;
}

function livesRemain (livesvalue) {
  document.getElementById('remainLives').innerHTML = livesvalue;
}

function start() {
  userInput.value = '';
}

function rangeCheck(guess) {
  if (isNaN(guess)) {
    alert('How dumb are you?');
  }

  else if (guess < 1) {
    alert('Number out of range!');
  }

  else if (guess > 100) {
    alert('Number out of range!');
  }

  else {
    addGuesses(guess);
    showGuesses(guess);
    reviewGuess(guess);
  }
  start();
}

function reviewGuess(guess) {
  if (guess > randomNumber) {
    comment('The number guessed is greater than the value!');
    livesUsed++

    if (livesUsed === 10) {
      stopGame();
    }

    else {
      start();
    }

    livesRemain(10 - livesUsed);

  }

  else if (guess < randomNumber) {
    comment('The number guessed is less than the value!');
    livesUsed++

    if (livesUsed === 10) {
      stopGame();
    }

    else {
      start();
    }

    livesRemain(10 - livesUsed);


  }

  else {
    comment('You guessed it right!');
    begin();
  }
}

function newGame() {
  randomNumber = parseInt((Math.random()*100)+1);
  document.getElementById('newGame').value = 'Restart Game';
  guessedNo = [];
  userInput.removeAttribute('disabled', '');
  livesUsed = 0;
  start();
  comment('');
  livesRemain('10');
  document.getElementById('guesses').innerHTML = '';


}

function stopGame() {
  userInput.setAttribute('disabled', '');
  comment('You fuck up, answer is ' + randomNumber);
}

function begin() {
  userInput.setAttribute('disabled', '');
}

begin();
