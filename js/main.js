/* Scripten som gör att menyn går att öppna och stänga */
function toggleMenu() {
  let menu = document.getElementById("links");
  if (menu.style.width === "0px") {
    menu.style.width = "7rem"; //Visa meny
  } else {
    menu.style.width = "0px"; //Dölj meny
  }
}
