//Button Press
var noOfButtons = document.querySelectorAll(".drum").length

for (var i = 0 ; i < noOfButtons ; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click" , handClick)

function handClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
}
}






//Keyboard Press
document.addEventListener("keydown" , function(event){

    makeSound(event.key)
    buttonAnimation(event.key)

})

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        
        case "k":
            var kick = new Audio("snare.mp3");
            kick.play();
            break;
        
        case "l":
            var snare = new Audio("kick-bass.wav");
            snare.play();
            break;

        default: 
            console.log();
               }
}



//Animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function(){activeButton.classList.remove("pressed")} , 100)

}


