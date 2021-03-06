const chronometer = new Chronometer();

// Accessing Chronometer class and its methods by 

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni'); 
let splits = document.getElementById('splits');

function printTime() {
  // chronometer.getMinutes();
  let displayedTime = `${printMinutes()} ${printSeconds()} ${printMilliseconds()}`
}


function printMinutes() {
  let fetchMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
// give left span container the seconds
  minDec.innerHTML = fetchMinutes[0]
  minUni.innerHTML = fetchMinutes[1]
}

function printSeconds() {
  let fetchSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
// give right span container the seconds
  secDec.innerHTML = fetchSeconds[0]
  secUni.innerHTML = fetchSeconds[1]
}

// ==> BONUS
function printMilliseconds() {
  let fetchMilliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
// give bottom span container the seconds
  milDec.innerHTML = fetchMilliseconds[0]
  milUni.innerHTML = fetchMilliseconds[1]
}


function printSplit() {
  let fetchSplit = chronometer.splitClick();
  const newLiElement = document.createElement("li");
  splits.appendChild(newLiElement).innerHTML = fetchSplit;
  // console.log(fetchSplit)


  // step 1: access the <lo>
  // step 2: fetchSplit = document.appednchild
  // create an <li> per

}

function clearSplits() {
  // let removeSplits = chronometer.resetClick
}


/* Chronometer Functionalities  */
// Injecting text into buttons

function setStopBtn() {
  btnLeft.innerHTML=`STOP`;
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRight.innerHTML=`SPLIT`;
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerHTML=`START`;
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRight.innerHTML=`RESET`;
  btnRight.setAttribute('class', 'btn reset');
}

/* Start/Stop Button */
// Step 1.1: user clicks on 'Start', then printTime needs to start
// Step 1.2: user clicks on 'Start', then Start -> Stop & Reset -> Split
// Step 2.1: user clicks on 'Stop', then time count needs to stop, invoking the stopClick
// Step 2.2: user clicks on 'Stop', then Stop -> Start & Split -> Reset
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === `START`) { // Here struggled a lot with the backticks / or double quotes
    chronometer.startClick(printTime); // Works as expected
    setStopBtn(); // Works as expected
    setSplitBtn(); // Works as expected
  } else {
    setStartBtn(); // Works as expected
    setResetBtn(); // Works as expected
    chronometer.stopClick(); // Works as expected
  }
});

// Reset/Split Button
// Step 1: if user clicks on 'Reset', then time needs to return to 0.
// Step 2: if user clicks on '
btnRight.addEventListener('click', () => { 
  if (btnRight.innerHTML===`RESET`) {
    chronometer.resetClick();
    console.log(printTime())
  } else {
    printSplit();
    chronometer.splitClick();
  }
});
