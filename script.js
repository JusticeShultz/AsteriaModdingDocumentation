// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a sticky header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.remove("hidden");
        });

        dropdown.addEventListener("mouseleave", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.classList.add("hidden");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                const menu = dropdown.querySelector(".dropdown-menu");
                menu.classList.add("hidden");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const previewImages = document.querySelectorAll(".preview-image");
    const fullscreenOverlay = document.getElementById("fullscreen-preview");
    const fullscreenImage = fullscreenOverlay.querySelector(".fullscreen-image");
    const closeOverlay = fullscreenOverlay.querySelector(".close-overlay");

    // Open fullscreen preview
    previewImages.forEach(image => {
        image.addEventListener("click", () => {
            fullscreenImage.src = image.src; // Set the clicked image source
            fullscreenOverlay.classList.add("active"); // Show the overlay
        });
    });

    // Close fullscreen preview when clicking the "X"
    closeOverlay.addEventListener("click", () => {
        fullscreenOverlay.classList.remove("active");
    });

    // Close overlay when clicking outside the image
    fullscreenOverlay.addEventListener("click", (event) => {
        if (event.target === fullscreenOverlay) {
            fullscreenOverlay.classList.remove("active");
        }
    });
});
