function showHam () {  
    var x = document.querySelector('#main-menu');
    x.classList.toggle('show');
}

function showSub1() {
  var y = document.querySelector('#sub-menu-1');
  y.classList.toggle('show1');
}


var image_tracker = 'plus';

function change(){
  var image = document.getElementById('showSub1img');
  if (image_tracker == 'plus'){
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