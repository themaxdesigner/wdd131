const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

function calculateWindChill() {
    let temp = 6;
    let windSpeed = 11;
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

let windChill = calculateWindChill();

document.getElementById("wind-chill").textContent = ` ${windChill} ⁰C`;