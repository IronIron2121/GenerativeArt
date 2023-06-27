//Sine Sketch GOKAF001
//I wasn't going for any effect in particular but I quite like what came out of this
//I am very fond of the "switching" of the colours on either half of the screen 
//I am also more generally fond of the paths traced by the points on the screen - I find them very satisfying

var amplitude;
var frequency;
var phase_inc;
var input;
var numberOfPoints;
var xPos;
var yPos;


function setup()
{
  createCanvas(1000,700);
  frequency = 0.1; /*set frequency of oscillation effect*/
    
/*
    initialising variables used to make manipulating draw loop effects a little easier
*/
  numberOfPoints = 1800;
  xPos = 0;
  input = 0;
  amplitude = 1;
  strokeWeight(1); //Setting Strokeweight to a fine point, cooler visual effect
    

}


function draw()
{  
  background(0,100); /* Black background */
      
  translate(width/2, height/2); //translate drawing to center of screen
    
  for(var i = 1; i < numberOfPoints+1; i++)
  {
    var yPos = sin(input * frequency + i) * amplitude;  /*calculate the yPos variable*/  
    var xPos = cos(input * frequency + i) * amplitude; /*Calculate the xPos variable*/
    point(i * cos(xPos*100), yPos*cos(input*(1))*i);
    stroke(255 * sin(i), 255*cos(i),255*cos(i),255); /*Colouring*/
  }
    

    
  input+=0.01; 
 
}
