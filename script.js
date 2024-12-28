var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var imagesrc1="images/dice"+randomNumber1+".png";
var imagesrc2="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",imagesrc1);
document.querySelector(".img2").setAttribute("src",imagesrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!!!!!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!!!!!"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}