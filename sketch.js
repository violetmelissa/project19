var fixed, moving;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(500,200,30,20);
  fixed.shapeColor="green";
  moving.shapeColor="green";
  moving.debug = true;
  fixed.debug=true;
}

function draw() {

  background("black");  
  console.log(moving.x - fixed.x);
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(moving.x - fixed.x < moving.width/2 + fixed.width/2 
    && fixed.x - moving.x < moving.width/2 + fixed.width/2){
    fixed.shapeColor="red";
  moving.shapeColor="red";
  }
  else
  {
    fixed.shapeColor="green";
  moving.shapeColor="green";
  }
  drawSprites();
}