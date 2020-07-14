//Global variables
let localStorage = window.localStorage;
let back;
let numClicks = 0;
let colorClicked = 0;
let brushColor = 0;
let img = "";
let tools = [];
let STROKE = 1;
function preload() {

}

function setup() {
  brushColor = color(50);
  createCanvas(700, 468);
  background(255);
  
  menu = new Menu();
  menu.showMenu();
  menu.showTools();
  frameRate(60);


  let x = 20;
  let y = 200;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;   

   button1 = createImg("assets/1.png", "Image")
   button1.position(15,50).mousePressed(Pencil)
    
     button2 = createImg("assets/2.png", "Image")
     button2.position(15,125).mousePressed(Brush2)
     button3 = createImg("assets/3.png", "Image")
     button3.position(15,200).mousePressed(Brush1)
     button4 = createImg("assets/4.png", "Image")
     button4.position(15,275)
     button5 = createImg("assets/5.png", "Image")
     button5.position(15,350).mousePressed(eraser)
     button6 = createImg("assets/6.png", "Image")
     button6.position(15,425).mousePressed(Restore)
  

}

function draw() {
  switchComponents();
     
      
      }

  function Pencil() {
    STROKE = 1
    brushColor = color(50)
  }
  function eraser() {
    brushColor = color(255)
    STROKE = 20
  }

  function Brush1() {
    STROKE = 5
    brushColor = color(50)
  }

  function Brush2() {
    STROKE = 10
    brushColor = color(50)
  }
  function Restore() {
    let item = localStorage.getItem('return')
    console.log(item);
    fill(255)
    return 1
    
    }

function switchComponents() {
  
  if (mouseIsPressed) {
    back = {1: mouseX, 2:mouseY, 3: pmouseX, 4: pmouseY };
    localStorage.setItem("return", JSON.stringify(back))
     drawOnBoard();
   
    
  }
}
function mouseClicked() {
 console.log(mouseX, mouseY)
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

// Shapes class 
class Shape {
  constructor(vertices) {
    this.vertices = [];
    this.vert = vertices;
  }

  shape() {
    if (numClicks <= this.vert) {
      this.vertices.push({ x: mouseX, y: mouseY });
      stroke(1);
      for (let i = 0; i < this.vertices.length; i++)
        vertex(this.vertices[i].x, this.vertices[i].y);
        endShape(CLOSE);
    }
  }

  polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

}

//Menu layout
class Menu {
  constructor() {
    this.objShape = new Shape(0);
    this.colors1 = ['red', 'green', 'orange', 'white', 'pink', 'black', 'yellow', 'blue'];
    this.shapes = ['triangle', 'square', 'circle', 'pentagon',
      'hexagon', 'diamond']
  }
  showMenu() {
    let init_x = 50;
    let init_y = 450;

    for (let i = 0; i < this.colors1.length; i++) {
      strokeWeight(0)
      fill(this.colors1[i]);
      circle(init_x, 20, 35);
      init_x += 40;
    }
  }

    showTools() {
     
      
    }

    Pencil() {
        console.log("Con")
    }
}

