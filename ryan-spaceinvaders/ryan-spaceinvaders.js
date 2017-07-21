function setup(){
	createCanvas(500, 500);
}

function draw(){
	background(0,0,0);
	for (var x = 25; x < 470; x = x+ 50){
		for (var y = 25; y < 200; y = y+50){
			push();
			translate(x, y);			
	  		drawCircle();
			pop();
		}	
	}
    rect(50,290,40,40); 
    rect(150,290,40,40);
    rect(250,290,40,40);
    rect(350,290,40,40);

 drawTriangle();
    
}

function drawCircle() {
    fill('red')
	ellipse(10,10,20,20,20,20)}

 function drawTriangle(){
        fill(0,255,0)
    triangle(250,400,225,450,275,450)
    }    
  

    