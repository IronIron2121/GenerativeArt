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
    // these numbers are completely arbitrary, but for some reason produce almost exactly what I was looking for. Go figure!
    ticker += (((x_ticker + y_ticker) * -0.09) / 0.0000000009);
    for(var j = 0; j < numEllipse; j++){
      ticker = (ticker + x_ticker) % 255;
      fill(ticker, map(sin(ticker), -1, 1, 0, 255), map(cos(ticker), -1, 1, 0, 255));
      ellipse(ellipseSize*(j*overlap) - (i*2), ellipseSize*(i*overlap), ellipseSize)
    }
  }
}