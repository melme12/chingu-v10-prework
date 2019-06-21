// Show Menu with click on hamburger
function showHam() {  
    var x = document.querySelector('#main-menu');
    x.classList.toggle('show');
}

// Show submenu with click on plus icon
function showSub1(subMenuId, showClass) {
  var sMId = "#" + subMenuId;
  var y = document.querySelector(sMId);
  y.classList.toggle(showClass);
}

// Change plus icon to cross icon when clicked
var image_tracker = 'plus';
function change(liId, showSubImg, blueLiA) {
  var image = document.getElementById(showSubImg);
  if (image_tracker == 'plus') {
    image.src = 'assets/icons/iconmonstr-x-mark-2-24.png';
    image_tracker = 'cross';
    document.getElementById(liId).style.background = "#dfe0e6";
    document.getElementById(blueLiA).style.color = "#282f54";
    } else {
      image.src = 'assets/icons/iconmonstr-plus-2-24.png';
      image_tracker = 'plus';
      document.getElementById(liId).style.background = "#282f54";
     document.getElementById(blueLiA).style.color = "#ffffff";
    }
  }
//Look after the image tracker, the icons change too often.



// Show Share box
function showShareIcons() {  
  var a = document.querySelector('#header-social-nav');
  a.classList.toggle('showShareItems');
  document.getElementById('share-link').style.background = "black";
  document.getElementById('share-link').style.color = "white";
}

// Style Share box
var color_tracker = '#f1f1f1';
function styleBlackSocialBox() {
  if (color_tracker == '#f1f1f1') {
    document.getElementById('share-link').style.background = "black";
    color_tracker = 'black';
    document.getElementById('share-link').style.color = "white";
    } else {
      document.getElementById('share-link').style.background = "#f1f1f1";
      color_tracker = '#f1f1f1';
      document.getElementById('share-link').style.color = "#0c4ab5";
    }
}

// Sub Menus Desktop Version
function showSub(subMenuId) {
  document.getElementById(subMenuId).style.display = "block";
}

function hideSub(subMenuId) {
  document.getElementById(subMenuId).style.display = "none";
}

// Sub sub Menus Desktop Version (countries)
function showSubCountries(subSubMenuId) {
  document.getElementById(subSubMenuId).style.display = "block";
}

function hideSubCountries(subSubMenuId) {
  document.getElementById(subSubMenuId).style.display = "none";
}