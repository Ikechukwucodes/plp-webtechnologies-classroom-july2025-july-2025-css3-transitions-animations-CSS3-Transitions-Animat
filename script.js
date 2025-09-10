// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// Demonstrates local vs global scope, parameters, return values, and DOM manipulation

// Global variable
let globalMessage = "Hello from global scope!";

function showScopeDemo() {
    // Local variable
    let localMessage = "Hello from local scope!";
    document.getElementById('scope-result').textContent = `${globalMessage} | ${localMessage}`;
}

function addNumbers(a, b) {
    // Returns the sum of two numbers
    return a + b;
}

function calculateAndAnimate(x, y) {
    // Uses addNumbers and triggers an animation
    const result = addNumbers(x, y);
    document.getElementById('calc-result').textContent = `Sum: ${result}`;
    // Animate the box
    const box = document.getElementById('js-animated-box');
    box.classList.add('animated');
    setTimeout(() => box.classList.remove('animated'), 1000);
}

// Part 3: Combining CSS Animations with JavaScript
// Button triggers box animation
const animateBoxBtn = document.getElementById('animate-box-btn');
animateBoxBtn.addEventListener('click', () => {
    const box = document.getElementById('js-animated-box');
    box.classList.add('animated');
    setTimeout(() => box.classList.remove('animated'), 1000);
});

// Card flip animation
const flipCardBtn = document.getElementById('flip-card-btn');
const flipCard = document.getElementById('flip-card');
flipCardBtn.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
});

// Modal popup animation
const showModalBtn = document.getElementById('show-modal-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
showModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
});
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});
// Optional: close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// End of assignment demo code

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
let isDark = false;
themeToggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});

// Set initial mode
body.classList.add('light-mode');
