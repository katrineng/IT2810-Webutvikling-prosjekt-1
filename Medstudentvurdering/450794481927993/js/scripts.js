//Visning av dokumentasjon
$(document).ready(function() {
  $("#doc_button").click(function() {
    $("#documentation").toggle();
  });
});

// ---- SVG interaktvitiet ----

//Endre fargen
$(document).ready(function() {
  $("a").mouseover(function() {
    $(this)
      .find("polygon, ellipse")
      .css("fill", "plum");
  });
  $("a").mouseleave(function() {
    $(this)
      .find("polygon, ellipse")
      .css("fill", "purple");
  });
});

//Spise kakestykke
$("#cake").mouseover(function() {
  $(".eat").css("display", "inline");
});

$("#cake").mouseleave(function() {
  $(".eat").css("display", "none");
});

// ---- Canvas ----
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// -- Canvas interaktivitet ----

var colors = ["purple", "lightgreen", "orange", "red", "cyan"];

$("#myCanvas").click(function() {
  var index = Math.floor(Math.random() * colors.length);

  ctx.beginPath();
  ctx.arc(125, 105, 10, 1 * Math.PI, 2 * Math.PI);
  ctx.fillStyle = colors[index];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(175, 105, 10, 1 * Math.PI, 2 * Math.PI);
  ctx.fillStyle = colors[index];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(225, 105, 10, 1 * Math.PI, 2 * Math.PI);
  ctx.fillStyle = colors[index];
  ctx.fill();

  ctx.beginPath();
  ctx.arc(275, 105, 10, 1 * Math.PI, 2 * Math.PI);
  ctx.fillStyle = colors[index];
  ctx.fill();
  ctx.closePath();
});

//Fat
ctx.beginPath();
ctx.rect(70, 180, 260, 20);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

//Kake
ctx.beginPath();
ctx.rect(100, 105, 200, 75);
ctx.fillStyle = "lightpink";
ctx.fill();
ctx.closePath();

//Gelé
ctx.beginPath();
ctx.arc(125, 105, 10, 1 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(175, 105, 10, 1 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(225, 105, 10, 1 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(275, 105, 10, 1 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

//Lys
ctx.beginPath();
ctx.rect(193, 55, 15, 50);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.closePath();

//Flamme
ctx.beginPath();
ctx.arc(200, 45, 10, 0.5 * Math.PI, 1.5 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 35, 10, 1.5 * Math.PI, 0.5 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

//Pynt

//ctx.quadraticCurveTo(cpx, cpy, x, y) hvor x og y er end points og cpy og cpx er control points

ctx.beginPath();
ctx.moveTo(100, 140);

ctx.quadraticCurveTo(120, 120, 150, 140);
ctx.quadraticCurveTo(170, 120, 200, 140);
ctx.quadraticCurveTo(220, 120, 250, 140);
ctx.quadraticCurveTo(270, 120, 300, 140);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 160);

ctx.quadraticCurveTo(120, 130, 150, 160);
ctx.quadraticCurveTo(170, 130, 200, 160);
ctx.quadraticCurveTo(220, 130, 250, 160);
ctx.quadraticCurveTo(270, 130, 300, 160);
ctx.stroke();
ctx.closePath();
