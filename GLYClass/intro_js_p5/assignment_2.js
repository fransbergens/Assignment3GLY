var y = 40;
var x = 100;

function setup() {
    var canvas = createCanvas(200,200);
    canvas.parent('sketch-holder');
}

function draw() {
    background(0,0,100);
    y = y+2;
    fill(100,0,0); //turn the fill color blue
    ellipse(x,y,5,5); //draw the sphere
    
}