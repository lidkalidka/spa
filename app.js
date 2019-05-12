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

// Form validation
const newsletterInput = document.querySelector(".newsletter form input");
const newsletterBtn = document.querySelector(".newsletter form button");
const newsletterInfo = document.querySelector(".newsletter p.info");

newsletterBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(newsletterInput.value !== ""){
        newsletterInfo.style.visibility = "visible";
        newsletterInfo.textContent = "Dziękujemy za zapis do newslettera"
        newsletterInput.value = "";
    } else {
        newsletterInfo.style.visibility = "visible";
        newsletterInfo.textContent = "Wprowadź adres e-mail"
    }
});

});