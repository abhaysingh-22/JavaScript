let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

// Handle button clicks
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;
        if (value === '=') {
            try {
                string = eval(string.replace('x', '*')); // Replace 'x' with '*' for multiplication
                input.value = string;
            } catch {
                input.value = "Error"; // Handle invalid input
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string || '0'; // Reset to '0' if string is empty
        } else {
            string += value;
            input.value = string;
        }
    });
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        // If a number or operator is pressed
        string += key;
        input.value = string;
    } else if (key === "Enter") {
        // If 'Enter' is pressed, evaluate the expression
        try {
            string = eval(string.replace('x', '*')); // Replace 'x' with '*' for multiplication
            input.value = string;
        } catch {
            input.value = "Error"; // Handle invalid input
            string = "";
        }
    } else if (key === "Backspace") {
        // If 'Backspace' is pressed, delete the last character
        string = string.substring(0, string.length - 1);
        input.value = string || '0'; // Reset to '0' if string is empty
    } else if (key === "Escape") {
        // If 'Escape' is pressed, clear the input
        string = "";
        input.value = string;
    }
});
