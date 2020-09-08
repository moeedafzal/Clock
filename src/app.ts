let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let partyTime: number;
let evening = 18;
let p_minutes: string;
let p_seconds: string;

// Getting it to show the current time on the page
let showCurrentTime = () => {
  // display the string on the webpage
  let clock = document.getElementById("clock");

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  // Set Hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  p_minutes = minutes.toString();
  if (minutes < 10) {
    p_minutes = "0" + minutes;
  }

  // Set Seconds
  p_seconds = seconds.toString();
  if (seconds < 10) {
    p_seconds = "0" + seconds;
  }
  // put together the string that displays the time
  let clockTime =
    hours + ":" + p_minutes + ":" + p_seconds + " " + meridian + "!";

  if (clock) {
    clock.innerText = clockTime;
  }
};

// Getting the clock to increment on its own and change out messades and pictures

let updateClock = () => {
  let time = new Date().getHours();
  let messageText;
  let image = "https://i.postimg.cc/T3pJ0NPS/pexels-party-time.jpg";

  let timeEventTS = document.getElementById("timeEvent");
  let clockImageTS = document.getElementById("clockImage") as HTMLImageElement;

  if (time == partyTime) {
    image = "https://i.postimg.cc/Wbb0XY3V/Party.jpg";
    messageText = "Let's Party!";
  } else if (time == wakeUpTime) {
    image = "https://i.postimg.cc/5ypLfLsD/Wake-Up.jpg";
    messageText = "Wake up!";
  } else if (time == lunchTime) {
    image = "https://i.postimg.cc/QxsfsqdY/lunch.jpg";
    messageText = "Let's have some lunch!";
  } else if (time == napTime) {
    image = "https://i.postimg.cc/8zpXdb8f/nap.jpg";
    messageText = "Sleep tight!";
  } else if (time < noon) {
    image = "https://i.postimg.cc/ht0hVBFg/morning.jpg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image = "https://i.postimg.cc/T18TZ78C/evening.jpg";
    messageText = "Good evening!";
  } else {
    image = "https://i.postimg.cc/fR5TJfXR/afternoon.jpg";
    messageText = "Good afternoon!";
  }
  console.log(messageText);
  if (timeEventTS) {
    timeEventTS.innerText = messageText;
  }
  clockImageTS.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to incremnet
let oneSecond = 1000;
setInterval(updateClock, oneSecond);

let partyButton = document.getElementById("partyTimeButton");

let partyEvent = () => {
  if (partyTime < 0) {
    partyTime = new Date().getHours();
    if (partyButton) {
      partyButton.innerText = "Party Over!";
      partyButton.style.backgroundColor = "rgb(238,24,24)";
    }
  } else {
    partyTime = -1;
    if (partyButton) {
      partyButton.innerText = "Party Time!";
      partyButton.style.backgroundColor = "#222";
    }
  }
};

if (partyButton) {
  partyButton.addEventListener("click", partyEvent);
}
partyEvent();

// Activate Wake-Up Selector
let wakeUpTimeSelector = document.getElementById(
  "wakeUpTimeSelector"
) as HTMLInputElement;

let wakeUpEvent = () => {
  wakeUpTime = +wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activate Lunch Selector
let lunchTimeSelector = document.getElementById(
  "lunchTimeSelector"
) as HTMLInputElement;

let lunchTimeEvent = () => {
  lunchTime = +lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchTimeEvent);

// Activate Nap-Time Selector
let napTimeSelector = document.getElementById(
  "napTimeSelector"
) as HTMLInputElement;

let napTimeEvent = () => {
  napTime = +napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napTimeEvent);
