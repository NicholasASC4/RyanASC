var x = 0;

var y = 0;

function setup(){
    createCanvas(1200,1200);
    background(135,206,250);

}

function draw(){

    textSize(50);
    fill(255);
    text("Please type the sentence below");

    textSize(30);
    fill(255);
    text("Now she want a photo");

    textSize(30);
    fill(255);
    text("You already know though");

    textSize(30);
    fill('blue');
    text("You only live once");

    textSize(30);
    fill(255);
    text("That's the motto, YOLO");
    
}

var myWords = '';

function keyTyped(){
    myWords= myWords + key;
}

function draw(){
    fill(255);
    text(myWords,255,255);
}

