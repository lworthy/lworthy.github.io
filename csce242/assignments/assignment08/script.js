document.addEventListener("DOMContentLoaded", function () {
    // Show Exercise 1 by default
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";

    // Get elements
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const exercise1Btn = document.getElementById("exercise1-btn");
    const exercise2Btn = document.getElementById("exercise2-btn");
    const transportInput = document.getElementById("transportInput");
    const transportImage = document.getElementById("transportImage");
    const colorButtons = document.querySelectorAll(".color-btn");
    const heart = document.getElementById("heart");

    // Toggle menu visibility and arrow direction
    menuToggle.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            menuToggle.textContent = "▼";
        } else {
            menu.style.display = "block";
            menuToggle.textContent = "▲";
        }
    });

    // Switch to Exercise 1
    exercise1Btn.addEventListener("click", function () {
        document.getElementById("exercise1").style.display = "block";
        document.getElementById("exercise2").style.display = "none";
    });

    // Switch to Exercise 2
    exercise2Btn.addEventListener("click", function () {
        document.getElementById("exercise2").style.display = "block";
        document.getElementById("exercise1").style.display = "none";
    });

    // Handle transport input change
    transportInput.addEventListener("input", function () {
        const transport = transportInput.value.toLowerCase().trim();
        const validTransports = {
            "bike": "images/bike.jpg",
            "scooter": "images/scooter.jpg",
            "car": "images/car.jpg",
            "skateboard": "images/skateboard.jpg"
        };

        if (validTransports[transport]) {
            transportImage.innerHTML = `<img src="${validTransports[transport]}" alt="${transport}" width="100">`;
        } else {
            transportImage.innerHTML = ""; // Clear image if input is invalid
        }
    });

    // Change heart color
    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const color = this.getAttribute("data-color");
            heart.style.backgroundColor = color;
        });
    });
});
