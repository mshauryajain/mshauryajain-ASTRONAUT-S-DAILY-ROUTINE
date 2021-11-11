var bg , sleep , brush , gym , eat , drink , move , bath;
var astronaut;


function preload() {
  bg = loadImage ("images/iss.png")
  sleep = loadAnimation ("images/sleep.png")
  brush = loadAnimation ("images/brush.png")
  gym = loadAnimation ("images/gym1.png" , "images/gym2.png" , "images/gym11.png" , "images/gym12.png")
  eat = loadAnimation ("images/eat1.png" , "images/eat2.png")
  drink = loadAnimation ("images/drink1.png" , "images/drink2.png")
  move = loadAnimation ("images/move.png" , "images/move1.png")
  bath = loadAnimation ("images/bath1.png" , "images/bath2.png")

}


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation ("sleeping" , sleep);
  astronaut.scale = 0.1;
}


function draw() {
  background(bg); 
  
  textSize (20)
  fill ("white")
  text ("Instructions:")
  textSize (15)
  text (" UP ARROW = BRUSHING" , 20 , 55)
  text (" DOWN ARROW = GYMING" , 20 , 70)
  text (" LEFT ARROW = EATING" , 20 , 85)
  text (" RIGHT ARROW = BATHING" , 20 , 100)
  text (" M KEY = MOVING" , 20 , 115)

  edges = createEdgeSprites ()
  astronaut.bounceOff(edges)

  if(keyDown ("UP_ARROW")) {
    astronaut.addAnimation ("brushing" , brush)
    astronaut.changeAnimation ("brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown ("DOWN_ARROW")) {
    astronaut.addAnimation ("gyming" , gym)
    astronaut.changeAnimation ("gyming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

    
  }

  if(keyDown ("LEFT_ARROW")) {
    astronaut.addAnimation ("eating" , eat)
    astronaut.changeAnimation ("eating")
    astronaut.x = 150
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown ("RIGHT_ARROW")) {
    astronaut.addAnimation ("bathing" , bath)
    astronaut.changeAnimation ("bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown ("m")) {
    astronaut.addAnimation ("moving" , move)
    astronaut.changeAnimation ("moving")
    astronaut.velocityX = 0.2;
    astronaut.velocityY = 0.2;
  }



  drawSprites();
}