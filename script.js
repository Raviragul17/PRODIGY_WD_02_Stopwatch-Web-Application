var [milseconds, seconds, minutes, hours] = [0, 0, 0, 0];
var display = document.querySelector('.display');
var stopwatch = null;
var lapCount = 1; // To keep track of laps

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const lap = document.querySelector('.lap'); // Select the lap button

start.addEventListener('click', () => {
    if (stopwatch !== null) {
        clearInterval(stopwatch);
    }
    stopwatch = setInterval(startButton, 10);
});

pause.addEventListener('click', () => {
    clearInterval(stopwatch);
});

reset.addEventListener('click', () => {
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerHTML = '00 : 00 : 00 : 00';
    clearInterval(stopwatch);
    lapCount = 1; // Reset lap count
    document.querySelector('.laps').innerHTML = ''; // Clear laps display
});

lap.addEventListener('click', () => {
    var lapTime = display.innerHTML.trim();
    var lapItem = document.createElement('div');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapCount++;
    document.querySelector('.laps').appendChild(lapItem);
});

function startButton() {
    milseconds += 1;
    if (milseconds == 100) {
        milseconds = 0;
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;
    var ms = milseconds < 10 ? "0" + milseconds : milseconds;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
