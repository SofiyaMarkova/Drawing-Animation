background(89, 216, 255);

var centerX;
var centerY;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor;


var drawFish=function (){
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);};
         
         
        drawFish(centerX=300,centerY=200, bodyColor= color(242, 0, 255));
        drawFish(centerX=100,centerY=300, bodyColor= color(132, 55, 138));
          drawFish(centerX=250,centerY=100, bodyColor= color(83, 138, 55));
         