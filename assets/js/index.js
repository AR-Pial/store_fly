document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var dropdownItems = document.querySelectorAll('.dropdown-item');
    var currentUrl = window.location.href;
    
    // Set active class for regular nav links
    navLinks.forEach(function (navLink) {
        console.log("Checking navLink:", navLink.href);
        if (navLink.href === currentUrl) {
            navLink.classList.add('active');
        }
    });

    // Set active class for dropdown items
    dropdownItems.forEach(function (dropdownItem) {
        if (dropdownItem.href === currentUrl) {
            dropdownItem.classList.add('active');
            // Find the parent dropdown toggle link
            var dropdownParent = dropdownItem.closest('.dropdown');
            if (dropdownParent) {
                var parentLink = dropdownParent.querySelector('.nav-link');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });

    const blurOverlay = document.getElementById('blurOverlay');
    const ofcBlurOverlay = document.getElementById('ofcBlurOverlay');
    const mainNav = document.querySelector('.main-nav');

    // Function to update blur overlay position
    function updateBlurOverlayPosition() {
        // Get the scroll position
        const scrollY = window.scrollY;

        // Get the height of the navbar
        const navbarHeight = mainNav ? mainNav.offsetHeight : 0;
        if (scrollY <= navbarHeight){
            blurOverlay.style.top = `${navbarHeight}px`;
            ofcBlurOverlay.style.top = `${navbarHeight}px`; 
        }
        else{
            blurOverlay.style.top = `0px`;
            ofcBlurOverlay.style.top = `0px`;
        }      
    }

    // Initial position update
    updateBlurOverlayPosition();

    // Update position on scroll
    window.addEventListener('scroll', updateBlurOverlayPosition);
    // Offset Search
    var ofcSearchIcon = document.querySelector('#ofcSearchIcon');
    var ofcSearch_close_btn = document.querySelector('#ofcSearch_close_btn');
    var ofcSearchBox = document.querySelector('#ofcSearchBox');
    

    if (ofcSearchIcon && ofcSearchBox) {
        ofcSearchIcon.addEventListener('click', function (event) {
            event.preventDefault(); 
            ofcSearchBox.classList.toggle('d-none');
            ofcSearchIcon.classList.toggle('d-none');
            ofcBlurOverlay.classList.toggle('d-none');
            ofcSearch_close_btn.classList.toggle('d-none');
        });
    } else {
        console.error("Search icon or search box not found!");
    }

    if (ofcSearch_close_btn){
        ofcSearch_close_btn.addEventListener('click', function (event) {
            event.preventDefault(); 
            ofcSearch_close_btn.classList.toggle('d-none');
            ofcSearchBox.classList.toggle('d-none');
            ofcBlurOverlay.classList.toggle('d-none');
            ofcSearchIcon.classList.toggle('d-none');
        });
    }

    // Search functionality
    var searchIcon = document.querySelector('#searchIcon');
    var search_close_btn = document.querySelector('#search_close_btn');
    var searchBox = document.querySelector('#searchBox');

    if (searchIcon && searchBox) {
        searchIcon.addEventListener('click', function (event) {
            event.preventDefault(); 
            searchBox.classList.toggle('d-none');
            searchIcon.classList.toggle('d-none');
            blurOverlay.classList.toggle('d-none');
            search_close_btn.classList.toggle('d-none');
        });
    } else {
        console.error("Search icon or search box not found!");
    }

    if (search_close_btn){
        search_close_btn.addEventListener('click', function (event) {
            event.preventDefault(); 
            search_close_btn.classList.toggle('d-none');
            searchBox.classList.toggle('d-none');
            blurOverlay.classList.toggle('d-none');
            searchIcon.classList.toggle('d-none');
        });
    }

    // Hide search box when clicking outside
    document.addEventListener('click', function (event) {
        var clickedInsideSearchBox = ofcSearchBox.contains(event.target) || searchBox.contains(event.target);
        var clickedOnSearchIcon = event.target.closest('#ofcSearchIcon') || event.target.closest('#searchIcon');
        
        // If the click is outside both the search boxes and search icons, hide them
        if (!clickedInsideSearchBox && !clickedOnSearchIcon) {
            ofcSearchBox.classList.add('d-none');
            searchBox.classList.add('d-none');
            blurOverlay.classList.add('d-none');
        }
    });
    
});


document.addEventListener('DOMContentLoaded', () => {
    const zoomContainer = document.querySelector('.zoom-container');
    const img = zoomContainer.querySelector('img');
    
    zoomContainer.addEventListener('mousemove', (event) => {
        const { left, top, width, height } = zoomContainer.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
    });
    
    zoomContainer.addEventListener('mouseleave', () => {
        img.style.transformOrigin = 'center center';
    });
});








