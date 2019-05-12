document.addEventListener("DOMContentLoaded", () => {

// Smooth scroll to the up of the page
const goUpBtn = document.querySelector(".go-up");
goUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});







});