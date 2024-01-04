function initPage() {
    //Mobile Layout
    //Get all the divs we want to hide
    let elementsToHide = document.getElementsByClassName("navChild");
    //For every div
    for (let i = 0; i < elementsToHide.length; i++){
        elementsToHide[i].style.display = "none";
    }
    
    //elementsToHide.childNodes.style.display = "none";

    //Desktop Layout
}






initPage();