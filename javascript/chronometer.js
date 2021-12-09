class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof callback === 'function') callback();
      //if (callback) callback()
    }, 1000);

    // 2e interval toutes les 10ms
    // This interval increments the milliSecondCounter every 10ms (++)
    // AND executes the printTime (callback) at every iteration --> du coup la fonction callback en haut est obsolète

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
    //return this.currentTime / 60 | 0
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  // Create a getMilliSeconds method in the Chronometer class

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).length === 2 ? String(value) : String('0' + value);
    // let result = value.toString()
    // if (result.length === 1) result = '0' + result
    // return result
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
    // --> affiche "OO:O1", "01:30", ...
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
