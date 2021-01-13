var fixed_rect,moving_rect
function setup() {
  createCanvas(800,400);
  fixed_rect= createSprite(400, 200, 100, 50);
 fixed_rect.shapeColor="yellow"
  moving_rect=createSprite(500,300,60,60)
  moving_rect.shapeColor="yellow"
}

function draw() {
  background("red");  
  moving_rect.x=World.mouseX
  moving_rect.y=World.mouseY
  //console.log(fixed_rect.x-moving_rect.x)
  if(moving_rect.x-fixed_rect.x<fixed_rect.width/2+moving_rect.width/2
    &&
    fixed_rect.x-moving_rect.x<fixed_rect.width/2+moving_rect.width/2
    &&
    fixed_rect.y-moving_rect.y<fixed_rect.height/2+moving_rect.height/2
    &&
    moving_rect.y-fixed_rect.y<fixed_rect.height/2+moving_rect.height/2){
    fixed_rect.shapeColor="white"
    moving_rect.shapeColor="white"
  }
  else{fixed_rect.shapeColor="yellow"
  moving_rect.shapeColor="yellow"}
  drawSprites();
}