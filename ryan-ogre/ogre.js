
var playerHP = 100;
var playerGold = 100;
var playerDefeated = 0;

function setup(){
    $("body").append("<h1> Hello </h1>");
    $("body").append("HP:" + playerHP + ", Gold: "+ playerGold + ", Defeated: " + playerDefeated);
    $("body").append("<img src='https://unsplash.it/200/300' >");





}
$(document).ready(setup);