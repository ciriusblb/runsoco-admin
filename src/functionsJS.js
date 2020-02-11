var menu = document.getElementById("sidebar");
var btnMenu = document.getElementById("btn__header_menu");
function playMenu() {
    if (menu.classList.contains('sidebar__hide')) {
        console.log("hola");
        menu.classList.remove("sidebar__hide");
      } else {
          console.log("adios");
        menu.classList.add("sidebar__hide");
      }
}

btnMenu.addEventListener("click", playMenu);