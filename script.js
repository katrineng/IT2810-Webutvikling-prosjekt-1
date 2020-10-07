
//canvas animation


$(document).ready(function(){

    var canvas = $('canvas');
    var p = canvas[0].getContext('2d');

    let newValueY = 0; 
    let animation = null; //if you are inside the animation 
    let clicked = false;

    drawCanvas();

    canvas.mouseenter(function(){ 
        //if mouse is in animation, the drop is in its original position and will increase afterwards
        newValueY = 0; 
    }); 

    canvas.mouseout(function(){
        mouseLeave();
    }); 

    canvas.hover(function(){

        //if the mouse is in the animation, then animate the animation (drops etc)
        if(animation) {
            cancelAnimationFrame(animation); 
        }
        animate();
    })

    canvas.click(function(){
        clicked = !clicked;
    })

    function animate() {
        animation = requestAnimationFrame(animate);
        clearCanvas(); 
        drawCanvas(); 
    
    }

    function drawCloud() {
        //Cloud
     p.beginPath();
     p.fillStyle = "white"; 
     p.arc(200, 80, 20, 0, 2 * Math.PI);
     p.arc(225, 80, 20, 0, 2 * Math.PI);
     p.arc(250, 80, 20, 0, 2 * Math.PI);
     p.arc(275, 80, 20, 0, 2 * Math.PI);
     p.arc(300, 80, 20, 0, 2 * Math.PI);
     p.fill();
 
     p.beginPath();
     p.fillStyle = "white"; 
     p.arc(225, 52, 18, 0, 2 * Math.PI);
     p.arc(250, 52, 18, 0, 2 * Math.PI);
     p.arc(275, 52, 18, 0, 2 * Math.PI);
     p.fill();
   }

   function drawDrops() {

    if (animation) {
        //drop1
        //giving every drop a new y-value for everytime the animation is drawed 

        p.fillStyle = "blue"; 
        p.beginPath(); 
        p.arc(220, 140+newValueY, 6, 0, 2 * Math.PI);
        p.fill();

        p.beginPath(); 
        p.moveTo(215, 137+newValueY);
        p.lineTo(225, 137+newValueY);
        p.lineTo(220, 124+newValueY);
        p.lineTo(215, 137+newValueY);
        p.fill();

        //drop2 
        p.beginPath()
        p.arc(268, 148+newValueY, 6, 0, 2 * Math.PI);
        p.fill();

        p.beginPath()
        p.moveTo(263, 145+newValueY);
        p.lineTo(274, 147+newValueY);
        p.lineTo(268, 132+newValueY);
        p.lineTo(263, 145+newValueY);
        p.fill();

        //drop3
        p.beginPath()
        p.arc(310, 135+newValueY, 6, 0, 2 * Math.PI);
        p.fill();

        p.beginPath()
        p.moveTo(310,115+newValueY)
        p.lineTo(316, 133+newValueY)
        p.lineTo(304, 135+newValueY)
        p.lineTo(310,115+newValueY)
        p.fill()

        if(newValueY < 270) {
            newValueY += 3;
        }
        else{
            newValueY = 0
        }

        //increasing with 3 for every time the drawing gets drawed again 

    } else {

        //drop1
        p.fillStyle = "blue"; 
        p.beginPath(); 
        p.arc(220, 140, 6, 0, 2 * Math.PI);
        p.fill();

        p.beginPath(); 
        p.moveTo(215, 137);
        p.lineTo(225, 137);
        p.lineTo(220, 124);
        p.lineTo(215, 137);
        p.fill();

        //drop2 
        p.beginPath()
        p.arc(268, 148, 6, 0, 2 * Math.PI);
        p.fill();

        p.beginPath()
        p.moveTo(263, 145);
        p.lineTo(274, 147);
        p.lineTo(268, 132);
        p.lineTo(263, 145);
        p.fill();

        //drop3
        p.beginPath()
        p.arc(310, 135, 6, 0, 2 * Math.PI);
        p.fill();

        p.beginPath()
        p.moveTo(310,115)
        p.lineTo(316, 133)
        p.lineTo(304, 135)
        p.lineTo(310,115)
        p.fill()
    }

    p.fill();


   }

   function drawFlower() {

    const enlargement = clicked ? 10 : 0;
    //if the animation is clicked, the radius increases with 10, if not it increases with 0

    //stilk
    p.strokeStyle = "green";
    p.lineWidth = 3; 
    p.beginPath(); 
    p.moveTo(250, 380);
    p.lineTo(250, 230);
    p.stroke();
    
    //flower
    p.beginPath(); 
    p.fillStyle = "yellow"; 
    p.arc(240, 178, 15 + enlargement, 0, 2 * Math.PI);
    p.arc(224, 201, 15 + enlargement, 0, 2 * Math.PI);
    p.arc(239, 222, 15 + enlargement, 0, 2 * Math.PI);
    p.fill();
    
    p.beginPath(); 
    p.fillStyle = "yellow"; 
    p.arc(265, 222, 15 + enlargement, 0, 2 * Math.PI);
    p.arc(277, 202, 15 + enlargement, 0, 2 * Math.PI); 
    p.fill();
    
    p.beginPath(); 
    p.fillStyle = "yellow"; 
    p.arc(267, 180, 15 + enlargement, 0, 2 * Math.PI);
    p.fill();

    p.strokeStyle = "#4B322C";
    p.fillStyle = "#4B322C";
    p.beginPath();
    p.arc(250, 200, 15 + enlargement, 0, 2 * Math.PI);
    p.fill();
 
     //leaves
     p.beginPath();
     p.fillStyle = "green";
     p.moveTo(250, 270);
     p.lineTo(210,285);
     p.lineTo(250, 300);
     p.lineTo(250, 270);
     p.fill();
 
     p.beginPath();
     p.fillStyle = "green";
     p.moveTo(250, 322);
     p.lineTo(250, 350);
     p.lineTo(285, 334);
     p.lineTo(250, 322);
     p.fill();
    
     //line1 on leaf
     p.beginPath(); 
     p.strokeStyle = "lightgreen";
     p.lineWidth=0.3;
     p.moveTo(250, 285);
     p.lineTo(230, 285);
     p.stroke();

     //line2 on leaf 
     p.moveTo(250, 334);
     p.lineTo(267, 334);
     p.stroke();
 

   }

   function drawPot(){
      //stone  
    p.beginPath();
    p.fillStyle="#303030"; 
    p.arc(250, 700, 260, 0, 2 * Math.PI);
    p.fill();
    
    //pot
    p.strokeStyle = "black";
    p.fillStyle = "#9A5A4C";
    p.lineWidth = 3;
    p.beginPath();
    p.moveTo(200, 450);
    p.lineTo(300, 450);
    p.lineTo(320, 380);
    p.lineTo(180, 380);
    p.lineTo(200, 450);
    p.stroke();
    p.fill();

    p.beginPath();
    p.fillStyle = "#9A5A4C";
    p.strokeStyle = "black";
    p.rect(190, 450, 120, 15);
    p.stroke();
    p.fill();

   }

   function drawCanvas(){
       //drawing the whole canvas in the right order 

       drawFlower();
       drawDrops();
       drawPot();
       drawCloud();
       
   }

   function clearCanvas(){
       //clears the canvas 

       p.beginPath(); 
       p.clearRect(0,0,innerHeight,innerWidth);
   }

   function mouseLeave(){
       cancelAnimationFrame(animation);
       animation = null; 
       clearCanvas();
       drawCanvas();
   }


})


//svg animation

function mouseover(event) {
    //changing the radius on the cloud
    event.target.setAttribute("r", 30);

}

function mouseout(event) {
    event.target.setAttribute("r", 20);

}


function showDok() {
    //showing and hiding the documentation
    var x = document.getElementById("myDocumentation");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
  }
}

/*
function openAboutme() {
    document.getElementById("aboutme").style.display = "block";
}

function closeAboutme() {
    document.getElementById("aboutme").style.display = "none";
  }

*/

function showArtist() {
    var y = document.getElementById("aboutme");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
  }
}


function showSources(){
    var z = document.getElementById("sources");
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
  }
}
