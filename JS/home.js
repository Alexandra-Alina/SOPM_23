document.addEventListener("DOMContentLoaded", function () {
    var faq = document.getElementsByClassName("faq-page");
    for (var i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            // Toggle între adăugarea și eliminarea clasei "active" pentru a controla panoul
            this.classList.toggle("active");
            // Toggle între ascunderea și afișarea panoului activ
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("bgtext");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function on() {
    document.getElementById("fullscreen-container").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function off() {
    document.getElementById("fullscreen-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

$(function() {
    $("#faqbutton").click(function() {
        $("#overlay").fadeTo(200, 1);
    });
    $("#close").click(function() {
        $("#overlay").fadeOut(200);
    });
});
