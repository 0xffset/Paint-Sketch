//Global variables
let numClicks = 0;
let colorClicked = 0;
let brushColor = 0;
let img = "";

function setup() {
    brushColor = color(50);
    createCanvas(700, 468);
    img = loadImage("https://static.guiainfantil.com/media/16558/c/dibujos-de-tortugas-para-imprimir-y-colorear-xs.jpg")
    staticComponents();
    frameRate(60);

}

function draw() {
 
    menu = new Menu();
    menu.showMenu();
  
    stroke(0)
    triangle(30, 40, 58, 10, 86, 40);
    rect(100, 10, 25, 25);
    rect(100, 10, 25, 25);
    circle(150, 25, 25);
    background(img)
    switchComponents();
    
  }


function switchComponents() {
  if (mouseIsPressed) {
     drawOnBoard();
  }
 

}
function mouseClicked() {
    // numClicks +=  1;
    // console.log(numClicks);
    // shapes = new Shape(4);
    // shapes.shape();
     console.log(mouseX, mouseY)
     if (mouseX >=450 && mouseY >= 0 ) {
       brushColor = color('red');
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
     stroke(brushColor)
     line(mouseX, mouseY, pmouseX, pmouseY);
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
    this.colors1 = ['red', 'green', 'orange', 'white'];
    this.colors2 = ['pink', 'black', 'yellow', 'blue'];
    this.shapes = ['triangle', 'square','circle', 'pentagon',
                  'hexagon', 'diamond']
  }
  
  showMenu() {
   let init_x = 450;
   let init_y = 450;
   
   for (let i = 0; i < this.colors1.length; i++) {
   fill(this.colors1[i]);
   rect(init_x, 0, 20, 20);
   init_x += 30;
    }
  for (let j = 0; j < this.colors2.length; j++) {
     fill(this.colors2[j])
     rect(init_y, 30, 20, 20);
     init_y += 30;
  }
    
  }
  red () {
      brushColor = color('red')
      console.log(brushColor)
      return 1
  }  
}