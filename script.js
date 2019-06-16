

function hamBurger() {
  const mainMenu = document.getElementById("main-menu");

  if (mainMenu.style.display === "none") {
    mainMenu.style.display = "block";
  } else {
    mainMenu.style.display = "none";
  }
}

function showSub1() {
  const subMenu1 = document.getElementById("sub-menu-1");

  if (subMenu1.style.display === "none") {
    subMenu1.style.display = "block";
  } else {
    subMenu1.style.display = "none";
  }
}