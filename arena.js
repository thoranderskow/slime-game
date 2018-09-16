//CANVAS VARS
let canvas = document.querySelector("#battlefield");
let ctx = canvas.getContext("2d");
//PLAYER&MOVEMENT VARS
let p1x = canvas.width/4;
let p1y = canvas.height-150;
let p2x = canvas.width-(canvas.width/4);
let p2y = canvas.height-150;
let pRadius = 45

//DRAW FUNCTIONS
function drawPlayer1(){
  ctx.beginPath();
  ctx.arc(p1x, p1y, pRadius, 0, Math.PI, true);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
function drawPlayer2(){
  ctx.beginPath();
  ctx.arc(p2x, p2y, pRadius, 0, Math.PI, true);
  ctx.fillStyle= "red";
  ctx.fill();
  ctx.closePath();
}



function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer1();
  drawPlayer2();
}
setInterval(draw, 10);
