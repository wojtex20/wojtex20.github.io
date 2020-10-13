//flag for keydown once
fired = false;
//keyboard support
document.addEventListener("keydown", function (event) {
    if (!fired) {
        fired = true
        let keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
        let key = event.key.toUpperCase();
        if (keys.includes(key)) { playSound(key) };
    }
});
//remove flag
document.addEventListener("keyup", function (event) {
    fired = false;
});
//Click trigger on and off
var kbd = document.querySelectorAll(".btn");
var drawBorderOnClick = function (e) {
    playSound(e.currentTarget.id);
}
var clearBorder = function (e) {
    e.currentTarget.style.border = "";
}
//Mouse and touch support
Array.from(kbd).forEach(function (kbd) {
    kbd.addEventListener('mousedown', drawBorderOnClick);
    kbd.addEventListener('mouseup', clearBorder);
});

function playSound(event) {
    let audio = new Audio(`SoundEffects/${event}.mp3`).play();
    var el = document.getElementById(event).style.border = "3px solid #4fb7ec";
    setTimeout(function () { document.getElementById(event).style.border = "1px black solid" }, 100);
}

