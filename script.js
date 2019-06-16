function showHam () {  
    var x = document.querySelector('#main-menu');
    x.classList.toggle('show');
}

function showSub1() {
  var y = document.querySelector('#sub-menu-1');
  y.classList.toggle('show1');
}


//Old Functions (problem with the double click in the beginning)
// function hamBurger() {
//   const mainMenu = document.getElementById("main-menu");

//   if (mainMenu.style.display === "none") {
//     mainMenu.style.display = "block";
//   } else {
//     mainMenu.style.display = "none";
//   }
// }

// function showSub1() {
//   const subMenu1 = document.getElementById("sub-menu-1");

//   if (subMenu1.style.display === "none") {
//     subMenu1.style.display = "block";
//   } else {
//     subMenu1.style.display = "none";
//   }
// }