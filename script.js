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


const input = document.getElementById("input"); 
const output = document.getElementById("output"); 
const knap = document.getElementById("knap");

const liste = [];
let vistListe = "";

knap.addEventListener("click", tilfoejTilListe);

function tilfoejTilListe(){
let nytInput = input.value;
liste.push(nytInput);
vistListe = vistListe + "<li>" + nytInput + "</li>"; output.innerHTML = vistListe;
}




