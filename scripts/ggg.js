document.getElementById('lastModified').textContent = document.lastModified;

// Wind Chill calculation function
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Define static values for temperature and wind speed
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Conditions for calculating wind chill
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChill}°C`;
} else {
    document.getElementById('windChill').textContent = 'N/A';
}
