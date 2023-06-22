/*
Noise Study GOKAF001

This project creates visuals primarily using the noise function in combination with the point function and vectors

The noiseDetail falloff cycles repeatedly through the values 1, 11, 21, and 31. The background alpha value shifts from 20 to 0 and 0 to 20, using the sine function and a ticker. The falloff value is set to shift as the background alpha value approaches 0 – this creates a transition effect, where each visual effect “thickens” and then “fades” into the next.

I like the appearance of movement created by the generation process, especially in the “falloff = 1” iteration of the code (which reminds me of a storm), as well as the visuals that form during the “transitions”, as the background alpha changes and the points of the current iteration "coagulate". Other falloff values remind me of pretty things too - rain, stars, dust in sunlight, flashing lights in data centres, etc etc etc

Overall the piece feels to me like a more primitive version of old 80s/90s (MS DOS, etc) screensavers
*/

var pos;
var pos2;
var noisePos;
var noisePosCap;

var ticker;

var octaves; 
var falloff; 
var input; 
var scaler;

var backgroundVar2;

var tipped;

var colourScaler;


function setup()
{
	createCanvas(1024,512); //default value 1024x512

    pos = createVector(width/2, height/2); // default value width/2, height/2
    pos2 = createVector(width/2, height/2); // default value width/2, height/2
    
    noStroke();
    
    background(0,255); //default values 0, 255
    
    pos.x = 0; //sets x value for "pos" vector - default value 0
    pos.y = 0; //sets y value of "pos" vector - default value 0
    pos2.x = 0; //sets x value for "pos2" vector - default value 0
    pos2.y = 0 //sets y value of "pos2" vector - default value 0
    
    ticker = 0; //ticking variable for incremental changes e.g. backgroundVar2 for background alpha value
    
    octaves = 8; //default value 8
    falloff = 1; //default value 1
    noiseScale = 10; //default value 10
    scaler = 1 //multiplier for noiseDetail variables - default value 1
  
    noiseDetail(octaves*scaler, falloff*scaler); 
    
        //default value is 0 - explained further down
    backgroundVar2 = 0
    
        //variable "on-off" switch for iteration/falloff transitions
    tipped = false;
    
        //200 by default
    colourScaler = 200; 
    
        //higher limit for noisePos value; visual effects break if noisePos goes too high - default value 141235200. Optional: 5792339
    noisePosCap = 5792339;

}


function draw()
{

        //creates a ticking variable for background alpha - background alpha changes to create visual "transition" effect between iterations/falloff values
    backgroundVar2 = (sin(ticker/20))*10 + 10;
    
        //default value 119,136,153,backgroundVar2
    background(119,136,153,backgroundVar2);
    
        //"tipping" process to change noise iteration depending on background alpha - changes fall-off as background alpha approaches 0
    if(round(backgroundVar2) == 0 && tipped == false) 
    {
        falloff = (falloff + 10)%40;
        noiseDetail(octaves*scaler, (falloff*scaler)%40); 
        tipped = true;
            //below console.logs for checking transition functionality
        console.log("tipped!");
        console.log("background alpha equals " + backgroundVar2);
        console.log("falloff equals " + falloff);
        console.log("noisePos equals " + noisePos);
    }
    
    else if(round(backgroundVar2) > 19 && tipped == true) 
    {
        tipped = false;   
            //below console log for checking transition functionality
        console.log("topped");
    }
    
    ticker += 0.1;
        
        //below code creates the first set of noisey points !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for(i = 0; i < 500; i++){ //default length 500

            //Create noise value for positioning, etc
        noisePos = (noise(pos.x,pos.y))%noisePosCap;
        
            //Adds noise pos.x and pos.y - random movement
        pos.x += noisePos;   
        pos.y += noisePos;
        
            //full-range colouring, based on canvas position
        stroke(sin(noisePos+ticker)*155,cos(noisePos+(ticker/2))*55,sin(noisePos+ticker/3)*55);
            //black and white colouring
                //stroke(sin(noisePos+ticker)*colourScaler);
        
        if(falloff > 10) //pos1 strokes are only coloured for first iteration, fabric/storm effect
        {
           stroke((sin(noisePos+ticker*20)*colourScaler + 50));     
        } 
        
        pointEnd = point((pos.x)%1024, (pos.y+i*5)%512);  
    }
    
        //below code creates second set of noisey points !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for(i = 0; i < 1000 ; i++){ //default length 1000
        noisePos = (noise(pos.x,pos.y))%noisePosCap; 
        
        pos2.y += noisePos; 
        
            //full-range colouring
        //stroke(sin(noisePos+ticker)*155,sin(noisePos+(ticker/2))*55,sin(noisePos+ticker/3)*55);
            //black and white colouring
        stroke((sin(noisePos+ticker*20)*colourScaler + 50));
        
        if(falloff < 10) //pos2 strokes only come in for first iteration, rain effect
        {
            pointEnd2 = point(pos2.x+i, pos2.y%512);    
        }
          
    }
    

 }



