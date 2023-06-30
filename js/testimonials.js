/*RainBow Title*/
let letters = document.querySelector(".testimonials__title h2").innerHTML.split("");

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "lightblue",
  "blue",
  "purple",
];

const getRandomColor = (arr) => arr[Math.floor(Math.random() * arr.length)];

Array.prototype.randomColor = function () {
  let h2 = "";
  this.map((letter) => {
    let color = getRandomColor(colors);
    h2 += '<span style="color:' + color + '">' + letter + "</span>";
  });
  return h2;
};

function setColor() {
  document.querySelector(".testimonials__title h2").innerHTML =
    letters.randomColor();
}

setInterval(setColor, 100);
