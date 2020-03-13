var mous,r,b,g,o,y;

function setup() {
  createCanvas(1000,400);
  r = "red";
b = "blue";
g = "green";
o = "orange";
y = "yellow";

mous = createSprite (1,1,20,20);

}

function draw() {
  background(r);  


  mous.x = World.mouseX;
  mous.y= World.mouseY;

  if (mous.x < 200) {
    background (r);
  }

  if (mous.x < 400 && mous.x > 200 ) {
    background (o);
  }
   
if (mous.x > 400 && mous.x < 600 ) {
background (y);
}

if (mous.x > 600 && mous.x < 800) {
  background (b)
}

if (mous.x > 800 && mous.x < 1000) {
  background (g)
}
  drawSprites();
}