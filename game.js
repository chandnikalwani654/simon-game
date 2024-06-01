var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function nextSequence()
{
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
$("document").on("keypress",nextSequence());
var level=0;
