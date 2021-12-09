const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
let intervalId = null
function printTime() {
  // ... your code goes here
 // setInterval 
 intervalId = setInterval(() => {
   printMinutes();
   printSeconds()
 }, 1000);
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumbers(chronometer.getMinutes)
  // minutes = '15'
  //minutes[0] === '1'  
  minDecElement.textContent = minutes[0]


}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop")
  chronometer.start()
}

function setSplitBtn() {
  // ... your code goes here

}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("stop")
  btnLeftElement.classList.add("start")
chronometer.stop()
}

function setResetBtn() {
  // ... your code goes here

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.includes('start')) setStopBtn()
  else if (btnLeftElement.classList.includes('stop')) setStartBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

});
