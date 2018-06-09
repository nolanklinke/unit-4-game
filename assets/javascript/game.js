var wins = 0;
var losses = 0;
var userScore = 0;
var gems = ["gem1", "gem2", "gem3", "gem4"]

//function to start new game
function game() {
    $("#currentScore").text(userScore);
    
}

game();

//function to reset score to win
function newScore() {
    var computerScore = Math.floor(Math.random() * (120 - 19+ 1)) + 19;
    $("#scoreToWin").text(computerScore);
}

newScore();

//THIS WORKS!!!!
//apply random value to crystal
function randomValue1() {
    var crystalRandom = Math.floor(Math.random() * (19 - 1+ 1)) + 1;
    $("#Gem1").attr("data-crystalValue", crystalRandom);
}

randomValue1();

function randomValue2() {
    var crystalRandom = Math.floor(Math.random() * (19 - 1+ 1)) + 1;
    $("#Gem2").attr("data-crystalValue", crystalRandom);
}

randomValue2();

function randomValue3() {
    var crystalRandom = Math.floor(Math.random() * (19 - 1+ 1)) + 1;
    $("#Gem3").attr("data-crystalValue", crystalRandom);
}

randomValue3();

function randomValue4() {
    var crystalRandom = Math.floor(Math.random() * (19 - 1+ 1)) + 1;
    $("#Gem4").attr("data-crystalValue", crystalRandom);
}

randomValue4();

$("#Gem1").on("click", function() {
    var crystalValue1 = ($(this).attr("data-crystalvalue"));
    crystalValue1 = parseInt(crystalValue1);
    console.log(crystalValue1);
    $("#currentScore").text(userScore += crystalValue1);
});

$("#Gem2").on("click", function() {
    var crystalValue2 = ($(this).attr("data-crystalvalue"));
    crystalValue2 = parseInt(crystalValue2);
    console.log(crystalValue2);
    $("#currentScore").text(userScore += crystalValue2);
});

$("#Gem3").on("click", function() {
    var crystalValue3 = ($(this).attr("data-crystalvalue"));
    crystalValue3 = parseInt(crystalValue3);
    console.log(crystalValue3);
    $("#currentScore").text(userScore += crystalValue3);
});

$("#Gem4").on("click", function() {
    var crystalValue4 = ($(this).attr("data-crystalvalue"));
    crystalValue4 = parseInt(crystalValue4);
    console.log(crystalValue4);
    $("#currentScore").text(userScore += crystalValue4);
});
