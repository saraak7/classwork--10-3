//variable to hold socket 
var socket;

function setup() {
  createCanvas(1000, 1000);
  background(102, 204, 255);
  socket = io.connect('http://localhost:3000');
  // handles messages coming from servere
  socket.on('mouse', newDrawing);
}
//event handler for when message comes in
function newDrawing(data){

  noStroke();
  fill(255, 153, 153);
  triangle(data.x, data.y,58,20, 86, 75);
  if(data.x <300) {
    fill(204, 255, 153);
    ellipse(data.x, data.y, 600, 600);
  }
    else{
        stroke(153);
        ellipse(data.x, data.y, 300, 500);
    }
}

function mouseMoved(){
  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data ={
    x: mouseX,
    y: mouseY
  }

// the message - name, and what the message data is
  socket.emit('mouse', data);
    noStroke();
    fill(255, 204, 0);
    
    triangle(mouseX*2, mouseY,58,30, 40, 80);
//  fill(100, 200, 0);
  ellipse(mouseX, mouseY, 60, 70);

}


function draw() {
 
    
}
