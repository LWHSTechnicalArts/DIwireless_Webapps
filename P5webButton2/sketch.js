// for red, green, and blue color values
var r, g, b, r2, g2, b2;

function setup() {
  createCanvas(600, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(r, g, b);
  textSize(40);
  
  push();
  fill(r, g, b, 127);
  
  text("ON",127, 215);
  ellipse(160, 200, 200, 200);
  pop();
  
  push();
  text("OFF",420, 215);
  stroke(r2, g2, b2);
  fill(r2, g2, b2, 127);
  ellipse(460, 200, 200, 200);
  pop();
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 160, 200);
  var d2 = dist(mouseX, mouseY, 460, 200);
  
  if (d < 100) {
    httpPost("https://api.spark.io/v1/devices/deviceIDhere/control?access_token=", {value: '1'});
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    r2 = random(30,80);
    g2 = random(30,80);
    b2 = random(30,80);
  }
  
  if (d2 < 100) {
   httpPost("https://api.spark.io/v1/devices/deviceIDhere/control?access_token=", {value: '2'});
   // Pick new random color values
    r = random(30,80);
    g = random(30,80);
    b = random(30,80);
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
}

function touchStarted() {
  var d = dist(touchX, touchY, 160, 200);
  var d2 = dist(touchX, touchY, 460, 200);
  
  if (d < 100) {
    httpPost("https://api.spark.io/v1/devices/deviceIDhere/control?access_token=", {value: '1'});
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    r2 = random(30,80);
    g2 = random(30,80);
    b2 = random(30,80);
  }
  
  if (d2 < 100) {
   httpPost("https://api.spark.io/v1/devices/deviceIDhere/control?access_token=", {value: '2'});
   // Pick new random color values
    r = random(30,80);
    g = random(30,80);
    b = random(30,80);
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
  return false;
}