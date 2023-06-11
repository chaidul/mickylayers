(function () {
    var navButton = document.querySelector("#toggle");
    var navUl = document.querySelector(".nav-ul");

    function toggleMobileMenu() {
        // alert(123);
        navUl.classList.toggle("hide-ul");
    }

    navButton.onclick = toggleMobileMenu;
})();
