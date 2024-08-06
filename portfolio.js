// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form submission handling (example alert)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formDataSerialized = Object.fromEntries(formData.entries());
    console.log('Form Data:', formDataSerialized);
    alert('Thank you for your message!');
    // You can add code here to send the form data to a server via AJAX or handle it as needed.
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
