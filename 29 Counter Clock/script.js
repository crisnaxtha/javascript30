let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing timers 

    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    // displayTimeLeft(seconds);
    displayTimeLeft(then);

    countdown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now() ) / 1000);
        // console.log(secondsLeft);

        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft)
    }, 1000) 
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60); 
    const remainderSeconds = seconds % 60; 
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    // console.log(seconds);
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp); 
    const hour = end.getHours();
    const min = end.getMinutes();
    displayEndTime.textContent = `Be Back At ${hour}: ${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const mins = this.minutes.value;
    console.log(mins);
    timer( mins * 60) ;
    this.reset();
})