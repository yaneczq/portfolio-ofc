const texts = [
    "But you know that it is only the beginning of new era floral even whern you dont suprisie yourself you may confuse the enemy!",
    "The themed gardens, serene ponds, and vibrant seasonal displays.",
    ];
let index = 0;

function changeText() {
    const sliderText = document.getElementById("slider-text");
    sliderText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

// Change text every 8 seconds (8000 milliseconds)
setInterval(changeText, 8000);
