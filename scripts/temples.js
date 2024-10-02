document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger'); // Select the hamburger button
    const nav = document.querySelector('nav');              // Select the nav element

    // Add click event to the hamburger button
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');  // Toggle the 'show' class on the nav
        
        // Toggle between hamburger (☰) and close (✖) symbols
        if (hamburger.textContent === "☰") {
            hamburger.textContent = "✖"; // Change to X
        } else {
            hamburger.textContent = "☰"; // Change back to hamburger
        }
    });
});
