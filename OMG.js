var drops = [];
var img;
function setup() {
  createCanvas(770, 1236);
    img = loadImage('ourpeople.png');
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(255);

  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
   textAlign(CENTER);
   noStroke();
textSize(170);
fill(255);
text("CALL ME",350,150);
text("COOL ME",350,300);
text("HEAT ME",350,450);
text("MEET ME",350,600);
text("LIKE ME",350,750);
text("LOVE ME",350,900);
}
