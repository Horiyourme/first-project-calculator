// Accessing necessary DOM elements
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.buttons-container input');

// A variable to store the current calculation as a string
let currentInput = '';

// Function to handle when a button is clicked
function handleButtonClick(event) {
    const buttonValue = event.target.value;

    // If the "AC" button is pressed, reset the calculator
    if (buttonValue === 'AC') {
        currentInput = '';
        screen.value = '';
    } 
    // If the "DEL" button is pressed, remove the last character
    else if (buttonValue === 'DEL') {
        currentInput = currentInput.slice(0, -1);
        screen.value = currentInput;
    } 
    // If the "=" button is pressed, evaluate the expression
    else if (buttonValue === '=') {
        try {
            // Use the JavaScript eval function to calculate the expression
            currentInput = eval(currentInput).toString();
            screen.value = currentInput;
        } catch (error) {
            screen.value = 'Error'; // Handle invalid expressions
            currentInput = '';
        }
    } 
    // If the "%" button is pressed, calculate the percentage
    else if (buttonValue === '%') {
        try {
            currentInput = (parseFloat(currentInput) / 100).toString();
            screen.value = currentInput;
        } catch (error) {
            screen.value = 'Error';
            currentInput = '';
        }
    }
    // Otherwise, update the current input with the pressed button's value
    else {
        currentInput += buttonValue;
        screen.value = currentInput;
    }
}

// Adding event listeners to all calculator buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
