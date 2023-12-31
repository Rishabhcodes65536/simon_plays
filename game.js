console.log("hi")
var noofcolors = 0;
var level = 1;
var isstart = 0;
var colors = ["red", "blue", "green", "yellow"]
var arr = [];
var userInput=0;
var userArr=[];
var arrptr=0;

var userInput=0;


$(document).ready(function(){
    $("#game-over_id").css('visibility','hidden');
})

function nextSequence() {
    let rand = Math.floor(4 * Math.random());
    let randomColor = colors[rand];
    arr.push(randomColor);
    noofcolors++;
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomColor + ".mp3");
    audio.play();
   
}


function gameOver(){
    var wrongaudio=new Audio("sounds/wrong.mp3");
    wrongaudio.play();
    $("#game-over_id").css('visibility','visible');
    score=0;
    $("#level-title").text("Press any key to restart!");
    arr.length=0;
    isstart=0;
    level=1;
    noofcolors=0;
    arrptr=0;
    // alert("Game Over! Your score is "+noofcolors+".");
}
function handleQuery(){
   
    userInput=0;
    arrptr=0;
    userArr=[];
    level++;
    
    setTimeout(nextLevel,500);
}

function abc_red() {
    userColorInput("red");
}

function abc_green() {
    userColorInput("green");
}

function abc_yellow() {
    userColorInput("yellow");
}

function abc_blue() {
    userColorInput("blue");
}

function userColorInput(color){
    if (isstart == 1) {
      console.log(color);
      $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
      var audio = new Audio("sounds/" + color+ ".mp3");
      audio.play();
      if (arr[arrptr] != color) {
        gameOver();
        return;
      }
      userArr.push(color);

      userInput++;
      arrptr++;
      if (userInput == noofcolors) {
        handleQuery();
      }
    }
}
function nextLevel(){
     $("#level-title").text("Level " + level);
    nextSequence();
}
$(document).on("keypress",function () {
    console.log("key");
    if (isstart == 0) {
        $("#game-over_id").css('visibility','hidden');
        isstart = 1;
        nextLevel();
    }
});