// canvas width and height
let canWidth;
let canHeight;
// number of ellipses in each row
let numEllipse;
// radius of ellipse
let ellipseSize;
let propY;
let propX;
let overlap;
let x_ticker;
let y_ticker;
let ticker;

function setup() {
  canWidth = 400;
  canHeight = 400;
  createCanvas(canWidth, canHeight);
  numEllipse = 40;
  ellipseSize = 20;
  overlap = 0.6;
  propX = canWidth/numEllipse;
  propY = canHeight/numEllipse;
  ticker = 0;
  x_ticker = 1;
  y_ticker = 2;
}

function draw() {
  background(220);
  for(var i = 0; i < 35; i++){
      ticker += ((x_ticker + y_ticker) * -1);  
      x_ticker = cos(cos(ticker * 0.0000000000000000001) * (x_ticker))
      y_ticker = sin(sin(ticker * 0.0000000000000000001) * (y_ticker))
    for(var j = 0; j < numEllipse; j++){
      ticker = (ticker + x_ticker) % 255;
      fill(ticker, map(sin(y_ticker), -1, 1, 0, 255), map(cos(x_ticker), -1, 1, 0, 255));
      ellipse(ellipseSize*(j*overlap) - (i*2), ellipseSize*(i*overlap), ellipseSize)
    }
  }
}