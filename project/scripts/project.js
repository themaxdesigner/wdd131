document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

    // Populate product select options
    populateProducts();

    // Handle form submission
    document.querySelector('form').addEventListener('submit', handleFormSubmission);

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger'); // Select the hamburger button
    const nav = document.querySelector('nav');              // Select the nav element
    hamburger.addEventListener('click', toggleHamburgerMenu);
});

// Function to populate product select options
function populateProducts() {
    const products = [
        { id: "fc-1888", name: "Fitness Class", averagerating: 4.5 },
        { id: "fc-2050", name: "Weight Management", averagerating: 4.7 },
        { id: "fs-1987", name: "Nutrition Counselling", averagerating: 3.5 },
        { id: "ac-2000", name: "Sports Teams", averagerating: 3.9 },
        { id: "jj-1969", name: "Gym Membership", averagerating: 5.0 }
    ];

    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Function to handle form submission and update review counts in localStorage
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Increment review count in localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Increment completed reviews counter
    let completedReviews = parseInt(localStorage.getItem('completedReviews')) || 0;
    completedReviews++;
    localStorage.setItem('completedReviews', completedReviews);

    // Redirect to the review.html page after a short delay
    setTimeout(() => {
        window.location.href = 'review.html';
    }, 500); // 500ms delay
}

// Function to toggle the hamburger menu
function toggleHamburgerMenu() {
    const nav = document.querySelector('nav'); // Select the nav element
    nav.classList.toggle('show'); // Toggle the 'show' class on the nav

    // Toggle between hamburger (☰) and close (✖) symbols
    const hamburger = document.querySelector('.hamburger');
    hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
}

// Sample HTML for lazy loading images
// Make sure to include this in your HTML:
// <img src="image.jpg" loading="lazy" alt="Description">
// Adjust the 'src' as necessary for your images.
