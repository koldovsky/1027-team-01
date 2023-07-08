window.addEventListener('scroll', function() {
  const blocks = document.querySelectorAll('.slide-in');
  const windowHeight = window.innerHeight;

  blocks.forEach(function(block) {
    const blockTop = block.getBoundingClientRect().top;

    if (blockTop < windowHeight) {
      block.classList.add('active');
    }
  });
});