//CANVAS VARS
let canvas = document.querySelector("#battlefield");
let ctx = canvas.getContext("2d");

//PLAYER&MOVEMENT VARS
let p2x = canvas.width/4;
let p2y = canvas.height-150;
let p1y = canvas.height-150;
let p1x = canvas.width-(canvas.width/4);
let pRadius = 45;
let rightPressedP1 = false;
let leftPressedP1 = false;
let rightPressedP2 = false;
let leftPressedP2 = false;
let upPressedP1 = false;
let upPressedP2 = false;
let gravity = 2;
let playerVelocity = -100;
//GROUND VARS
let groundy = canvas.height-150;

//DRAW FUNCTIONS
function drawGround(){
  ctx.beginPath();
  ctx.rect(0, canvas.height-150, canvas.width, 150);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
function drawPlayer2(){
  ctx.beginPath();
  ctx.arc(p2x, p2y, pRadius, 0, Math.PI, true);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.lineTo(p2x+10, p2y-20);
  ctx.arc(p2x+10, p2y-20, 10, 0, Math.PI*2, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}
function drawPlayer1(player){
  ctx.beginPath();
  ctx.arc(p1x, p1y, pRadius, 0, Math.PI, true);
  ctx.fillStyle= "red";
  ctx.fill();
  ctx.closePath();
}
//EVENT HANDLERS FOR MOVEMENT + EVENTLISTENERS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if (e.keyCode == 39){rightPressedP1 = true;}
  else if (e.keyCode == 37){leftPressedP1 = true;};
  if (e.keyCode == 38){upPressedP1 = true;}
  if (e.keyCode == 87){upPressedP2 = true;}
  if (e.keyCode == 68){rightPressedP2 = true;}
  else if (e.keyCode == 65){leftPressedP2 = true;};
}
function keyUpHandler(e){
  if(e.keyCode == 39){rightPressedP1 = false;}
  else if (e.keyCode == 37){leftPressedP1 = false;}
  if (e.keyCode == 38){upPressedP1 = false;}
  if (e.keyCode == 87){upPressedP2 = false;}
  if(e.keyCode == 68){rightPressedP2 = false;}
  else if (e.keyCode == 65){leftPressedP2 = false;}
}
function checkMove(){
  if (rightPressedP1 && p1x<canvas.width-pRadius){p1x += 4};
  if (leftPressedP1 && p1x>pRadius){p1x -= 4};
  if (rightPressedP2 && p2x<canvas.width-pRadius){p2x += 4};
  if (leftPressedP2 && p2x>pRadius){p2x -= 4};
  if (upPressedP1 && p1y === groundy){p1y += playerVelocity;}
  else if(p1y != groundy){p1y += gravity;}
  if (upPressedP2 && p2y === groundy){p2y += playerVelocity;}
  else if(p2y != groundy){p2y += gravity;}
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGround();
  drawPlayer1();
  drawPlayer2();
  checkMove();
  }
setInterval(draw, 10);
