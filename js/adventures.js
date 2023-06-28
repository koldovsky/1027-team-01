// Получаем ссылку на картинку
var image = document.getElementById('myImage');

// Устанавливаем начальный размер картинки
var targetWidth = 500; // Ширина в пикселях
var targetHeight = 400; // Высота в пикселях

// Увеличиваем картинку на весь экран при клике
image.addEventListener('click', function() {
  image.style.transform = 'translate3d(-124px, 0px, 0px) scale3d(0.637596, 0.637596, 1)';
  //image.style.width = targetWidth + 'px';
  //image.style.height = targetHeight + 'px';
  image.style.display = 'block';
  image.style.margin = '0 auto';
  image.style.position = 'fixed';
  image.style.top = '50%';
  image.style.left = '50%';
  image.style.transform = 'translate(-50%, -50%)';
  image.style.zIndex = '9999';

    
});

// Восстанавливаем размер картинки после выхода из полноэкранного режима
document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement) {
    image.style.width = originalWidth + 'px';
    image.style.height = originalHeight + 'px';
  }
});

