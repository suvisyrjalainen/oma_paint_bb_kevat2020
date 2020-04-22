function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background("black");
}

function draw() {
  var red = random(0, 255)
  var green = random(0, 255)
  var blue = random(0, 255)

  if (mouseIsPressed) {
    fill(red, green, blue);
    ellipse(mouseX, mouseY, 10, 10);
  }

}
