// Part 1 - Toggle on-off light display by pressing button


let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');
let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');



var toggleStop = function(){
  stopLight.classList.toggle("stop")
}
debugger;
var toggleSlow = function(){
  console.log('slow')
  slowLight.classList.toggle("slow")
}

var toggleGo = function(){
  goLight.classList.toggle("go")
}

stopButton.addEventListener('click', toggleStop);
slowButton.addEventListener('click', toggleSlow);
goButton.addEventListener('click', toggleGo);

