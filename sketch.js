let stars = [];

function setup() {
  // We use WEBGL for the 3D Moon and Stars
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Create your 800 3D stars
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
  background(5, 10, 30); // Midnight Blue

  // Allow mouse to rotate the sky
  orbitControl();

  // --- DRAW THE STARS ---
  for (let s of stars) {
    push();
    translate(s.x, s.y, s.z);
    fill(255);
    noStroke();
    sphere(s.size); // Real 3D stars
    pop();

    // Make stars move slowly for depth
    s.z += 1;
    if (s.z > 200) s.z = -2000;
  }

  // --- DRAW THE MOON ---
  push();
  translate(-300, -150, 0); // Jaden's Moon Position
  noStroke();
  ambientLight(150);
  pointLight(255, 255, 255, 0, 0, 300);
  fill(240, 240, 220);
  sphere(60); 
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}