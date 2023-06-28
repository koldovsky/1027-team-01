var images = document.getElementsByClassName("adventures__places-image");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", enlargeImage);
}

function enlargeImage() {
  var overlay = document.createElement('div');
  overlay.className = 'overlay';

  var enlargedImage = document.createElement('img');
  enlargedImage.src = this.src;
  enlargedImage.className = 'enlarged-image';

  overlay.appendChild(enlargedImage);
  document.body.appendChild(overlay);

  overlay.onclick = function() {
    document.body.removeChild(overlay);
  };
}