var xPos = 300;
var yPos = 300;

var xDos=200;
var yDos=200;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    xPos+=2;
    
    yPos+=2;
    
    fill(255, 81, 0);
    ellipse(xDos, yDos, 30, 30);
    
    xDos-=2;
    yDos-=2;
    
};


