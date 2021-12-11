var solo
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
soloo = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  solo = createSprite(100, 190, 600, 10)
  solo.addImage("soloo", soloo)
  solo.velocityX = -4
}

function draw(){
  background("white")
  drawSprites();

  if (keyDown("space")){
    trex.velocityY = -11
  }
 if (solo.x < 0){
   solo.x = solo.width/2
 }

 trex.velocityY += 0.5

trex.collide (solo)
}