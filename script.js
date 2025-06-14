document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbarMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navbarMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}); 