<<<<<<< HEAD
const clockContainer = document.querySelector('.clock');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(updateClock, 1000);

updateClock();
=======
/*RainBow Title*/
let letters = document.querySelector(".testimonials__title h2").innerHTML.split("");

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'lightblue',
  'blue',
  'purple'
]

const getRandomColor = (arr) => arr[Math.floor(Math.random() * arr.length)];

Array.prototype.randomColor = function () {
  let h2 = "";
  this.map(letter => {
    let color = getRandomColor(colors);
    h2 += '<span style="color:' + color + '">' + letter + "</span>";
  });
  return h2;
};

function setColor(){
document.querySelector(".testimonials__title h2").innerHTML = letters.randomColor();
}

setInterval(setColor, 100);
>>>>>>> 364de8ce47d3570e3a82655d00119935359d58fa
