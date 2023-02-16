var randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDiceImage );



var randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDiceImage2 );

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 wins!!"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML = " DRAWW !!"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 winsss !!"
}