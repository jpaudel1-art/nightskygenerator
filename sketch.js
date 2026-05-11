function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Midnight Blue Background
  background(5, 10, 30); 
  
  // Draw a simple moon to test
  fill(255, 255, 240);
  noStroke();
  ellipse(200, 150, 80, 80);
  
  // Instructions text
  fill(255);
  text("Night Sky Generator is Running!", 20, 30);
}

// Adjust sky if window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}