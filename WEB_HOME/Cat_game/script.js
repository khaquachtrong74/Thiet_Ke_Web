const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time-left');
const startButton = document.querySelector('.start-button');
const moleSound = document.getElementById('moleSound');

let lastHole;
let timeUp = false;
let score = 0;
let timeLeft = 30;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    if (!timeUp) {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('mole');
        setTimeout(() => {
            hole.classList.remove('mole');
            if (!timeUp) peep();
        }, time);
    }
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    timeLeft = 30;
    timeDisplay.textContent = timeLeft;
    timeUp = false;
    startButton.disabled = true;
    peep();
    const countdown = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timeUp = true;
            startButton.disabled = false;
            alert('Game over! Your final score is ' + score);
        }
    }, 1000);
}

function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    moleSound.currentTime = 0;
    moleSound.play();
    this.parentNode.classList.remove('mole');
    scoreDisplay.textContent = score;
}

holes.forEach(hole => hole.addEventListener('click', bonk));
