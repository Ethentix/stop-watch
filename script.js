let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
  timer = setInterval(incrementTimer, 10);
  document.getElementById("start-btn").disabled = true;
}

function incrementTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById("hours").textContent = padTime(hours);
  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
  document.getElementById("milliseconds").textContent = padTime(milliseconds);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function pauseTimer() {
  clearInterval(timer);
  document.getElementById("start-btn").disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimerDisplay();
  document.getElementById("start-btn").disabled = false;
}
