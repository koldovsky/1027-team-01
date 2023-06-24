const checkbox = document.getElementById("burger");
checkbox.addEventListener("click", () => {
    document.body.style.overflowY = checkbox.checked === true ? "hidden" : "visible";
});
