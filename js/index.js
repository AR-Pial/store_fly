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
});
