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

var toggleSlow = function(){
  slowLight.classList.toggle("slow")
}

var toggleGo = function(){
  goLight.classList.toggle("go")
}

stopButton.addEventListener('click', toggleStop);
slowButton.addEventListener('click', toggleSlow);
goButton.addEventListener('click', toggleGo);

// Part 2 - Log message when user's mouse enters or leaves button area

var enterLog = function(event){
  let text = event.target.innerText
  console.log(`Entered ${text} button`)
}

var exitLog = function(event){
  let text = event.target.innerText
  console.log(`Left ${text} button`)
}

stopButton.addEventListener('mouseenter', enterLog);
slowButton.addEventListener('mouseenter', enterLog);
goButton.addEventListener('mouseenter', enterLog);

stopButton.addEventListener('mouseleave', exitLog);
slowButton.addEventListener('mouseleave', exitLog);
goButton.addEventListener('mouseleave', exitLog);


// Part 3 - Log when a user clicks a button <textContent> blub on/off

var stopState = false
var slowState = false
var goState = false

var stopState = function(event) {
  stopState === false ? console.log(`${event.target.innerText} off`) : console.log(`${event.target.innerText} on`)
  stopState = !stopState;
}

var slowState = function(event) {
  slowState === false ? console.log(`${event.target.innerText} off`) : console.log(`${event.target.innerText} on`)
  slowState = !slowState;
}

var goState = function(event) {
  goState === false ? console.log(`${event.target.innerText} off`) : console.log(`${event.target.innerText} on`)
  goState = !goState;
}

stopButton.addEventListener('click', stopState);
slowButton.addEventListener('click', slowState);
goButton.addEventListener('click', goState);
