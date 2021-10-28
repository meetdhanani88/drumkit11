// Mouse Click

var no_of_drum = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_of_drum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", btnclick)
}

function btnclick() {

  var drumname = this.innerHTML;
  console.log(drumname);
  makesound(drumname);
  animation(drumname);

}

// Keybord keypress

document.addEventListener("keypress", function (event) {
  console.log(event.key);
  makesound(event.key);
  animation(event.key);
})

function makesound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 's':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'd':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'j':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'k':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'l':
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    default:
      break;
  }
}
 
function animation(key)
{
  var activebtn = document.querySelector("." + key);
  activebtn.classList.add("pressed");
  setTimeout(function(){
    activebtn.classList.remove("pressed");
    
  },100);


}