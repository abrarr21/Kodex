function selector(id) {
    return document.getElementById(id);
}

let secondHand = selector("secHand");
let minuteHand = selector("minHand");
let hourHand = selector("hourHand");

// Tick-Tock sound (plays every second)
const tickTockSound = document.createElement("audio");
tickTockSound.src = "./assets/quartz-tick-tock.mp3";

// Clock digits
let minuteText = selector("minutes");
let secondText = selector("seconds");
let hourText = selector("hours");

// UI Time update
function updateTime() {
    let time = new Date();
    let currentHours = time.getHours() % 12;
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();

    console.log(currentHours, currentMinutes, currentSeconds);

    hourText.textContent = `${currentHours}`.padStart(2, 0);
    minuteText.textContent = `${currentMinutes}`.padStart(2, 0);
    secondText.textContent = `${currentSeconds}`.padStart(2, 0);

    let hourDegree = (360 / 12) * currentHours - 90;
    let secondDegree = (360 / 60) * currentSeconds - 90;
    let minuteDegree = (360 / 60) * currentMinutes - 90;

    hourHand.style.transform = `translateY(-50%) rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `translateY(-50%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translateY(-50%) rotate(${secondDegree}deg)`;
}

updateTime();

// setInterval(updateTime, 1000);
setInterval(() => {
    updateTime();

    // sounds every second
    tickTockSound.currentTime = 0;
    tickTockSound.play();
}, 1000);
