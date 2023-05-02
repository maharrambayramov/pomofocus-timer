let startBtn = document.querySelector('.start');
let pauseBtn = document.querySelector('.pause')
let timer = document.querySelector('.timer');
let shortbreak = document.querySelector('#short')


let time = 1500000;
let workTime;
let breakTime;
let longTime;

function startTimer() {
    workTime = setInterval(() => {
        time--;
        displayTimer();
        if (time <= 0) {
            clearInterval(workTime)
            shortBreakTime()
            console.log('Artiq Pomidor yeye bilersen');

        }
    }, 1000);
    startBtn.style.display = "none";
    pauseBtn.style.display = "block"
}
function pauseTimer() {
    clearInterval(workTime);
    clearInterval(breakTime);
    clearInterval(longTime);
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
}

function shortBreakTime() {
    breakTime = setInterval(() => {
        time--;
        displayTimer();
        if (time <= 0) {
            clearInterval(breakTime);
            timer.classList.add('second');
            startTimer();
            console.log("Yeni pomidor ucun oxu.");
        }
    }, 1000);
}
function longBreakTime() {
    longTime = setInterval(() => {
        time--;
        displayTimer();
        if (time <= 0) {
            clearInterval(longTime);
            startTime();
            console.log("Bu qeder istiraher besdi");
        }
    })
}


function displayTimer() {
    const minutes = Math.floor(time / 60 / 1000).toString().padStart(2, '0')
    const seconds = Math.floor(time % 60).toString().padStart(2, '0')
    timer.textContent = `${minutes}:${seconds}`;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
shortbreak.addEventListener('click', shortBreakTime);
