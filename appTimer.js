// import { diffTimes } from "./diffTimes.js"

const appTimer = document.getElementById('appTtimer')
console.log('timer');

let time = document.querySelector('#time');
let buttonStart = document.querySelector('#button-start');
let buttonStop = document.querySelector('#button-stop');

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);

let id = null;
let notification = new Audio('notification.mp3');

function start() {
   id = setInterval(function () {
      time.innerHTML = Number(time.innerHTML) + 1;
   }, 1000);
   
   this.disabled = true;
   buttonStop.disabled = false;
}

function stop() {
   clearInterval(id);
   notification.play();

   this.disabled = true;
   buttonStart.disabled = false;
}
