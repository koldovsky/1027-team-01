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