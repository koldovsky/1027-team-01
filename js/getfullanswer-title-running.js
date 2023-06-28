const title = document.querySelector(".getfullanswer__title-text");
/*const runingLine = title.textContent;*/
title.innerText = "Point at me if you want get more information ";
const runingLine ="Point at me if you want get more information ";
const scrollSpeed = 200;

let position = 0;
let isHovered = false;

function updateRunningText() {
  if (isHovered) {
    title.innerText =
      runingLine.substring(position) + runingLine.substring(0, position);
    position++;
    if (position >= runingLine.length) {
      position = 0;
    }
  }
}

title.addEventListener("mouseenter", () => {
  isHovered = true;
});

title.addEventListener("mouseleave", () => {
  isHovered = false;
  title.innerText = runingLine;
  position = 0;
});

setInterval(updateRunningText, scrollSpeed);
updateRunningText();