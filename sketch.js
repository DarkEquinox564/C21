var fixedRect, movingRect, object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1 = createSprite(400, 200,80,30);
  object1.shapeColor = "green";
  

  object2 = createSprite(500, 200,80,30);
  object2.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  
  object1.x = World.mouseX;
  object1.y = World.mouseY;
  
  //bounceOff(movingRect, fixedRect);

  if(isTouching(movingRect, object1)){
    object1.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }
  else{
    object1.shapeColor = 'green';
    movingRect.shapeColor = 'green';
  }
  
  drawSprites();
}

