fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));

 if (answer ===1) {
    text("No", 180, 200);
     
}
else if (answer ===2) {
    text("Yes", 180, 200);
     
}
else if (answer ===3) {
    text("maybe", 180, 200);
    
}

else if (answer ===4) {
    text("no way", 180, 200);
     
}
else {
    text("why not", 180, 200);
  }