document.querySelectorAll('.md-input')
    .forEach(cb => {
        cb.addEventListener('change', ev => {
            if (ev.target.value !== '') {
                ev.target.classList.add('has-value')
            } else {
                ev.target.classList.remove('has-value')
            }
        })
    })

const modal = document.getElementById("modal");
const button = document.querySelector(".container-call button");
const closeButton = document.getElementsByClassName("close")[0];
const okButton = document.getElementById("okButton");

button.onclick = () => {
    modal.style.display = "block";
}

closeButton.onclick = () => {
    modal.style.display = "none";
}

okButton.onclick = () => {
    modal.style.display = "none";
}

function centerModalContent() {
    const modalContent = document.querySelector(".modal-content");
    modalContent.style.marginTop = (window.innerHeight - modalContent.offsetHeight) / 2 + "px";
}

const nameInput = document.getElementById("input-names");
const nameLabel = document.querySelector('.md-input label[for="input-names"]');
const phoneInput = document.getElementById("input-phones");
const phoneLabel = document.querySelector('.md-input label[for="input-phones"]');

nameInput.addEventListener('input', () => {
    if (nameInput.value !== '') {
        nameLabel.style.display = 'none';
    } else {
        nameLabel.style.display = 'inline';
    }
});

phoneInput.addEventListener('input', () => {
    if (phoneInput.value !== '') {
        phoneLabel.style.display = 'none';
    } else {
        phoneLabel.style.display = 'inline';
    }
});

okButton.onclick = () => {
    modal.style.display = "none";
    nameInput.value = "";
    phoneInput.value = "";
    nameLabel.style.display = "inline";
    phoneLabel.style.display = "inline";
}
