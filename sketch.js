const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var corda
var fruta_opcoes
let engine;
let world;
var ground;
var fruta_com
var coelhofoto
var frutafoto
var fundofoto 
var coelho
var botao
function preload(){

  coelhofoto = loadImage("rabbit-01.png")
  frutafoto = loadImage("melon.png")
  fundofoto = loadImage("background.png")

}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
corda = new Rope(6,{x:245,y:30})
coelho = createSprite(250,500,100,100)
coelho.addImage(coelhofoto)
coelho.scale= 0.2

var fruta_opcoes={
  density : 0.001
}
fruta = Bodies.circle(300,300,15,fruta_opcoes)

Matter.Composite.add(corda.body,fruta)
fruta_com=new Link (corda,fruta )
botao=createImg('cut_btn.png')
botao.position(220,30)
botao.size(50,50)
botao.mouseClicked(drop)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
}

function draw() 
{
  background(51);
  image(fundofoto,0,0, 1000,1400)
  ground.show();
  corda.show();
  Engine.update(engine);
  image(frutafoto, fruta.position.x,fruta.position.y,60,60)

 
  drawSprites() 
}

function drop(){
  corda.break();
  fruta_com.detach()
  fruta_com = null
}