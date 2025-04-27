const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

// Function to convert temperatures
function convert() {
    // Clear the result before calculating
    result.textContent = "";

    // Check if the input is a valid number
    if (isNaN(textBox.value) || textBox.value === "") {
        result.textContent = "Please enter a valid number.";
        return;
    }

    // Convert to Fahrenheit
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    // Convert to Celsius
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    // If no unit is selected
    else {
        result.textContent = "Please select a unit to convert.";
    }
}

// Optional: Automatically clear the result when the user changes the input value
textBox.addEventListener('input', function () {
    result.textContent = "";
});
