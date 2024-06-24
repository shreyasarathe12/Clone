document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    var mobileNav = document.getElementById('mobile-nav');

    menuIcon.addEventListener('click', function() {
        mobileNav.style.transform = 'translateX(0)';
    });

    closeIcon.addEventListener('click', function() {
        mobileNav.style.transform = 'translateX(-100%)';
    });

    window.addEventListener('click', function(event) {
        if (event.target == mobileNav) {
            mobileNav.style.transform = 'translateX(-100%)';
        }
    });
});
