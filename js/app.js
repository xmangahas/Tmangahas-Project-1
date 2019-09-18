//console.log("testing 123");

function randomNum () {
    let num = Math.floor((Math.random() * 4) + 1)  // generate a random number 1-4
    return num;
}
//console.log(randomNum());

let computerPattern = []; // computer's patter
var userPattern = []; // user's input
let counter; // number of lights

const board = document.querySelector(".board");
// console.log(board);
const topLeft = document.querySelector("#quarterCircleTopLeft");
// console.log(topLeft);
const topRight = document.querySelector("#quarterCircleTopRight");
const bottomLeft = document.querySelector("#quarterCircleBottomLeft");
const bottomRight = document.querySelector("#quarterCircleBottomRight");

const instructButton = document.querySelector("#instruction");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const submitButton = document.querySelector("#submit");

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

submitButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    checkUser();

});

function playGame () {
    counter = 1;
    console.log("user check top: " + userPattern)
    // for loop until counter
    // generate pattern
    // user input
    // check user input
    
    // for (let i = 0; i < counter; i++) {

        let holder = randomNum();
        computerPattern.push(holder);
        // computerPattern = [1,2,1,2];
        console.log("computer: " + computerPattern);

        // computer flashes lights, code from https://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/
        for (let i = 0; i < computerPattern.length; i++) {
            (function (i) {
                setTimeout (function () {
                    flashColor(computerPattern[i]);
                }, 1500*i);
            })(i);
        };
        
        
        board.addEventListener("click", function (evt) {
            evt.preventDefault();
            console.log(evt);
            if(evt.target.id === topLeft.id) {
                userPattern.push(1);
                flashGreen();
                console.log("user check click: " + userPattern);
                
                // if(checkUser(computerPattern,userPattern)) {
                //     counter++;                 
                //     userPattern = [];                   
                //     console.log("count: " + counter);

                // } else {
                //     counter = 0;
                // }
            } else if(evt.target.id === topRight.id) {
                userPattern.push(2);
                flashRed();
                console.log("user check click: " + userPattern);
                
                // if(checkUser(computerPattern,userPattern)) {
                //     counter++;
                    
                //     userPattern = [];
                    
                //     console.log("count: " + counter);
                // } else {
                //     counter = 0;
                // }
            
            } else if(evt.target.id === bottomLeft.id) {
                userPattern.push(3);
                flashYellow();
                console.log("user check click: " + userPattern);
                // if(checkUser(computerPattern,userPattern)) {
                //     counter++;
                    
                //     userPattern = [];
                    
                //     console.log("count: " + counter);
                // } else {
                //     counter = 0;
                // }
            } else if(evt.target.id === bottomRight.id) {
                userPattern.push(4);
                flashBlue();
                console.log("user check click: " + userPattern);
                // if(checkUser(computerPattern,userPattern)) {
                //     counter++;
                    
                //     userPattern = [];
                    
                //     console.log("count: " + counter);
                // } else {
                //     counter = 0;
                // }
            }
        });
        
        // if(checkUser(computerPattern,userPattern)) {
        //     counter++;                 
        //     userPattern = [];                   
        //     console.log("count: " + counter);

        // } else {
        //     counter = 0;
        // }
       
    // }
}

let testArr1 = [1,2,3];
let testArr2 = [1,2,4];
if(JSON.stringify(testArr1) === JSON.stringify(testArr2)) {
    console.log("= it works")
} else {
    console.log("!= works")
}

function checkUser () {
    if(JSON.stringify(computerPattern) === JSON.stringify(userPattern)) { // code from GeeksforGeeks
        counter++;
        userPattern = [];
        console.log("user check submit: " + userPattern);
        console.log("counter: " + counter)
        playGame();
        
    } else {
        userPattern = [];
        computerPattern = [];
        console.log["doesn't match"]
    }
    
}





function flashColor (num) {
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

// showColor(4);

// idea from https://jsfiddle.net/dwz1ac50/
function flashGreen () {
    topLeft.style.backgroundColor = "lightgreen";
    setTimeout(function () {
        topLeft.style.backgroundColor = "darkgreen";
    }, 500);
}

function flashRed () {
    topRight.style.backgroundColor = "#FD0E35";
    setTimeout(function () {
        topRight.style.backgroundColor = "darkred";
    }, 500);
}

function flashYellow () {
    bottomLeft.style.backgroundColor = "yellow";
    setTimeout(function () {
        bottomLeft.style.backgroundColor = "#FFAA1D";
    }, 500);
}

function flashBlue () {
    bottomRight.style.backgroundColor = "#76D7EA";
    setTimeout(function () {
        bottomRight.style.backgroundColor = "darkblue";
    }, 500);
}



// topLeft.addEventListener("click", function (evt) {
//     userPattern.push(1);
//     // topLeft.classList.toggle("flashGreen");
//     // evt.path[0].classList.toggle("flashGreen");
//     // topLeft.style.backgroundColor = "lightgreen";
//     flashGreen();
//     console.log(userPattern);
// });

// topRight.addEventListener("click", function (evt) {
//     userPattern.push(2);
//     flashRed();
//     console.log(userPattern);
// });

// bottomLeft.addEventListener("click", function (evt) {
//     userPattern.push(3);
//     flashYellow();
//     console.log(userPattern);
// });

// bottomRight.addEventListener("click", function (evt) {
//     userPattern.push(4);
//     flashBlue();
//     console.log(userPattern);
// });