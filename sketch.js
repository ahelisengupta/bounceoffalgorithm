var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug=true;

  movingRect = createSprite(400, 600, 80, 30);
  movingRect.shapeColor = "blue";
  movingRect.debug=true;
  
  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
}

function draw() {
  background(0,0,0);  

  /*  COLLISION ALGORITHM
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "blue";
  }
*/

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
movingRect.velocityX=movingRect.velocityX*(-1);
fixedRect.velocityX=fixedRect.velocityX*(-1);

}

if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.velocityY=movingRect.velocityY*(-1);
fixedRect.velocityY=fixedRect.velocityY*(-1);

}

  drawSprites();
}