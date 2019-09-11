var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 110; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(510, 100)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 111); // remove this bubble!
      }
      fill(355, 100, 10, 200);
    } else {
      fill(155, 120, 100, 10);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);
  }
}
