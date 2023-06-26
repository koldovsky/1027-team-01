const clockContainer = document.querySelector('.clock');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(updateClock, 1000);

updateClock();