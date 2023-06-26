/* TITLE */

function titleUpdate(){
    const title = document.querySelector(".testimonials__title h2");
    
    const colors = ['red','orange','yellow','green','blue','purple'];
    
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    title.style.color = getRandom(colors);
    
    };
    
    setInterval(titleUpdate,500);

/* Clock */

const timeContainer = document.querySelector(".clock");