function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(1830, 900);
}

function draw() {
  //sky blue background
  background(135, 206, 235);
  //sun in top-right corner
  fill("yellow"); //yellow  
  stroke("orange"); //orange outline 
  // strokeWeight(10); //large outline    
  circle(150, 80, 130);

  fill("pink");
  rect(1000, 8, 900, 900);

  //emojis

  textSize(100)
  // text("☁️", 1300, 200) //cloud
  // text("☁️", 1150, 150) //cloud
  text("☁️", 900, 150)  //cloud
  text("☁️", 700, 200)  //cloud
  text("☁️", 500, 150) //cloud
  text("☁️", 300, 250) //cloud
  text("☁️", 100, 150) //cloud

  text("🌳", 900, 800) //tree
  text("🌳", 300, 800) //tree
  // text("🌳", 1300, 800) //tree

  text("🌻", 90, 800) //flower 
  text("🌺", 600, 800) //flower

  text("🦋", mouseX, mouseY) //butterfly
  text("🦋", 400, 500)  //butterfly 

  fill("green")
  stroke("black")
  strokeWeight(2)
  triangle(1250, 350, 1350, 200, 1450, 350);//triangle


  fill("purple")
  stroke("red")
  strokeWeight(4)
  rect(1300, 500, 350, 300) //rectangle

  fill("red")
  stroke("black")
  strokeWeight(3)
  square(1375, 550, 200) //square

  fill("blue")
  ellipse(1300, 90, 300, 100); //ellipse

  fill("skyblue")
  ellipse(1300, 90, 150, 50);//ellipse

  // fill("red")
  // arc(540, 100, 300, 100, 180, 360, CHORD);
  
  fill("black")
  line(1200, 200, 1200, 350); //line

}
