

  xx = 100;
yy = 200;

dd= 100;



function setup() {
  createCanvas(windowWidth, windowHeight);

  


  
}
function draw() {

	background('black');

	
  
  

  ellipse(xx, yy, dd, dd);

  



}

function mouseClicked(){
	
if( dist(xx, yy, mouseX, mouseY) < dd/2){

        
      
      

	

	socket.emit('cli');
}
};





      

  

    


    
   