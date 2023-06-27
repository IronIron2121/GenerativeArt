//GOKAF001 Phase Sketch
//This is based on the "Phasing Runners" template
//I felt that this piece kept many of the qualities that made that sketch visually appealing but added a nice layer of complexity
//In short I really just liked the way it looks. I thought that the shapes created by the functions used and the phasing between the two sets of dots were beautiful
//I am also quite fond of the "three-dimensional" effect created by their movement against eachother, although it is perhaps a little dizzying at times


/* Template Variables */
var runners;
var numRunners;
var runnerSpacing;
var increment;

/* Ticker / Increment Variables */
var ticker;
var tickInc;

/* Positional Variables */
var sinPosX;
var cosPosY;

function setup()
{
    createCanvas(512,512);
    
    runners = []; /* Create array for runners */
    numRunners = 50; /* Decide how many runners you'll have */
    runnerSpacing = 7.5; /* Spacing inbetween runners*/
    
    stroke(0);
    strokeWeight(1);
    
    
    increment = TWO_PI/(900*16);
    
    /* Initialising my variables */
    ticker = 0;
    tickInc = 0.01;
    sinPosX = 0;
    cosPosY = 0;
    
    //create an array of runners
    for(var i = 0; i < numRunners; i++)
    {
        runners.push(createVector(0, (runnerSpacing + runnerSpacing * i) * -1 ));
    }
    
}

function draw()
{
    
    copy(0,0,width,height,0,1,width,height); //moves the screen down each frame, give the drawing a slight illusion of upward momentum
    background(0,50); // black background with alpha variable at 150 to give a very mild "tracer" effect on drawn items
    
    ticker += tickInc; //ticker for drawn item movement
    
 

    translate(width/2, height/2); //draw from centre of canvas

    /*for loop, drawing first set of dots*/
    for(var i = 0; i < runners.length; i++)
    {
        sinPosX = sin(ticker)*runners[i].x;

        point(sin(ticker)*runners[i].x, runners[i].y);
        stroke(255);

    }
    
    /*for loop, drawing second set of dots*/
    for(var i = 0; i < runners.length; i++)
    {
        sinPosX = sin(ticker)*runners[i].x;
        cosPosY = cos(ticker)*runners[i].y;
        point(sinPosX, cosPosY);
        stroke(sin(sinPosX)*255,255,255)

        runners[i].rotate(increment * (runners.length + (i)));
        
    }
}
  

    


