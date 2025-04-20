// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the current value of the display
        let currentValue = document.getElementById('display').value;
        
        // Get the value of the button clicked
        let buttonValue = button.value;
        
        // If the button is a math operation, add it to the current value
        if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
            currentValue += buttonValue;
        } else if (buttonValue === 'C') {
            // If the button is the clear button, clear the display
            currentValue = '';
        } else if (buttonValue === '=') {
            // If the button is the equals button, evaluate the expression
            currentValue = eval(currentValue);
        } else {
            // If the button is a number, add it to the current value
            currentValue += buttonValue;
        }
        
        // Update the display with the new value
        document.getElementById('display').value = currentValue;
    });
});