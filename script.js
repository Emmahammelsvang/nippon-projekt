const burgermenu = document.getElementById("burgermenu");
const hiddenMenu = document.getElementById("hiddenMenu");

burgermenu.onclick = toggleMenu;
let menuVisible = false;

function toggleMenu(){
    if(menuVisible == false){
        console.log("Vis menuen!");
        menuVisible = true;
        hiddenMenu.style.opacity = "1";
        // vis hiddenMenu
    }else{
        console.log("Skjul menuen");
        menuVisible = false;
        hiddenMenu.style.opacity = "0";
        // skjul hiddenMenu
    }
}






