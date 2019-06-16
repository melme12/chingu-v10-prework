function showHam () {  
    var x = document.querySelector('#main-menu');
    x.classList.toggle('show');
}

function showSub1() {
  var y = document.querySelector('#sub-menu-1');
  var toggleBtn = document.querySelector('#sub-menu-toggle-1');
  
  y.classList.toggle('show1');
  
  var showState = "assets/icons/iconmonstr-plus-2-24.png";
  
  if ( showState == "assets/icons/iconmonstr-plus-2-24.png" ) {
    document.images["showSub1img"].src = "assets/icons/iconmonstr-plus-2-24.png";
    showState  = "earth.jpg";
  } else {
    document.images["showSub1img"].src = "assets/icons/iconmonstr-x-mark-2-24.png";
    showState  = "assets/icons/iconmonstr-plus-2-24.png";
  }
}
