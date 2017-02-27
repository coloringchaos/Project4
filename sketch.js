

  xx = 100;
yy = 200;

dd= 100;

r=100;
g=100;




function setup() {
  createCanvas(windowWidth, windowHeight);

  


  
}
function draw() {

	background('black');

	
  fill(r,g,0);
  

  ellipse(xx, yy, dd, dd);

  socket.on('bbb', function(){

  	    xx = random(0, windowWidth);
  yy = random(0, windowHeight);
  dd = random(25, 500);
  
  });

  if (dist(xx, yy, mouseX, mouseY) < dd/2) {
    r=0;
    g=100;

  }else if(dist(xx, yy, mouseX, mouseY) > dd/2){
    r=100;
    g=0;
  }



};

function mouseClicked(){
	
if( dist(xx, yy, mouseX, mouseY) < dd/2){

        
      
      

	

	socket.emit('cli');

}
}





      

  

    


    
   