function setup(){
  createCanvas(1200,1200);
  background(0,0,200)
}


 function mousePressed() {
  ellipse(mouseX, mouseY, 200, 200);
  
  // prevent default
  return false;
}