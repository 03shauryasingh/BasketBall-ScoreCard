// homescore js is here

let homescore = document.getElementById("home-score");
let homecount = 0;
function home1() {
  homecount += 1;
  homescore.textContent = homecount;
}

function home2() {
  homecount += 2;
  homescore.textContent = homecount;
}

function home4() {
  homecount += 4;
  homescore.textContent = homecount;
}

function home6() {
  homecount += 6;
  homescore.textContent = homecount;
}

// guest score js is here

let guestscore = document.getElementById("guest-score");
let guestcount = 0;

function guest1() {
  guestcount += 1;
  guestscore.textContent = guestcount;
}

function guest2() {
  guestcount += 2;
  guestscore.textContent = guestcount;
}

function guest4() {
  guestcount += 4;
  guestscore.textContent = guestcount;
}

function guest6() {
  guestcount += 6;
  guestscore.textContent = guestcount;
}

// // new game js is here

function newgamebtn() {
  homescore.textContent = 0;
  homecount = 0;

  guestscore.textContent = 0;
  guestcount = 0;
}

let timerInterval;
let timeLeft = 10; // Time in seconds (2 minutes)

// Timer functions
function startTimer() {
  clearInterval(timerInterval); // Clear any existing timer
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format seconds to always have two digits
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById(
      "countdownTimer"
    ).textContent = `${minutes}:${seconds}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      alert("Time is up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval); // Stop the timer
  timeLeft = 120; // Reset time to 2 minutes
  document.getElementById("countdownTimer").textContent = "02:00"; // Reset timer display
}

document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("end-timer").addEventListener("click", stopTimer);
