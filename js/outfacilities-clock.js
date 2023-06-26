const clockContainer = document.querySelector(".clock");
clockContainer.style.color = "red";

function updateClock() {
  clockContainer.innerText = new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
