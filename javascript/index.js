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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.textContent = minutes[0]
  minUniElement.textContent = minutes[1]
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = seconds[0]
  secUniElement.textContent = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  // Get the information the same way that you did with printseconds and printminutes
}

function printSplit() {
  // ... your code goes here
  // Create a "li" element and assign it to a variable
  const timeSplit = document.createElement("li");
  // Then set the content of the "li" element to the time on the watch
  timeSplit.textContent = chronometer.split();
  // Then append the "li" elemen to the ordered list (splitsElement)
  splitsElement.appendChild(timeSplit);
}

function clearSplits() {
  // ... your code goes here
  // Remove all "li" elements from the "ol" element (or make the "ol" element inner content empty)
  splitsElement.textContent = ""
  // Use a method to reset the chronometer "internally"
  chronometer.reset()
  // Use a function to reset the chronometer on the front-end (réinitialiser l'affichage)
  printTime()
}

//BTN START
function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop")
  btnLeftElement.textContent = "STOP"
  chronometer.start(printTime)
}

//BTN RESET
function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.remove("reset")
  btnRightElement.classList.add("split")
  btnRightElement.textContent = "SPLIT"
}

//BTN STOP
function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("stop")
  btnLeftElement.classList.add("start")
  btnLeftElement.textContent = "START"
  chronometer.stop()
}

//BTN SPLIT
function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove("split")
  btnRightElement.classList.add("reset")
  btnRightElement.textContent = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
  }
  else if (btnLeftElement.classList.contains('stop')) {
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) printSplit()
  if (btnRightElement.classList.contains('reset')) clearSplits()
});
