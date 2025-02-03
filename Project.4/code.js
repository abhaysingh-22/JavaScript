let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameContainer = document.querySelector(".game");

let turn0 = true; // player X, player O

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    removeWinningLine(); // Clear the winning line
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        // Add a placeholder class first
        box.classList.add("box-placeholder");

        // Add a delay for appearance
        setTimeout(() => {
            if (turn0) {
                box.innerText = "O";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true; // Disable the box after it's clicked

            // Apply the fade-in effect
            box.classList.remove("box-placeholder");
            box.classList.add("fade-in");

            checkwinner();
        }, 500); // Adjust delay (500ms)
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("fade-in", "box-placeholder", "winning-box");
    }
};


const showwinner = (winner, pattern) => {
    setTimeout(() =>{
    msg.innerText = `Congrats, the winner is ${winner}`;
},2000);
    msgcontainer.classList.remove("hide");
    disableboxes();

    // Highlight the winning boxes
    pattern.forEach((index) => {
        boxes[index].classList.add("winning-box");
    });
    drawWinningLine(pattern); // Draw the winning line
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showwinner(pos1Val, pattern);
                return;
            }
        }
    }
};


// Function to draw a line across the winning pattern
const drawWinningLine = (pattern) => {
    const startBox = boxes[pattern[0]];
    const endBox = boxes[pattern[2]];

    // Get positions of start and end boxes
    const startX = startBox.offsetLeft + startBox.offsetWidth / 2;
    const startY = startBox.offsetTop + startBox.offsetHeight / 2;
    const endX = endBox.offsetLeft + endBox.offsetWidth / 2;
    const endY = endBox.offsetTop + endBox.offsetHeight / 2;

    // Create the line element
    const line = document.createElement("div");
    line.classList.add("winning-line");

    // Calculate length and angle of the line
    const length = Math.hypot(endX - startX, endY - startY);
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    // Style the line
    setTimeout(() =>{
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;

    gameContainer.appendChild(line);
},1000);
};

// Function to remove the winning line
const removeWinningLine = () => {
    const line = document.querySelector(".winning-line");
    if (line) {
        line.remove();
    }
};


resetbtn.addEventListener("click", resetgame);



// Some of the part has been done with the help of chatgpt.........