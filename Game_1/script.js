'use strict';

// document.querySelector('.message').textContent ="🎊 Correct Number";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);

let SecrNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = SecrNum;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🏁No number!';
    }

    else if (guess === SecrNum) {
        document.querySelector('.message').textContent = "🎊 Correct Number";
        document.querySelector('.number').textContent = SecrNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }


    }
    else if (guess > SecrNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = "☝️Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "0️⃣You lost the game!";
            document.querySelector('.score').textContent = score;
        }

    }
    else if (guess < SecrNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = "👇Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "0️⃣You lost the game!";
            document.querySelector('.score').textContent = score;
        }

    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecrNum = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15 rem';


})