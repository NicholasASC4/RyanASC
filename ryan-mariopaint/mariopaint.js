function setup(){
  createCanvas(1200,1200);
  background(255,0,0)
}


 function mouseDragged() {
  rect(mouseX, mouseY, 10, 10);
  
  // prevent default
  return false;
}