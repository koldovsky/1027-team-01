document.querySelectorAll('.md-textbox')
 .forEach( cb => {
   cb.addEventListener('change', ev => {
     if (ev.target.value !== '') {
       ev.target.classList.add('has-value')
     } else {
       ev.target.classList.remove('has-value')
     }
   })
 })

 const selectElement = document.querySelector('.md-textbox select');

selectElement.addEventListener('focus', function() {
  this.style.color = 'black'; // Change to the desired color
});

selectElement.addEventListener('blur', function() {
  this.style.color = ''; // Reset the color when the select element loses focus
});