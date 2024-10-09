const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

function calculateWindChill() {
    let temp = 30; // Temperature in degrees Celsius for Nigeria
    let windSpeed = 15; // Wind speed in km/h for Nigeria

    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A"; // Wind chill calculation is typically not relevant for higher temperatures
    }
}

let windChill = calculateWindChill();
document.getElementById("wind-chill").textContent = ` ${windChill} ⁰C`;
