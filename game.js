console.log("hi")
var noofcolors = 0;
var level = 1;
var isstart = 0;
var colors = ["red", "blue", "green", "yellow"]
var arr = [];
var userInput=0;
var userArr=[];

var userInput=0;



function nextSequence() {
    let rand = Math.floor(4 * Math.random());
    let randomColor = colors[rand];
    arr.push(randomColor);
    noofcolors++;
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomColor + ".mp3");
    audio.play();
    // handleUserInput();
}

// $("btn").click(function (event) {
//     var whichbtn = $(t)
// });
function gameOver(){
    var wrongaudio=new Audio("sounds/wrong.mp3");
    wrongaudio.play();
    $("h1").html("GAME OVER!! SCORE="+ score);
    $("h1").addClass("game-over");
    // isstart=0;
    // alert("Game Over! Your score is "+noofcolors+".");
}
function handleQuery(){
    for(var i=0;i<arr.length;i++){
        if(userArr[i]!=arr[i]){
            gameOver();
            return;
        }
    }
    userInput=0;
    userArr=[];
    level++;
    
    setTimeout(nextLevel(),3000);
}

function abc_red() {
    console.log("red");
    $("#red").fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
    var audio = new Audio("sounds/" + "red" + ".mp3");
    audio.play();

    userArr.push("red");
    userInput++;
    if (userInput == noofcolors) {
      handleQuery();
    }
}

function abc_green() {
    console.log("red");
    $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "green" + ".mp3");
    audio.play();
    userArr.push("green");
    userInput++;
    if (userInput == noofcolors) {
      handleQuery();
    }
}

function abc_yellow() {
    console.log("red");
    $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "yellow" + ".mp3");
    audio.play();

    userArr.push("yellow");

    userInput++;
    if(userInput==noofcolors){
        handleQuery();
    }
}

function abc_blue() {
    console.log("red");
    $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "blue" + ".mp3");
    audio.play();

    userArr.push("blue");

    userInput++;

    if(userInput==noofcolors){
        handleQuery();
    }
}
function nextLevel(){
     $("h1").text("Level " + level);
    nextSequence();
}
$(document).on("keypress",function () {
    console.log("key");
    if (isstart == 0) {
        isstart = 1;
       nextLevel();
    }
});