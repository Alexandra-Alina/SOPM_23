// script.js

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".content, .content2, .text, .image");

    elements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
    });

    const fadeInOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 1s ease, transform 1s ease";
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    elements.forEach((element) => {
        fadeInObserver.observe(element);
    });
});








