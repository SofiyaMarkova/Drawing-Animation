var xPositions = [200,100, 300, 350];
var yPositions = [0,0,0,0];
var Color = [(color(11, 158, 33)), (color(230, 37, 217)), (color(30, 30, 209)), (color(214, 204, 23))];

draw = function() {
    background(204, 247, 255);
    
    
      mouseReleased = function(){
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        Color.push(color(219, 15, 15));

 };
    

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
       fill(Color[i]);
        rect(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
        if(yPositions[i]===500)
        
        {
            yPositions[i]=0;
        }
    }
    
};
