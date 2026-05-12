function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
let stars = [];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);


for(let i = 0; i < 400; i++){
  stars.push({
    x: random(width),
    y: random(height),
    size: random(1, 4),
    size: random(0.2, 1.5),
    brightness: random(150, 255)
  });
}
}

function draw() {
  // Midnight Blue Background
  background(5, 10, 30); 

  //Stars in 3D space
  for(let star of stars) {
    noStroke();
    fill(255, star.brightness);
    circle(star.x, star.y, star.size);
    pop();

    star.y += star.speed;

    if(star.z > height){
     star.y = 0;
     star.x = random(width);
    }
  }
  
  // Draw a simple moon to test

  fill(230, 230,200);
  circle(width - 150, 120, 80);

  // Instructions text
  fill(255);
  text("Night Sky Generator is Running!", 20, 30);
}

// Adjust sky if window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}