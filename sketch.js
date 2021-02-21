var fixedRect, movingRect;
var gameObj1,gameObj2,gameObj3,gameObj4;

function setup() {
  createCanvas(1200,800);
  gameObj1 = createSprite(100,100,50,50);
  gameObj1.shapeColor = "green";
  gameObj2 = createSprite(200,100,50,50);
  gameObj2.shapeColor = "green";
  gameObj3 = createSprite(300,100,50,50);
  gameObj3.shapeColor = "green";
  gameObj4 = createSprite(400,100,50,50);
  gameObj4.shapeColor = "green";

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObj2)){
  movingRect.shapeColor = "red";
  gameObj2.shapeColor = "red";

  }
  else{
   movingRect.shapeColor = "green";
   gameObj2.shapeColor = "green";
  }
  
  //isTouching();
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {

  
  return true;
  


}
else {
  return false;

}





}