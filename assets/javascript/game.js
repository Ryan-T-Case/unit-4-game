//Game cannot run until document is ready
$(document).ready(function () {
  
    //Global variables and objects

    //There are four emeralds as objects (red, blue, yellow, green)
    var redEmerald = {value: 0};
    console.log("Red: " + redEmerald.value);
    var blueEmerald = {value: 0};
    console.log("Blue: " + blueEmerald.value);
    var yellowEmerald = {value: 0};
    console.log("Yellow: " + yellowEmerald.value);
    var greenEmerald = {value: 0};
    console.log("Green: " + greenEmerald.value);

    //Random target score number is displayed at start of game
    //Target score number is between 19-120
    var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#targetScoreCounter").text(targetScore);

    //There is a counter for player total score
    var scoreCounter = 0;
    $("#totalScoreCounter").text(scoreCounter);

    //There is a counter for wins and losses
    var wins = 0;
    var losses = 0;
    $("#winsCounter").text(wins);
    $("#lossesCounter").text(losses);

    //Hide Win and Loss Message Until Needed
    $("#youWin").hide();
    $("#youLose").hide();

    //Display regular Sonic Image and Hide Super Sonic and Dr Eggman Images
    $("#sonic-running").show();
    $("#super-sonic-transform").hide();
    $("#dr-eggman-laugh").hide();

    //Audio
    document.getElementById("gameAudio").loop = true;

    //Functions

    //Assigns each emerald with a random hidden value btw 1-12
    var assignRandomValue = function (obj) {
        obj.value = Math.floor(Math.random() * 12) + 1;
    }
    assignRandomValue(redEmerald);
    console.log("Red Random: " + redEmerald.value);
    assignRandomValue(blueEmerald);
    console.log("Blue Random: " + blueEmerald.value);
    assignRandomValue(yellowEmerald);
    console.log("Yellow Random: " + yellowEmerald.value);
    assignRandomValue(greenEmerald);
    console.log("Green Random: " + greenEmerald.value);

    //Determines logic for wins and losses
    var gameLogic = function () {
        //Logic for Wins
        if (scoreCounter === targetScore) {
            //Displays win message
            $("#youLose").hide();
            $("#youWin").show();
            //Transform into Super Sonic
            $("#sonic-running").hide();
            $("#dr-eggman-laugh").hide();
            $("#super-sonic-transform").show();
            wins++;
            $("#winsCounter").text(wins);
            //Reset Total Score to Zero
            scoreCounter = 0;
            $("#totalScoreCounter").text(scoreCounter);
            //Reset Target Score to new random value
            targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
            $("#targetScoreCounter").text(targetScore);
            //Calls functions to reset random value of emeralds
            assignRandomValue(redEmerald);
            console.log("Red Random: " + redEmerald.value);
            assignRandomValue(blueEmerald);
            console.log("Blue Random: " + blueEmerald.value);
            assignRandomValue(yellowEmerald);
            console.log("Yellow Random: " + yellowEmerald.value);
            assignRandomValue(greenEmerald);
            console.log("Green Random: " + greenEmerald.value);
        }
        //Logic for Losses
        else if (scoreCounter > targetScore) {
            //Displays lose message
            $("#youWin").hide();
            $("#youLose").show();
            //Displays Game Over Image
            $("#sonic-running").hide();
            $("#super-sonic-transform").hide();
            $("#dr-eggman-laugh").show();
            //Prevent Super Sonic from Showing on Losses
            losses++;
            $("#lossesCounter").text(losses);
            //Reset Total Score to Zero
            scoreCounter = 0;
            $("#totalScoreCounter").text(scoreCounter);
            //Reset Target Score to new random value
            targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
            $("#targetScoreCounter").text(targetScore);
            //Calls functions to reset random value of emeralds
            assignRandomValue(redEmerald);
            console.log("Red Random: " + redEmerald.value);
            assignRandomValue(blueEmerald);
            console.log("Blue Random: " + blueEmerald.value);
            assignRandomValue(yellowEmerald);
            console.log("Yellow Random: " + yellowEmerald.value);
            assignRandomValue(greenEmerald);
            console.log("Green Random: " + greenEmerald.value);
        }
        //Logic for when neither condition is met
        else {
            //Hide these messages if no result is acheived yet
            $("#youWin").hide();
            $("#youLose").hide();
            //Hide Super Sonic and Dr Eggman under any other conditions
            $("#sonic-running").show();
            $("#super-sonic-transform").hide();
            $("#dr-eggman-laugh").hide();
        }
    }

    //On Click Events

    //Each of these events increases total score by hidden value of emerald on click
    //Ring Sound Effect Variable to be Referenced in Click Events
    var ring = $("#ring-sound");
    //Red Chaos Emerald Click Event
    $("#redEmeraldButton").click(function () {
        ring[0].play();
        scoreCounter += redEmerald.value;
        $("#totalScoreCounter").text(scoreCounter);
        gameLogic();
    });

    //Blue Chaos Emerald Click Event
    $("#blueEmeraldButton").click(function () {
        ring[0].play();
        scoreCounter += blueEmerald.value;
        $("#totalScoreCounter").text(scoreCounter);
        gameLogic();
    });

    //Yellow Chaos Emerald Click Event
    $("#yellowEmeraldButton").click(function () {
        ring[0].play();
        scoreCounter += yellowEmerald.value;
        $("#totalScoreCounter").text(scoreCounter);
        gameLogic();
    });

    //Green Chaos Emerald Click Event
    $("#greenEmeraldButton").click(function () {
        ring[0].play();
        scoreCounter += greenEmerald.value;
        $("#totalScoreCounter").text(scoreCounter);
        gameLogic();
    });
});