// Logo click behavior for HyperMind AI
document.addEventListener("DOMContentLoaded", function() {
    // Get all navbar brand elements
    const navbarBrand = document.querySelector(".navbar-brand");
    
    if (navbarBrand) {
        navbarBrand.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Check if we are on the index page
            const isIndexPage = window.location.pathname.endsWith("index.html") || 
                              window.location.pathname.endsWith("/") || 
                              window.location.pathname.endsWith("/strella-clone/");
            
            if (isIndexPage) {
                // If on index page, scroll to the Smarter research section
                const heroSection = document.querySelector(".hero");
                if (heroSection) {
                    window.scrollTo({
                        top: heroSection.offsetTop,
                        behavior: "smooth"
                    });
                } else {
                    // Fallback to top if hero section not found
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            } else {
                // If on any other page, navigate to index.html and add a hash to scroll to hero section
                window.location.href = "index.html#hero";
            }
        });
    }
});
