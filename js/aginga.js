
const btn = document.querySelector('.btn');

function alertBtn() {
    alert('This is my peronal Portfolio');
}

btn.addEventListener('click', alertBtn);

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});
