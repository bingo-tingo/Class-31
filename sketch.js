const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight=300

function setup() {
  createCanvas(900,780);

  engine = Engine.create();
  world = engine.world;
 
  // create division objects
  for(var k = 10;k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

    //create 1st row of plinko objects
  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

    //create 2nd row of plinko objects
  for(var j = 30; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,185));
  }

    //create 3rd row of plinko objects
  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,295));
  }

    //create 4th row of plinko objects
  for(var j = 30; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,395));
  }

// creating ground  
  ground = new Ground(240,775,800,10)
  
}

function draw() {
  background("black");
  Engine.update(engine);

  if(frameCount%80===0){
    particles.push(new Particles(random(width/2-50,width/2+50),10,10))
  }

  //displaying divisions
  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }

  // displaying plinkos
  for(var j = 0;j < plinkos.length; j++){
    plinkos[j].display();
  }

  //displaying particles
  for(var j = 0;j < particles.length; j++){
    particles[j].display();
  }

  ground.display();
}