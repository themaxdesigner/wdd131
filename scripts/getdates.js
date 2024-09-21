document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Set the current year in the footer's first paragraph
    document.getElementById("currentyear").textContent = currentYear;

    // Get the last modified date of the document
    const lastModifiedDate = document.lastModified;
    // Set the last modified date in the second paragraph
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;
});
