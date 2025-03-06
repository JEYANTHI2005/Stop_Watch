const millisecondsLabel = document.getElementById('milliSeconds');
const secondsLabel = document.getElementById('sec');
const minuteLabel = document.getElementById('min');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// const lapList = document.getElementById('lap');

let min = 0;
let sec = 0;
let milliSeconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!interval) { 
        interval = setInterval(updateTimer, 10);
        startButton.disabled = true;
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    startButton.disabled = false;
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    min = 0;
    sec = 0;
    milliSeconds = 0;
    displayTimer();
    startButton.disabled = false;
}

function updateTimer() {
    milliSeconds += 10; 
    if (milliSeconds === 1000) {
        milliSeconds = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }
    displayTimer();
}

function displayTimer() {
    millisecondsLabel.textContent = milliSeconds.toString().padStart(3, '0');
    secondsLabel.textContent = sec.toString().padStart(2, '0');
    minuteLabel.textContent = min.toString().padStart(2, '0');
}
