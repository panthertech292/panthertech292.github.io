let navBarElements = document.getElementsByClassName("navChild");
let navToggleButton = document.getElementById("toggleMenuButton");
let windowWidth = window.innerWidth;
const maxMobileWidth = 800;


function setPage() {
    //Update the current window width.
    windowWidth = window.innerWidth;
    //Mobile Layout
    if(windowWidth < maxMobileWidth){
        hideNavBar();
    }else{ //Desktop Layout
        showNavBar();
    }
}

function showNavBar(){
    //For every node in the nav bar
    for (let i = 0; i < navBarElements.length; i++){
        navBarElements[i].style.display = "flex";
    }
}
function hideNavBar(){
    //For every node in the nav bar
    for (let i = 0; i < navBarElements.length; i++){
        navBarElements[i].style.display = "none";
    }
}
function toggleNavBar(){
    //Pick any element see if it is hidden
    if (navBarElements[1].style.display == "none"){
        //If hidden, show it.
        showNavBar();
    }else{
        //The nav bar must be visible, so hide it.
        hideNavBar();
    }
}

//Init Page
setPage();
//Event Listeners
window.addEventListener("resize", setPage);
navToggleButton.addEventListener("click", toggleNavBar);