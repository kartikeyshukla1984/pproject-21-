var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var cars;

function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();


  

  for( var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight)
    if(i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor="black";
      
    }
    bottomGrass1.shapeColor="grey";
  }

  

   for( var i=0;i<40; i++)
   {
     logs = new Log(2);
    logGroup1.add(logs.sot);
   }

   for(i=1;i<logGroup1.lenght;i++)
  {
   if(logGroup1[i].x<o)
   {
     logGroup1[i].x=width;
   }  
  }
   
for(i=1;i<carGroup1.lenght;i++)
{
  if(carGroup1[i].x<0)
  {
  carGroup1[i].x=width; 
  }
}



  for(var i=0;i<40; i++)
  {
    cars = new Car(2);
    carGroup1.add(cars.sit);
  }

  
     
   
 }

function draw() {
  background("skyblue");
 
 

  drawSprites();
}

