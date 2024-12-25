const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const box = document.querySelector(".box");
const btn = document.querySelector(".btn");
const number = document.querySelector(".number-box");
const dHour = document.querySelector(".d-hour");
const dMin = document.querySelector(".d-min");
const dSec = document.querySelector(".d-sec");
const digiClock = document.querySelector(".digital-clock");

function updateClock() {
  const d = new Date();

  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  // console.log(hr, min, sec);

  const hrRotation = 30 * hr + min / 2;
  const minRotation = 6 * min;
  const secRotation = 6 * sec;

  // console.log(hrRotation, minRotation, secRotation);

  hourElement.style.transform = `rotate(${hrRotation}deg)`;
  minuteElement.style.transform = `rotate(${minRotation}deg)`;
  secondElement.style.transform = `rotate(${secRotation}deg)`;
}

updateClock();

btn.addEventListener("click", () => {
  if (
    box.style.backgroundColor === "black" ||
    number.style.color === "#d0ebff"
  ) {
    box.style.backgroundColor = "#e9ecef";
    number.style.color = "black";
    btn.style.color = "black";
    digiClock.style.color = "black";
  } else {
    box.style.backgroundColor = "black";
    number.style.color = "white";
    btn.style.color = "white";
    digiClock.style.color = "white";
  }
});

function updateDigitalClock() {
  const dNew = new Date();

  const hr = dNew.getHours();
  const min = dNew.getMinutes();
  const sec = dNew.getSeconds();

  dHour.innerHTML = hr;
  dMin.innerHTML = min;
  dSec.innerHTML = sec;
}

updateDigitalClock();

function updateAnalogClockAndDigitalClock() {
  updateClock();
  updateDigitalClock();
}

setInterval(updateAnalogClockAndDigitalClock, 1000);
