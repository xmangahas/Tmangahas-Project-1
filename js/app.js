console.log("testing 123");

function randomNum () {
    let num = Math.floor((Math.random() * 4) + 1)  // generate a random number 1-4
    return num;
}
console.log(randomNum());

let computerPattern = []; // computer's patter
let userPattern = []; // user's input
let counter; // number of lights

const topLeft = document.querySelector("#quarterCircleTopLeft");
const topRight = document.querySelector("#quarterCircleTopRight");
const bottomLeft = document.querySelector("#quarterCircleBottomLeft");
const bottomRight = document.querySelector("#quarterCircleBottomRight");

const instructButton = document.querySelector("#instruction");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

// Press start button
// Show sequence
// User enters sequence
// If correct, go to next level and show next sequence
// If incorrect, reset game

resetButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    location.reload();
});

startButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    playGame();

});

function playGame () {

}

function showPattern (num) {
    if (num === 1) {
        flashGreen();
    } else if (num === 2) {
        flashRed();
    } else if (num === 3) {
        flashYellow();
    } else if (num === 4) {
        flashBlue();
    }
}

// showPattern(4);

// idea from https://jsfiddle.net/dwz1ac50/
function flashGreen () {
    topLeft.style.backgroundColor = "lightgreen";
    setTimeout(function () {
        topLeft.style.backgroundColor = "darkgreen";
    }, 300);
}

function flashRed () {
    topRight.style.backgroundColor = "#FD0E35";
    setTimeout(function () {
        topRight.style.backgroundColor = "darkred";
    }, 300);
}

function flashYellow () {
    bottomLeft.style.backgroundColor = "yellow";
    setTimeout(function () {
        bottomLeft.style.backgroundColor = "#FFAA1D";
    }, 300);
}

function flashBlue () {
    bottomRight.style.backgroundColor = "#76D7EA";
    setTimeout(function () {
        bottomRight.style.backgroundColor = "darkblue";
    }, 300);
}

topLeft.addEventListener("click", function (evt) {
    userPattern.push(1);
    // topLeft.classList.toggle("flashGreen");
    // evt.path[0].classList.toggle("flashGreen");
    // topLeft.style.backgroundColor = "lightgreen";
    flashGreen();
    console.log(userPattern);
});

topRight.addEventListener("click", function (evt) {
    userPattern.push(2);
    flashRed();
    console.log(userPattern);
});

bottomLeft.addEventListener("click", function (evt) {
    userPattern.push(3);
    flashYellow();
    console.log(userPattern);
});

bottomRight.addEventListener("click", function (evt) {
    userPattern.push(4);
    flashBlue();
    console.log(userPattern);
});