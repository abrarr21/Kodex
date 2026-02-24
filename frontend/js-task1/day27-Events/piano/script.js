var body = document.body;
var audio = new Audio();

var chores = [
    "https://www.musicca.com/files/audio/tools/piano/31.mp3",
    "https://www.musicca.com/files/audio/tools/piano/32.mp3",
    "https://www.musicca.com/files/audio/tools/piano/33.mp3",
    "https://www.musicca.com/files/audio/tools/piano/34.mp3",
    "https://www.musicca.com/files/audio/tools/piano/35.mp3",
    "https://www.musicca.com/files/audio/tools/piano/36.mp3",
    "https://www.musicca.com/files/audio/tools/piano/37.mp3",
    "https://www.musicca.com/files/audio/tools/piano/38.mp3",
    "https://www.musicca.com/files/audio/tools/piano/39.mp3",
    "https://www.musicca.com/files/audio/tools/piano/40.mp3",
];

const keyMappings = {
    c: { idx: 0, id: "key1" },
    d: { idx: 1, id: "key2" },
    e: { idx: 2, id: "key3" },
    f: { idx: 3, id: "key4" },
    g: { idx: 4, id: "key5" },
    a: { idx: 5, id: "key6" },
    b: { idx: 6, id: "key7" },
    j: { idx: 7, id: "key8" },
    k: { idx: 8, id: "key9" },
    l: { idx: 9, id: "key10" },
};

body.addEventListener("keydown", function (dets) {
    var key = dets.key.toLowerCase();
    var keyData = keyMappings[key];

    if (keyMappings[key] !== undefined) {
        audio.src = chores[keyData.idx];
        audio.currentTime = 0;
        audio.play();

        document.getElementById(keyData.id).classList.add("active");
    }
});

body.addEventListener("keyup", function (dets) {
    var key = dets.key.toLowerCase();

    if (keyMappings[key]) {
        document.getElementById(keyMappings[key].id).classList.remove("active");
    }
});

// my original approach (repetitive code)
// if (dets.key.toLowerCase() === "c") {
//     audio.src = chores[0];
//     audio.currentTime = 0;
//     audio.play();
// }
// if (dets.key.toLowerCase() === "d") {
//     audio.src = chores[1];
//     audio.currentTime = 0;
//     audio.play();
// }
// if (dets.key.toLowerCase() === "e") {
//     audio.src = chores[2];
//     audio.currentTime = 0;
//     audio.play();
// }
// if (dets.key.toLowerCase() === "f") {
//     audio.src = chores[3];
//     audio.currentTime = 0;
//     audio.play();
// }
// if (dets.key.toLowerCase() === "g") {
//     audio.src = chores[4];
//     audio.currentTime = 0;
//     audio.play();
// }
// if (dets.key.toLowerCase() === "a") {
//     audio.src = chores[5];
//     audio.currentTime = 0;
//     audio.play();
// }
// if (dets.key.toLowerCase() === "b") {
//     audio.src = chores[6];
//     audio.currentTime = 0;
//     audio.play();
// }
