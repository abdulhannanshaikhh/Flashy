//Fix the header//
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0)
})
//toggle button on the right corner//
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
function onclick() {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}