var x = 50; // starting coordinate
var y = 50; // starting y coordinate
var vx = 5;
var vy = 10;
var rectPosition = 0;

function setup(){
  createCanvas(500,500);
}

function draw(){
    background(0,191,255);
    ellipse(x,y,50,50);
    
    if(x>=500-25){
        vx = -vx;
    }  else if (x <= 0+25){
          vx = -vx;
    }
    x+=vx;  

    if(y>=500-25){
        // vy = -vy;
        text("Game Over",210,250)
    }  else if (y <= 0+25){
          vy = -vy;
    }  
        y+=vy;
        
        rect(rectPosition, 489, 100, 10);
        if(keyIsDown(LEFT_ARROW))
        rectPosition = rectPosition - 5
        if(keyIsDown(RIGHT_ARROW))
        rectPosition = rectPosition + 5
}



