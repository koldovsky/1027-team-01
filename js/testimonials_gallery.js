/*JSON Fetch*/

const response = await fetch("api/testimonials.json");
const images = await response.json();
renderProducts(images);

function renderProducts(images) {
  const testimonialsGallery = document.querySelector(".testimonials__gallery");
  testimonialsGallery.innerHTML = "";

  for (const image of images) {
    testimonialsGallery.innerHTML += `
        <img src="${image.src}" class="${image.class}" alt="${image.alt}">
        `;
  }
}