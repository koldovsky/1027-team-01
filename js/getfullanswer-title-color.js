const title = document.querySelector('.getfullanswer__title-text');
const greetings = [
    'hello',
    'Welcome',
    'Привіт',
    'Вітаю'
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
title.innerText = getRandom(greetings);
