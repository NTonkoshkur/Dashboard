/* Change footer text */

function updateText() {
    const change = document.getElementById("footer__change-text");
    if (window.innerWidth <= 540) {
        change.textContent = "Showing data 1 to 3 of 256K entries";
    } else if (window.innerWidth > 750 && window.innerWidth <= 980) {
        change.textContent = "Showing data 1 to 8 of 256K entries";
    } else {
        change.textContent = "Showing data 1 to 8 of 256K entries";
    }
}
window.addEventListener('resize', updateText);
updateText();
