// Product array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

// Function to populate product select options
function populateProductOptions() {
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Call function to populate options
populateProductOptions();

// Function to handle form submission and update review count in localStorage
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Increment the review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Redirect to the review.html page after incrementing the counter
    window.location.href = 'review.html';
}

// Attach event listener to the form submission
document.querySelector('form').addEventListener('submit', handleFormSubmit);
