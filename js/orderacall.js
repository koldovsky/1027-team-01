// // document.querySelectorAll('.md-textbox')
//     .forEach( cb => {
//         cb.addEventListener('change', ev => {
//             if (ev.target.value !== '') {
//                 ev.target.classList.add('has-value')
//             } else {
//                 ev.target.classList.remove('has-value')
//             }
//         })
//     })
// var modal = document.getElementById("modal");
// var button = document.querySelector(".container-call button");
// var closeButton = document.getElementsByClassName("close")[0];
// var okButton = document.getElementById("okButton");

// button.onclick = function() {
//     modal.style.display = "block";
// }

// closeButton.onclick = function() {
//     modal.style.display = "none";
// }

// okButton.onclick = function() {
//     modal.style.display = "none";
// }
// function centerModalContent() {
//     var modalContent = document.querySelector(".modal-content");
//     modalContent.style.marginTop = (window.innerHeight - modalContent.offsetHeight) / 2 + "px";
// }
// //текст зникає //
// const nameInput = document.getElementById("input-name");
// const nameLabel = document.querySelector('.md-textbox label[for="input-name"]');
// const phoneInput = document.getElementById("input-phone");
// const phoneLabel = document.querySelector('.md-textbox label[for="input-phone"]');

// nameInput.addEventListener('input', () => {
//     if (nameInput.value !== '') {
//         nameLabel.style.display = 'none';
//     } else {
//         nameLabel.style.display = 'inline';
//     }
// });

// phoneInput.addEventListener('input', () => {
//     if (phoneInput.value !== '') {
//         phoneLabel.style.display = 'none';
//     } else {
//         phoneLabel.style.display = 'inline';
//     }
// });
// okButton.onclick = function() {
//     modal.style.display = "none";
//     nameInput.value = "";
//     phoneInput.value = "";
//     nameLabel.style.display = "inline";
//     phoneLabel.style.display = "inline";
// }
// //
