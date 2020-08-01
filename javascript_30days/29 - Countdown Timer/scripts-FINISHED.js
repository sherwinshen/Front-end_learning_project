let countdown;
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(time) {
    const seconds = parseInt(time);

    const now = Date.now();
    const then = now + seconds * 1000;

    // 显示倒计时和结束时间
    displayTimeLeft(seconds);
    displayEndTime(then);

    // clear any existing timers
    clearInterval(countdown);
    // start timers
    countdown = setInterval(() => {
        console.log('ha');
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return 0;
        } else {
            // 更新倒计时
            displayTimeLeft(secondsLeft);
        }
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timeLeft.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.innerHTML = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const time = parseInt(this.dataset.time);
    timer(time);
}

function submitMin(e) {
    e.preventDefault();
    const minute = this.minutes.value;
    timer(minute * 60);
    this.reset();
}

const buttons = document.querySelectorAll('.timer__button');
buttons.forEach(button => button.addEventListener('click', startTimer));

const custom = document.querySelector('#custom');
custom.addEventListener('submit', submitMin);