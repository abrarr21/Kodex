var musicContainer = document.querySelector("#music-container");
var audio = new Audio();
var play = document.querySelector(".play");
var backward = document.querySelector(".backward");
var forward = document.querySelector(".forward");
var skipBack = document.querySelector(".skip-backward");
var skipForward = document.querySelector(".skip-forward");
var image = document.querySelector(".image-container img");
var title = document.querySelector(".image-container h3");
var progress = document.querySelector(".progress");

const arr = [
    {
        song: "./assets/music/Rakhlo Tum Chupaake Arpit Bala (pagalall.com).mp3",
        img: "./assets/img/arpit.jpeg",
        songName: "Rakhlo Tum Chupaake",
    },
    {
        song: "./assets/music/Blinding Lights (PenduJatt.Com.Se).mp3",
        img: "./assets/img/weeknd.webp",
        songName: "Blinding Lights",
    },
    {
        song: "./assets/music/Harry_Styles_-_Sign_Of_The_Times_(mp3.pm).mp3",
        img: "./assets/img/harry.jpg",
        songName: "Sign of the time",
    },
    {
        song: "./assets/music/Summertime_Sadness (1).mp3",
        img: "./assets/img/lana.jpeg",
        songName: "Summertime Sadness",
    },
];

let currentIndex = 0;
audio.src = arr[currentIndex].song;
image.src = arr[currentIndex].img;
title.textContent = arr[currentIndex].songName;

play.addEventListener("click", function () {
    if (audio.paused) {
        play.innerHTML = `<i class="ri-pause-large-line"></i>`;
        audio.play();
        updateControls();
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        audio.pause();
    }
});

backward.addEventListener("click", function () {
    if (currentIndex === 0) return;

    currentIndex--;
    audio.src = arr[currentIndex].song;
    image.src = arr[currentIndex].img;
    title.textContent = arr[currentIndex].songName;
    audio.play();
    play.innerHTML = `<i class="ri-pause-large-line"></i>`;

    updateControls();
});

forward.addEventListener("click", function () {
    if (currentIndex === arr.length - 1) return;

    currentIndex++;
    audio.src = arr[currentIndex].song;
    image.src = arr[currentIndex].img;
    title.textContent = arr[currentIndex].songName;
    audio.play();
    play.innerHTML = `<i class="ri-pause-large-line"></i>`;

    updateControls();
});

function updateControls() {
    if (currentIndex === 0) {
        backward.classList.add("disabled");
    } else {
        backward.classList.remove("disabled");
    }

    if (currentIndex === arr.length - 1) {
        forward.classList.add("disabled");
    } else {
        forward.classList.remove("disabled");
    }
}

audio.addEventListener("loadedmetadata", function () {
    progress.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", function () {
    progress.value = Math.floor(audio.currentTime);
});
progress.addEventListener("input", function () {
    audio.currentTime = progress.value;
});

skipBack.addEventListener("click", function () {
    audio.currentTime -= 10;
});
skipForward.addEventListener("click", function () {
    audio.currentTime += 10;
});
