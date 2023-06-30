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

/*JSON Fetch*/

const response = await fetch('api/testimonials.json');
const images = await response.json();
renderProducts(images);

function renderProducts(images) {
    const testimonialsGallery = document.querySelector('.testimonials__gallery');
    testimonialsGallery.innerHTML = '';
    
    for (const image of images) {
      testimonialsGallery.innerHTML += `
        <img src="${image.src}" class="${image.class}" alt="${image.alt}">
        `
    }
}
