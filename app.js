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

// Slajder
    const photos = document.querySelector(".slajder .gallery ul");
    const leftArrow = document.querySelector(".leftArrow");
    const rightArrow = document.querySelector(".rightArrow");
    const slideWidth = document.querySelectorAll(".slajder .gallery ul li")[0].clientWidth;
    const slides = document.querySelectorAll(".slajder .gallery ul li").length;
    
    let left = 0;
    let count = 1;

    function skip(side){
        
        if (side === "left"){
            count --;
            if (count < 1) count = slides;
            left = (count-1) * (-slideWidth);

        } else if (side === "right"){
            count ++;
            if (count > slides) count = 1;
            left = (count-1) * (-slideWidth);
        }

        photos.style.left = `${left}px`;
    }

    leftArrow.addEventListener("click", function(){skip("left")});
    rightArrow.addEventListener("click", function(){ skip("right")});

    setInterval(() => {skip("right");}, 2000);
});