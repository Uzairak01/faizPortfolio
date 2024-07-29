document.addEventListener('DOMContentLoaded', () => {
    // Initialize dark/light mode
    const darkLightBtn = document.getElementById('icon');
    const body = document.body;

    // Check saved preference from localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('night');
        darkLightBtn.classList.add('active');
    } else {
        body.classList.remove('night');
        darkLightBtn.classList.remove('active');
    }

    // Toggle dark/light mode
    darkLightBtn.addEventListener('click', () => {
        darkLightBtn.classList.toggle('active');
        body.classList.toggle('night');

        // Save preference to localStorage
        if (body.classList.contains('night')) {
            localStorage.setItem('mode', 'dark');

        } else {
            localStorage.setItem('mode', 'light');
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const ul = document.querySelector('header ul'); // More specific selector

    if (hamburger && ul) {
        hamburger.addEventListener('click', () => {
            ul.classList.toggle('hamburger_Active');

            const hamburgerIcon = hamburger.querySelector('i'); // Assuming you have an <i> inside .hamburger
            if (ul.classList.contains('hamburger_Active')) {
                hamburgerIcon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }
});
