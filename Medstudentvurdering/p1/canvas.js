window.onload = start;
var ctx = document.getElementById("drawing").getContext("2d");

var grd = ctx.createLinearGradient(20, 0, 300, 400);
grd.addColorStop(0, "#2da2c5");
grd.addColorStop(1, "white");

let win = "white"
let day = true;

// When clicked, the canvas will change from day to night or the opposite
document.getElementById("drawing").addEventListener('click', function(event) {
  turnLights()
});



// When window is loaded, this will be drawed
function start() {
  background()
  grass()
  sky(grd)
  house(win)
  sun()
}

function redraw(window, s) {
  ctx.clearRect(0,0,500,500)
  background()
  grass()
  sky(s)
  house(window)
  if (day) {
    moon()
  } else {
    sun()
  }
}

// This function will check if there is day or night and redraw the canvas when clicked
function turnLights() {
  let white = "white"
  let black = "black"

  var grd = ctx.createLinearGradient(20, 0, 300, 400);
  grd.addColorStop(0, "#2da2c5");
  grd.addColorStop(1, "white");

  let night = "#03032b"

  if (day) {
    redraw(black, night)
    day = false
  } else {
    redraw(white, grd)
    day = true
  }
}

// Everything under here is elements for drawing the objects
function moon() {
  ctx.beginPath();
  ctx.arc(100,60,40,0.25*Math.PI,1.25*Math.PI);
  ctx.fillStyle = "white"
  ctx.fill();
}

function background() {
  ctx.beginPath()
  ctx.rect(0,0,500,500);
  ctx.fillStyle = "white"
  ctx.fill();
  ctx.stroke();
}

function sun() {
  ctx.beginPath();
  ctx.arc(450,50,30,0,Math.PI*2,0);
  ctx.fillStyle = "yellow"
  ctx.fill();

}

function sky(s) {
  ctx.beginPath()
  ctx.rect(0,0,500,300);
  ctx.fillStyle = s
  ctx.fill();
}

function grass() {
  ctx.beginPath()
  ctx.rect(0,300,500,200)
  ctx.fillStyle = "#257a33"
  ctx.fill()
  ctx.stroke()
}

function house(window) {
  ctx.beginPath()
  ctx.rect(100,200,200,150);
  ctx.fillStyle = "#cfb478"
  ctx.fill();
  ctx.stroke();

  ctx.beginPath()
  ctx.rect(120,120,40,80)
  ctx.fillStyle = "#6b4f24"
  ctx.fill()
  ctx.stroke()



  ctx.beginPath()
  ctx.moveTo(80,200)
  ctx.lineTo(320,200)
  ctx.lineTo(200,120)
  ctx.lineTo(80,200)
  ctx.fillStyle = "brown"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(220,270,50,80)
  ctx.fillStyle = "brown"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(130,250,70,50)
  ctx.fillStyle = window
  ctx.fill()
  ctx.stroke()
}
