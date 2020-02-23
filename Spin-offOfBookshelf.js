var book = {
    title: "Brave New World",
    
};

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

for (var i=0; i<3; i++){

fill(214, 255, 219);
rect(10+i*100, 20, 90, 100);
fill(0, 0, 0);
text(book.title, 15+i*100, 29, 70, 100);
    
}
