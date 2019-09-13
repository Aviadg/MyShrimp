
// Get the <span> element that closes the modal
var span = document.getElementById('close')[0];


//pics//

var black = document.getElementById('black_pic');
var yellow = document.getElementById('yellow_pic');
var blue = document.getElementById('blue_pic');
var green = document.getElementById('green_pic');
var white = document.getElementById('white_pic');

//models//

var m_black = document.getElementById('m_black');
var m_yellow = document.getElementById('m_yellow');
var m_blue = document.getElementById('m_blue');
var m_green = document.getElementById('m_green');
var m_white = document.getElementById('m_white');

//actions - specific//

blue.onclick = function() {
  m_blue.style.display = "block";
}

yellow.onclick = function() {
  m_yellow.style.display = "block";
}

black.onclick = function() {
  m_black.style.display = "block";
}

green.onclick = function() {
  m_green.style.display = "block";
}

white.onclick = function() {
  m_white.style.display = "block";
}

//actions - general//

/* When the user clicks on <span> (x), close the modal
span.onclick = function() { m_black.style.display = "none";}
span.onclick = function() { m_yellow.style.display = "none";} 
span.onclick = function() { m_blue.style.display = "none";} 
span.onclick = function() { m_green.style.display = "none";} 
span.onclick = function() { m_white.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/

