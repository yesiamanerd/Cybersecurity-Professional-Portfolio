var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var userChosenColor;
var level = 0;
var gameTriggered = 0;


$(document).on("keypress", function (event) {
    if (gameTriggered === 0) {
        nextSequence();
        console.log(event.key + " was pressed");
        gameTriggered++;
    }
});
$(".btn").on("click", function(event){
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern = [];
    randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);

}

function checkAnswer(currentLevel) {

    console.log("userClickedPattern: " + userClickedPattern);
    console.log("gamePattern: " + gamePattern);
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            console.log("success");
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play();
}

function animatePress(currentColor) {
$("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameTriggered = 0;
}