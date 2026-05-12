let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // stars around 800

  for (let i = 0; i < 800; i++) {
    stars.push({
      x: random(-width * 2, width * 2),
      y: random(-height * 2, height * 2),
      z: random(-2000, 200), 
      size: random(0.5, 4) 
    });
  }
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

  //stars
  for (let s of stars) {
    push();
    translate(s.x, s.y, s.z);
    fill(255); 
    noStroke();
    sphere(s.size); 
    pop();
  }

  // Instructions text
  fill(255);
  text("Night Sky Generator is Running!", 20, 30);
}

// Adjust sky if window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}