document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var dropdownItems = document.querySelectorAll('.dropdown-item');
    var currentUrl = window.location.href;

    // Debugging: Print the current URL
    console.log("Current URL:", currentUrl);

    // Set active class for regular nav links
    navLinks.forEach(function (navLink) {
        console.log("Checking navLink:", navLink.href);
        if (navLink.href === currentUrl) {
            navLink.classList.add('active');
            console.log("Added active class to navLink:", navLink.href);
        }
    });

    // Set active class for dropdown items
    dropdownItems.forEach(function (dropdownItem) {
        console.log("Checking dropdownItem:", dropdownItem.href);
        if (dropdownItem.href === currentUrl) {
            dropdownItem.classList.add('active');
            console.log("Added active class to dropdownItem:", dropdownItem.href);
            // Find the parent dropdown toggle link
            var dropdownParent = dropdownItem.closest('.dropdown');
            if (dropdownParent) {
                var parentLink = dropdownParent.querySelector('.nav-link');
                if (parentLink) {
                    parentLink.classList.add('active');
                    console.log("Added active class to parentLink:", parentLink.href);
                }
            }
        }
    });

    
    // Offset Search
    var ofstsearchIcon = document.querySelector('#ofstsearchIcon');
    var ofstsearchBox = document.querySelector('#ofstsearchBox');

    if (ofstsearchIcon && ofstsearchBox) {
        ofstsearchIcon.addEventListener('click', function (event) {
            // Log when clicked
            event.preventDefault(); // Prevent default anchor behavior
            console.log("Search icon clicked");
            // Toggle the d-none class to show/hide the search box
            ofstsearchBox.classList.toggle('d-none');
        });
    } else {
        console.error("Search icon or search box not found!");
    }

    // Search functionality
    var searchIcon = document.querySelector('#searchIcon');
    var searchBox = document.querySelector('#searchBox');

    if (searchIcon && searchBox) {
        searchIcon.addEventListener('click', function (event) {
            // Log when clicked
            event.preventDefault(); // Prevent default anchor behavior
            console.log("Search icon clicked");
            // Toggle the d-none class to show/hide the search box
            searchBox.classList.toggle('d-none');
        });
    } else {
        console.error("Search icon or search box not found!");
    }

    // Hide search box when clicking outside
    document.addEventListener('click', function (event) {
        var clickedInsideSearchBox = ofstsearchBox.contains(event.target) || searchBox.contains(event.target);
        var clickedOnSearchIcon = event.target.closest('#ofstsearchIcon') || event.target.closest('#searchIcon');
        
        // If the click is outside both the search boxes and search icons, hide them
        if (!clickedInsideSearchBox && !clickedOnSearchIcon) {
            ofstsearchBox.classList.add('d-none');
            searchBox.classList.add('d-none');
        }
    });


});
