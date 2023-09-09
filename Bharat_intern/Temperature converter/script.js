document.addEventListener("DOMContentLoaded", function() {
    const inputTemp = document.getElementById("inputTemp");
    const fromUnit = document.getElementById("fromUnit");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(inputTemp.value);

        if (isNaN(temperature)) {
            result.textContent = "Please enter a valid temperature.";
            return;
        }

        const from = fromUnit.value;
        const to = from === "celsius" ? "fahrenheit" : "celsius"; // Toggle units

        const convertedTemperature = convertTemperature(temperature, from, to);

        result.textContent = `${temperature}°${from.toUpperCase()} is equal to ${convertedTemperature.toFixed(2)}°${to.toUpperCase()}`;
    });

    function convertTemperature(temperature, from, to) {
        if (from === "celsius" && to === "fahrenheit") {
            return (temperature * 9/5) + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            return (temperature - 32) * 5/9;
        } else if (from === "celsius" && to === "kelvin") {
            return temperature + 273.15;
        } else if (from === "kelvin" && to === "celsius") {
            return temperature - 273.15;
        } else if (from === "celsius" && to === "rankine") {
            return (temperature + 273.15) * 9/5;
        } else if (from === "rankine" && to === "celsius") {
            return (temperature - 491.67) * 5/9;
        } else if (from === "fahrenheit" && to === "kelvin") {
            return (temperature - 32) * 5/9 + 273.15;
        } else if (from === "kelvin" && to === "fahrenheit") {
            return (temperature - 273.15) * 9/5 + 32;
        } else if (from === "fahrenheit" && to === "rankine") {
            return temperature + 459.67;
        } else if (from === "rankine" && to === "fahrenheit") {
            return temperature - 459.67;
        }

        return temperature; // Default to no conversion
    }
});
