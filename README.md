I made bubbles bigger by changing the number in "radius: random(100, 220)"

I make the bubbles' motions more vigorous by changing the number in 
    "ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-21, 21);
    bubble.y += random(-21, 21);"

I change bubbles color by editing the number in
      }
      fill(255, 200, 200, 200);
    } else {
      fill(25, 120, 200, 20);

I change the initial number of bubbles by editing the number in
  for (var i = 0; i < 50; i++) {
  
I change how many bubbles can be erased by changing the number in 
  bubbles.splice(i, 1); 
