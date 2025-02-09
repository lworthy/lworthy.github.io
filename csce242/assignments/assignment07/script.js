// JavaScript file for Assignment 7

// Say Hello Functionality
const addHello = () => {
    const helloContainer = document.getElementById('hello-container');
    const newHello = document.createElement('p');
    newHello.textContent = 'Hello';
    helloContainer.appendChild(newHello);
};

// Change Star Color
document.getElementById('color-picker').addEventListener('input', (event) => {
    document.getElementById('star').style.color = event.target.value;
});

// Image Change Functionality
const image = document.getElementById('changeable-image');
const images = ['images/dog.jpg', 'images/tiger.jpg'];
let currentImageIndex = 0;

image.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images[currentImageIndex];
});