const stairsContainer = document.getElementById("stairs-container");
const drawButton = document.getElementById("draw-stairs");
const climbButton = document.getElementById("climb-stairs");
let stickFigure;

// Function to draw stairs
const drawStairs = () => {
    stairsContainer.innerHTML = ""; 

    for (let i = 0; i < 10; i++) {
        const step = document.createElement("div");
        step.classList.add("stair");
        step.style.bottom = `${i * 40}px`; 
        stairsContainer.appendChild(step);
    }

    // Add stick figure
    stickFigure = document.createElement("img");
    stickFigure.src = "images/left.png"; 
    stickFigure.id = "stick-figure";
    stickFigure.style.bottom = "0px"; 
    stairsContainer.appendChild(stickFigure);

    climbButton.style.display = "block"; // Show climb button
};

// Function to make stick figure climb
const climbStairs = () => {
    let stepHeight = 40; 
    let step = 0;
    let isLeft = true;

    const climbInterval = setInterval(() => {
        if (step < 10) {
            stickFigure.style.bottom = `${step * stepHeight}px`; 
            stickFigure.src = isLeft ? "images/right.png" : "images/left.png"; 
            isLeft = !isLeft;
            step++;
        } else {
            clearInterval(climbInterval);
        }
    }, 500);
};

//  using arrow functions
drawButton.addEventListener("click", () => drawStairs());
climbButton.addEventListener("click", () => climbStairs());