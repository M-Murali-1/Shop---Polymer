let isMenuOpen = false;

function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    
    isMenuOpen = !isMenuOpen;
    mobileNav.style.display = isMenuOpen ? "flex" : "none";
    
     if (isMenuOpen) {
        document.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("click", handleOutsideClick);
    }
}

function handleOutsideClick(event) {
    const mobileNav = document.getElementById("mobileNav");
    const hamburgerIcon = document.querySelector(".nav-bar");
    document.querySelector("body").style.overflow = "hidden";
    if (!mobileNav.contains(event.target) && event.target !== hamburgerIcon) {
        toggleMenu(); 
    }
}
function goback() {
    window.history.back();
}