let navBarElements = document.getElementsByClassName("navChild");
let windowWidth = window.innerWidth;
const maxMobileWidth = 800;


function setPage() {
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



setPage();