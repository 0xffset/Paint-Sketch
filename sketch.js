//Global variables
let localStorage = window.localStorage;
let back;
let brushColor = 0;
let STROKE = 1;
let img;
function preload() {
img = loadImage("https://static.guiainfantil.com/media/16558/c/dibujos-de-tortugas-para-imprimir-y-colorear-xs.jpg")
}

function setup() {
  COLOR = color(50);
  createCanvas(700, 468);

  frameRate(60);

  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;

  let color1;
  let color2;
  let color3;
  let color4;
  let color5;
  let color6;
  let color7;

  button1 = createImg("assets/1.png", "Image")
  button1.position(15, 50).mousePressed(Pencil)
  button2 = createImg("assets/2.png", "Image")
  button2.position(15, 125).mousePressed(Brush2)
  button3 = createImg("assets/3.png", "Image")
  button3.position(15, 200).mousePressed(Brush1)
  button4 = createImg("assets/4.png", "Image")
  button4.position(15, 275).mousePressed(Brush3)
  button5 = createImg("assets/5.png", "Image")
  button5.position(15, 350).mousePressed(eraser)
  button6 = createImg("assets/6.png", "Image")
  button6.position(15, 425).mousePressed(Restore)

  color1 = createImg("assets/color1.png", "Image")
  color1.position(70, 5).mousePressed(Color1)

  color2 = createImg("assets/color2.png", "Image")
  color2.position(140, 5).mousePressed(Color2)

  color3 = createImg("assets/color3.png", "Image")
  color3.position(210, 5).mousePressed(Color3)

  color4 = createImg("assets/color4.png", "Image")
  color4.position(280, 5).mousePressed(Color4)

  color5 = createImg("assets/color5.png", "Image")
  color5.position(350, 5).mousePressed(Color5)

  color6 = createImg("assets/color6.png", "Image")
  color6.position(420, 5).mousePressed(Color6)

  color7 = createImg("assets/color7.png", "Image")
  color7.position(490, 5).mousePressed(Color7)

}

function draw() {
  
  switchComponents();
}
function Color2() {
  COLOR = color('green')
  brushColor = COLOR
}
function Color1() {
  COLOR = color('red')
  brushColor = COLOR
}

function Color3() {
  COLOR = color('blue')
  brushColor = COLOR
}
function Color4() {
  COLOR = color('yellow')
  brushColor = COLOR
}
function Color5() {
  COLOR = color('orange')
  brushColor = COLOR
}
function Color6() {
  COLOR = color('pink')
  brushColor = COLOR
}
function Color7() {
  COLOR = color('black')
  brushColor = COLOR
}

function Pencil() {
  STROKE = 1
  brushColor = COLOR
}
function eraser() {
  brushColor = color(255)
  STROKE = 20
}

function Brush1() {
  STROKE = 5
  brushColor = COLOR
}

function Brush2() {
  STROKE = 10
  brushColor = COLOR
}

function Brush3() {
  STROKE = 7;
  brushColor = COLOR;
}
function Restore() {
  let item = localStorage.getItem('return')
  let values = JSON.parse(item)
  strokeWeight(0);
  stroke('write ')
  line(values[1], values[2], values[3], values[4]);
  

}

function switchComponents() {

  if (mouseIsPressed) {
    back = { 1: mouseX, 2: mouseY, 3: pmouseX, 4: pmouseY };
    localStorage.setItem("return", JSON.stringify(back))
    drawOnBoard();
  }
}


function staticComponents() {
  eraser = createButton("clear");
  eraser.position(0, 600)
  eraser.size(50, 50)
  eraser.mousePressed(clearBoard)
}

function clearBoard() {
  background(255)
}

function drawOnBoard() {
  
  strokeWeight(STROKE);
  stroke(brushColor)
  line(back[1], back[2], back[3], back[4]);

}


