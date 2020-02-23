var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    
    {
    
    title: "once",
    review: "good"
    }
];


for (var y=0; y<movies.length; y++){
    fill(84, 140, 209);
textAlign(CENTER, CENTER);
textSize(20);


text(movies[y].title, 200,80* y+ 50);


textSize(30);


text(movies[y].review, 200, 80* y+ 90);



}
