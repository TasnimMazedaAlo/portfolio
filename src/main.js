
let navMenuButtonOn = document.getElementById("navMenuButtonOn");
let navMenuButtonOff = document.getElementById("navMenuButtonOff");
let navContent = document.getElementById("navContent");


function showMenu() {
    navMenuButtonOn.classList.toggle("hidden");
    navMenuButtonOff.classList.toggle("hidden");
    navContent.classList.toggle("hidden")
    
}