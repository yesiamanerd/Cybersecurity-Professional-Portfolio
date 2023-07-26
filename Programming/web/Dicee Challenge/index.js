
function getDiceImage(diceNumber) {
    return "images/dice" + diceNumber + ".png";
}

function getRandomIntInclusive(min, max) {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

// Roll dice 1
var randomNumber1 = getRandomIntInclusive(1, 6); //1-6
var imageForDice1 = getDiceImage(randomNumber1);


// await new Promise(r => setTimeout(r, 10));

// Roll dice 2
var randomNumber2 = getRandomIntInclusive(1, 6); //1-6
var imageForDice2 = getDiceImage(randomNumber2);


// update the title to show winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

// update the images
document.querySelector("#img1").setAttribute("src", imageForDice1);
document.querySelector("#img2").setAttribute("src", imageForDice2);