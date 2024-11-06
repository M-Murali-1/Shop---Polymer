let isMenuOpen = false;

function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle('active');
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
function diffAddress() {
    const address = document.querySelector(".hidden-items");
    address.classList.toggle('active');
}