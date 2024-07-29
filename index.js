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
