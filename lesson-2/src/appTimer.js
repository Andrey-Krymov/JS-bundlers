const appTimer = document.getElementById('appTtimer');

let time = document.getElementById('time');
let counter = document.getElementById('counter');
let btnStart = document.getElementById('button-start');
let btnStop = document.getElementById('button-stop');
// let notification = Howler({ src: '../src/notification.mp3' })

function calcTime() {
   let timeInterval = time.value * 60;
   let minutes = Math.floor(timeInterval / 60);
   let seconds = timeInterval % 60;
   if (timeInterval <= 0) {
      clearInterval(calcTime)
      // notification.play()
   } else {
      seconds = seconds < 10 ? "0" + seconds : seconds;
      counter.innerHTML = `${minutes}:${seconds}`;
   }
   timeInterval--
}

btnStart.addEventListener('click', function () {
   setInterval(calcTime(), 1000);

   this.disabled = true;
   btnStop.disabled = false;
});

btnStop.addEventListener('click', function () {
   clearInterval(calcTime);

   this.disabled = true;
   btnStart.disabled = false;
})
