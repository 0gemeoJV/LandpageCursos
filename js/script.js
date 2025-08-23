const menuMobile = document.getElementById("mobile-icon");
const overlay = document.getElementById("overlay");

function showMenu(){
    menuMobile.style.display = 'flex';
    overlay.style.display = 'flex';
}

function hideMenu(){
    menuMobile.style.display = 'none';
    overlay.style.display = 'none';
}