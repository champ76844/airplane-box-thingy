const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,part1;
var airplane,smallbox;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    airplane= new Box(500,320,100,100);
    part3 = new Box(500,320,100,20);
    
    //log4 = new Log(870,120,150,20,-PI/7);
   ground = new Ground(600,height,1200,20)
}

function draw(){
    background("blue");
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
  
   part3.display();
   airplane.display();
}