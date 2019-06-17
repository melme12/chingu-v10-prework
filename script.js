// Show Menu with click on hamburger
function showHam() {  
    var x = document.querySelector('#main-menu');
    x.classList.toggle('show');
}

// Show submenu with click on plus icon
function showSub1() {
  var y = document.querySelector('#sub-menu-1');
  y.classList.toggle('show1');
}

// Change plus icon to cross icon when clicked
var image_tracker = 'plus';
function change() {
  var image = document.getElementById('showSub1img');
  if (image_tracker == 'plus') {
    image.src = 'assets/icons/iconmonstr-x-mark-2-24.png';
    image_tracker = 'cross';
    document.getElementById('blue-grey-li').style.background = "#dfe0e6";
    document.getElementById('blue-li-a').style.color = "#282f54";
    } else {
      image.src = 'assets/icons/iconmonstr-plus-2-24.png';
      image_tracker = 'plus';
      document.getElementById('blue-grey-li').style.background = "#282f54";
     document.getElementById('blue-li-a').style.color = "#ffffff";
    }
  }

  // Show Share box
  function showShareIcons() {  
    var a = document.querySelector('#header-social-nav');
    a.classList.toggle('showShareItems');
    document.getElementById('share-link').style.background = "black";
    document.getElementById('share-link').style.color = "white";
}

// Style Share box
function styleBlackSocialBox() {
  if (document.getElementById('header-social-nav').style.display == "block") {
    document.getElementById('header-social-nav').style.display = "inline-block";
    document.getElementById('share-link').style.background = "black";
    document.getElementById('share-link').style.color = "white";
  } else {
    document.getElementById('share-link').style.background = "#f1f1f1";
    document.getElementById('share-link').style.color = "#0c4ab5";
  }
}


    
  // } else {
  //   document.getElementById('header-social-nav').style.display = "none";
  //   document.getElementById('share-link').style.background = "white";
  //   document.getElementById('share-link').style.color = "#0c4ab5";