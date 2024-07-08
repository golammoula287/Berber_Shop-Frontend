let menueBtn = document.getElementById("manuBtn")
let sideNav = document.getElementById("sideNav")
let manue = document.getElementById("menu")

sideNav.style.right = "-250px"

menueBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "Image/close.png"
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "Image/menu.png"
    }
}
