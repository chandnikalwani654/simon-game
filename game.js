var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];
var level=0;
var started=false;
$(document).keypress(function(){
    if(!started)
        {
            $("#level-title").text("Level "+level);
            nextSequence();
            started=true;
        }
});
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence()
{
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();
    playSound(randomChosenColour);
    
}

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).classList.add("pressed");
    setTimeout(function(){
        $("."+currentColour).classList.remove("pressed");
    },100);

}

function checkAnswer(currentLevel)
{
     
}



