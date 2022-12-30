function conDrop() {
    document.getElementById("conDrop").classList.toggle("show");
}
function removeDrop() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
        var openDrop = dropdowns[i];
        if (openDrop.classList.contains("show")) {
            openDrop.classList.remove("show");
        }
    }
    
}
