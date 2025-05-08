document.addEventListener("DOMContentLoaded", function() {
    // Add scroll to top functionality for the logo
    const navbarBrand = document.querySelector(".navbar-brand");
    if (navbarBrand) {
        navbarBrand.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
