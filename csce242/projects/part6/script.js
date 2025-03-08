document.addEventListener("DOMContentLoaded", function () {
    
    const menuButton = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
        menuContainer.innerHTML = "<p>Loading menu items...</p>"; 

        fetch("https://raw.githubusercontent.com/lworthy/lworthy.github.io/main/csce242/projects/part6/menu.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    menuContainer.innerHTML = "<p>No menu items available.</p>";
                    return;
                }

                let menuHTML = "";
                data.forEach(item => {
                    
                    const itemPage = item.name.toLowerCase().replace(/\s+/g, '-') + ".html";

                    menuHTML += `
                        <div class="menu-item">
                            <a href="${itemPage}">
                                <img src="${item.img_name}" alt="${item.name}">
                                <h3>${item.name}</h3>
                            </a>
                            <p>${item.description}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                            <p><strong>Category:</strong> ${item.category}</p>
                            <p><strong>Calories:</strong> ${item.calories}</p>
                        </div>
                    `;
                });
                menuContainer.innerHTML = menuHTML;
            })
            .catch(error => {
                console.error("Error loading menu:", error);
                menuContainer.innerHTML = "<p>Failed to load menu items. Please try again later.</p>";
            });
    }
});
