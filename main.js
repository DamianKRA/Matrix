const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 4;

canvas.width = canvasWidth;
canvas.height = canvasHeight;
let fontSize = canvasHeight / 40;

let tabOfChains = [];

function randomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function init() {
    for (let i = 0; i < Math.floor(canvasWidth / fontSize); i++) {
        tabOfChains.push(new Chain(i * fontSize, randomNumber(0, canvasHeight)));
        tabOfChains[i].init();
    }
}

function animation() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i in tabOfChains) {
        tabOfChains[i].update();
    }
}

//----------------------------------------------
//GŁÓWNY PROGRAM--------------------------------
//----------------------------------------------
init();
setInterval(animation, 1000 / 10);

window.onresize = () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight - 5;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
};