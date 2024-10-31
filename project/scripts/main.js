document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Example data and dynamic rendering
    const tips = [
        { title: "Stay Hydrated", content: "Drink at least 8 glasses of water daily." },
        { title: "Eat Fresh", content: "Incorporate fresh fruits and vegetables into your diet." },
        { title: "Exercise Regularly", content: "Aim for at least 30 minutes of physical activity each day." }
    ];

    const tipsContainer = document.getElementById("tips-container");
    tips.forEach(tip => {
        const tipDiv = document.createElement("div");
        tipDiv.innerHTML = `
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
        `;
        tipsContainer.appendChild(tipDiv);
    });

    // Form submission and feedback
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
    form.addEventListener("submit", event => {
        event.preventDefault();
        const name = form.name.value;
        localStorage.setItem('name', name);
        feedback.textContent = `Thank you for reaching out, ${name}! We will get back to you soon.`;
        form.reset();
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
