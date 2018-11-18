$(document). ready(function(){

// create a function to select a random number to be shown at load
var Random=Math.floor(Math.random()*199+1)

// number should be between 1 - 200

$("#randomNumber").text(Random);
//append chosen number into the designated id
var num1= Math.floor(Math.random()*19+1)
var num2= Math.floor(Math.random()*19+1)
var num3= Math.floor(Math.random()*19+1)
var num4= Math.floor(Math.random()*19+1)
// assign random numbers to each crystal
// numbers for crystals should be between 1-20
var userTotal= 0;
var wins= 0;
var losses= 0
// append win/loss variables variables to html
$("#numberwins").text(wins);
$("#numberlosses").text(losses);
// reset game
function reset() {
    Random=Math.floor(Math.random()*199+1)
    $("#randomNumber").text(Random);
    num1=Math.floor(Math.random()*19+1)
    num2=Math.floor(Math.random()*19+1)
    num3=Math.floor(Math.random()*19+1)
    num4==Math.floor(Math.random()*19+1)
    userTotal= 0;
    $("#finalTotal").text(userTotal);
}
// add wins/losses
function winner(){
    alert("You Win!!!!");
    wins++;
    $("#numberwins").text(wins);
    reset()
}

function looser () {
    alert("You Loose!!!");
    losses++;
    $("#numberlosses").text(losses)
    reset()
}
//setup the on click function
$("#one").on("click", function(){
userTotal = userTotal + num1;
$("#finalTotal").text(userTotal)

if (userTotal == Random) {
    winner();
}
else if( userTotal > Random) {
    looser()
}
})

$("#two").on("click", function(){
    userTotal = userTotal + num2;
    $("#finalTotal").text(userTotal)
    
    if (userTotal == Random) {
        winner();
    }
    else if( userTotal > Random) {
        looser()
    }
    })


    $("#three").on("click", function(){
        userTotal = userTotal + num3;
        $("#finalTotal").text(userTotal)
        
        if (userTotal == Random) {
            winner();
        }
        else if( userTotal > Random) {
            looser()
        }
        })

        $("#four").on("click", function(){
            userTotal = userTotal + num4;
            $("#finalTotal").text(userTotal)
            
            if (userTotal == Random) {
                winner();
            }
            else if( userTotal > Random) {
                looser()
            }
            });


});