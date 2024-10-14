// Wait for the DOM to be fully loaded
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

    // Array of Temple Objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add three or more additional temples here...
    ];

    // Function to display temples dynamically
    function displayTemples(temples) {
        const displayDiv = document.querySelector('.display');
        displayDiv.innerHTML = ''; // Clear previous content

        temples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');
            templeCard.innerHTML = `
                <figure>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                    <figcaption>
                        <h3>${temple.templeName}</h3>
                        <p>Location: ${temple.location}</p>
                        <p>Dedicated: ${temple.dedicated}</p>
                        <p>Area: ${temple.area} sq ft</p>
                    </figcaption>
                </figure>
            `;
            displayDiv.appendChild(templeCard);
        });
    }

    // Initially display all temples
    displayTemples(temples);

    // Filtering functionality
    document.querySelector('nav').addEventListener('click', (event) => {
        const filter = event.target.textContent;

        if (filter === 'Old') {
            displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
        } else if (filter === 'New') {
            displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
        } else if (filter === 'Large') {
            displayTemples(temples.filter(temple => temple.area > 90000));
        } else if (filter === 'Small') {
            displayTemples(temples.filter(temple => temple.area < 10000));
        } else {
            displayTemples(temples); // 'Home' or any other option displays all temples
        }
    });
});
