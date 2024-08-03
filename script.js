function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <p>What is your favorite color?</p>
        <input type="text" id="answer1">
        <button onclick="checkAnswer()">Submit</button>
    `;
}

function checkAnswer() {
    const answer = document.getElementById('answer1').value;
    alert(`Your answer is: ${answer}`);
}

function startGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <p>Guess a number between 1 and 10</p>
        <input type="number" id="guess">
        <button onclick="checkGuess()">Submit</button>
    `;
}

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const correctNumber = Math.floor(Math.random() * 10) + 1;
    if (guess == correctNumber) {
        alert('Correct! You guessed the number.');
    } else {
        alert(`Wrong! The correct number was ${correctNumber}.`);
    }
}
