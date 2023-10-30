// script.js

document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing code)

    // Function to create an emoji element
    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.innerHTML = "🍒"; // You can change this to any emoji you like
        return emoji;
    }

    // Function to animate the emojis falling
    function animateEmoji(emoji) {
        const startPosition = Math.random() * window.innerWidth;
        const duration = Math.random() * 20 + 30; // Random duration between 1 and 3 seconds
        emoji.style.left = `${startPosition}px`;
        emoji.style.animation = `fall ${duration}s linear`;

        // Remove the emoji after animation ends
        emoji.addEventListener("animationiteration", () => {
            emoji.style.left = `${Math.random() * window.innerWidth}px`;
        });

        document.querySelector(".emoji-rain").appendChild(emoji);
    }

    // Create and animate multiple emojis
    setInterval(() => {
        const numberOfEmojis = 1; // You can adjust this number to have more or fewer emojis in each interval
        for (let i = 0; i < numberOfEmojis; i++) {
            const emoji = createEmoji();
            animateEmoji(emoji);
        }
    }, 100); // Add a new set of emojis every 0.1 seconds
});








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







