
var SmileyFace = function(x, y) {
    
    this.centerX = x;
    this.centerY = y;
    
    
};



SmileyFace.prototype.draw = function() {
    fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak= function (hi){
    text(hi, this.centerX, this.centerY);
};

var face = new SmileyFace(200,300);
face.draw();
face.speak("hi");

var pace = new SmileyFace(300,200);
pace.draw();
pace.speak("ha");
