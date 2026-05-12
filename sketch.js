function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
let stars = [];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);


for(let i = 0; i < 500; i++){
  stars.push({
    x: random(-width, width),
    y: random(-height, height),
    z: random(-1000, 1000),
    size: random(1, 4)
  });
}
}

function draw() {
  // Midnight Blue Background
  background(5, 10, 30); 

  rotateY(frameCount * 0.0008);
  rotateX(frameCount * 0.0003);

  //Stars in 3D space
  for(let stars of stars) {
    push();
    translate(star.x, star.y, star.z);
    noStroke();
    fill(255, random(150, 255));
    sphere(star.size);
    pop();

    star.z += 2;

    if(star.z > 1000){
      star.z = -1000;
      star.x = random(-width, width);
      star.y = random(-height, height);
    }
  }
  
  // Draw a simple moon to test
  push();
  translate(250, -180, -300);
  noStroke();
  fill(230, 230,200);
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