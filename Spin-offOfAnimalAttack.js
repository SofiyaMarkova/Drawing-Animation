var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
//bunny
draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    ellipse(bodyX-25, bodyY-130, 20, 100); // ear
    ellipse(bodyX+20, bodyY-130, 20, 100); // ear
     ellipse(bodyX+50, bodyY-13, 20, 20); // hand
     ellipse(bodyX-50, bodyY-13, 20, 20); // hand
};
