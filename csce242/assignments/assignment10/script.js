document.addEventListener("DOMContentLoaded", () => {
    const images = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };

    const titlesContainer = document.getElementById("titles-container");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeButton = document.getElementById("close");

    
    Object.keys(images).forEach(title => {
        const titleElement = document.createElement("p");
        titleElement.textContent = title;
        titleElement.classList.add("title");
        titleElement.addEventListener("click", () => showPopup(title, images[title]));
        titlesContainer.appendChild(titleElement);
    });

    const showPopup = (title, imagePath) => {
        popupTitle.textContent = title;
        popupImage.src = imagePath;
        popup.classList.remove("hidden");
    };

    closeButton.addEventListener("click", () => popup.classList.add("hidden"));
});
