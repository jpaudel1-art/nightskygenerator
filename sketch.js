function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  // Midnight Blue Background
  background(5, 10, 30); 
  
  // Draw a simple moon to test
  push();
  translate(-300, -150, 0);

  noStroke();
  ambientLight(150);
  pointLight(255, 255, 255, 0, 0, 300);

  fill(240, 240, 220);
  sphere(60);

  pop();

  // Instructions text
  fill(255);
  text("Night Sky Generator is Running!", 20, 30);
}

// Adjust sky if window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}