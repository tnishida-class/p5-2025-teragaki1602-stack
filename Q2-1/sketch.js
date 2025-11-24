let x, y;
let vx, vy;
const g = 1;
const vymax = 20;
let onGround = false;

let blocks = [];
const BLOCK_SPEED = 3; 
const BLOCK_WIDTH = 60;
const BLOCK_HEIGHT = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height *0.8-height * 0.05;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function updateBlocks() {
  if (random() < 1 / 160) { 
    const minHeightOffset = 50; 
    const maxHeightOffset = 150; 
    const newY = height * 0.8 - random(minHeightOffset, maxHeightOffset);

    blocks.push({
      x: width, 
      y: newY,
      width: BLOCK_WIDTH,
      height: BLOCK_HEIGHT,
    });
  }

  for (let i = 0; i < blocks.length; i++) { 
    let block = blocks[i];
    block.x -= BLOCK_SPEED;
    }
  
}

function drawBlocks() {
  fill(139, 69, 19);
  for (let i = 0; i < blocks.length; i++) { 
    let block = blocks[i];
    rect(block.x, block.y, block.width, block.height);
  }
}
// ------------------------------------

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; 

  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  updateBlocks(); 
  drawBlocks(); 

  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)) { x += 5; }
  if(keyIsDown(LEFT_ARROW) && keyIsDown("A".charCodeAt(0))){ x -= 10; }
  if(keyIsDown(RIGHT_ARROW) && keyIsDown("A".charCodeAt(0))){ x += 10; }
  
  y += vy;
  vy += g;
  vy = constrain(vy, -vymax, vymax);

  //地面との接地判定
  const groundLevel = height * 0.8 - height * 0.05;
  if (y >= groundLevel){
    y = groundLevel;
    vy = 0;
    onGround = true; 
  } else {
    onGround = false; 
  }
  if(keyIsDown(" ".charCodeAt(0)) && onGround){
    vy = -20
  }


  const m = 5
  noStroke();
  if (onGround){
  fill(220, 40, 40);
  for (let offset = 15; offset <= 35; offset += 5) {
    rect(x + offset, y - 45, m, m); 
  }
  for (let offset = 10; offset <= 50; offset += 5) {
    rect(x + offset, y - 40, m, m); 
  }
  
  rect(x + 10, y - 10, m, m)
  rect(x + 15, y - 10, m, m)
  rect(x + 25, y - 10, m, m)
  rect(x + 30, y - 10, m, m)
  rect(x + 35, y - 10, m, m)
  rect(x + 5, y - 5, m, m)
  rect(x + 10, y - 5, m, m)
  rect(x + 15, y - 5, m, m)
  rect(x + 25, y - 5, m, m)
  rect(x + 30, y - 5, m, m)
  rect(x + 40, y - 5, m, m)
  rect(x + 45, y - 5, m, m)
  rect(x + 50, y - 5, m, m)
  rect(x , y , m, m)
  rect(x + 5, y , m, m)
  rect(x + 10, y , m, m)
  rect(x + 15, y , m, m)
  rect(x + 40, y , m, m)
  rect(x + 45, y , m, m)
  rect(x + 50, y , m, m)
  rect(x + 55, y , m, m)
  rect(x + 10, y + 5, m, m)
  rect(x + 45, y + 5, m, m)

  
  fill(138, 54, 15);
  rect(x + 5, y + 25, m, m)
  rect(x + 10, y + 25, m, m)
  rect(x + 15, y + 25, m, m)
  rect(x + 40, y + 25, m, m)
  rect(x + 45, y + 25, m, m)
  rect(x + 50, y + 25, m, m)
  rect(x, y + 30, m, m)
  rect(x + 5, y + 30, m, m)
  rect(x + 10, y + 30, m, m)
  rect(x + 15, y + 30, m, m)
  rect(x + 40, y + 30, m, m)
  rect(x + 45, y + 30, m, m)
  rect(x + 50, y + 30, m, m)
  rect(x + 55, y + 30, m, m)
  rect(x + 10, y - 35, m, m)
  rect(x + 15, y - 35, m, m)
  rect(x + 20, y - 35, m, m)
  rect(x + 15, y - 30, m, m)
  rect(x + 15, y - 25, m, m)
  rect(x + 20, y - 25, m, m)
  rect(x + 5, y - 30, m, m)
  rect(x + 5, y - 25, m, m)
  rect(x + 5, y - 20, m, m)
  rect(x + 10, y - 20, m, m)

  fill(255, 184, 136);
  rect(x + 10, y - 30, m, m)
  rect(x + 10, y - 25, m, m)
  rect(x + 25, y - 35, m, m)
  rect(x + 30, y - 35, m, m)
  rect(x + 40, y - 35, m, m)
  rect(x + 20, y - 30, m, m)
  rect(x + 25, y - 30, m, m)
  rect(x + 30, y - 30, m, m)
  rect(x + 40, y - 30, m, m)
  rect(x + 45, y - 30, m, m)
  rect(x + 50, y - 30, m, m)
  rect(x + 25, y - 25, m, m)
  rect(x + 30, y - 25, m, m)
  rect(x + 35, y - 25, m, m)
  rect(x + 45, y - 25, m, m)
  rect(x + 50, y - 25, m, m)
  rect(x + 55, y - 25, m, m)
  rect(x + 15, y - 20, m, m)
  rect(x + 20, y - 20, m, m)
  rect(x + 25, y - 20, m, m)
  rect(x + 30, y - 20, m, m)
  for (let offset = 15; offset <= 45; offset += 5)
    rect(x + offset, y - 15, m, m)

  fill(40, 40, 200);
  rect(x + 20, y - 10, m, m)
  rect(x + 20, y - 5, m, m)
  rect(x + 20, y , m, m)
  rect(x + 25, y , m, m)
  rect(x + 30, y , m, m)
  rect(x + 35, y , m, m)
  rect(x + 35, y - 5, m, m)
  rect(x + 35, y , m, m)
  rect(x + 15, y + 5, m, m)
  rect(x + 25, y + 5, m, m)
  rect(x + 30, y + 5, m, m)
  rect(x + 40, y + 5, m, m)
  for (let offset = 15; offset <= 40; offset += 5)
    rect(x + offset, y + 10, m, m)
  for (let offset = 10; offset <= 45; offset += 5)
    rect(x + offset, y + 15, m, m)
  rect(x + 10, y + 20, m, m)
  rect(x + 15, y + 20, m, m)
  rect(x + 20, y + 20, m, m)
  rect(x + 35, y + 20, m, m)
  rect(x + 40, y + 20, m, m)
  rect(x + 45, y + 20, m, m)


  fill(0, 0, 0);
  rect(x + 35, y - 35, m, m)
  rect(x + 35, y - 30, m, m)
  rect(x + 40, y - 25, m, m)
  for (let offset = 35; offset <= 50; offset += 5)
    rect(x + offset, y - 20, m, m)

  fill(255, 230, 0);
  rect(x + 20, y + 5, m, m)
  rect(x + 35, y + 5, m, m)

  fill(255)
  for (let offset = 0; offset <= 5; offset += 5)
    rect(x + offset, y + 5, m, m)
  for (let offset = 50; offset <= 55; offset += 5)
    rect(x + offset, y + 5, m, m)
  rect(x, y + 10, m, m)
  rect(x + 5, y + 10, m, m)
  rect(x + 10, y + 10, m, m)
  rect(x + 45, y + 10, m, m)
  rect(x + 50, y + 10, m, m)
  rect(x + 55, y + 10, m, m)
  rect(x, y + 15, m, m)
  rect(x + 5, y + 15, m, m)
  rect(x + 50, y + 15, m, m)
  rect(x + 55, y + 15, m, m);
  } else {
  fill(220, 40, 40);
  for(let offset = 30; offset <= 50; offset += 5)
    rect(x + offset, y - 40, m, m)
  for(let offset = 25; offset <= 65; offset += 5)
    rect(x + offset, y - 35, m, m)
  for(let offset = 10; offset <= 60; offset += 5)
    rect(x + offset, y - 5, m, m)
  for(let offset = 5; offset <= 55; offset += 5)
    rect(x + offset, y, m, m)
  for(let offset = 10; offset <= 35; offset += 5)
    rect(x + offset, y + 5, m, m)
  rect(x + 30, y + 10, m, m)


  fill(138, 54, 15);
  for(let offset = 25; offset <= 35; offset += 5)
    rect(x + offset, y - 30, m, m)
  for(let offset = 20; offset <= 30; offset += 5)
    rect(x + offset, y - 25, m, m)
  for(let offset = 20; offset <= 35; offset += 5)
    rect(x + offset, y - 20, m, m)
  rect(x + 20, y - 15, m, m)
  rect(x + 25, y - 15, m, m)
  for(let offset = 45; offset <= 65; offset += 5)
    rect(x + 75, y + offset - 45, m, m) 
  for(let offset = 55; offset <= 65; offset += 5)
    rect(x + 70, y + offset - 45, m, m) 
  for(let offset = 60; offset <= 70; offset += 5)
    rect(x + 15, y + offset - 45, m, m)
  rect(x + 10, y + 20, m, m)
  rect(x + 10, y + 25, m, m)
  rect(x + 5, y + 25, m, m)
  rect(x + 5, y + 30, m, m)
  rect(x + 20, y + 20, m, m)


  fill(255, 184, 136);
  rect(x + 40, y - 30, m, m)
  rect(x + 45, y - 30, m, m)
  rect(x + 55, y - 30, m, m)
  rect(x + 25, y - 25, m, m)
  rect(x + 25, y - 20, m, m)
  for(let offset = 40; offset <= 60; offset += 5)
    rect(x + offset, y - 25, m, m)
  for(let offset = 35; offset <= 70; offset += 5)
    rect(x + offset, y - 20, m, m)
  for(let offset = 30; offset <= 45; offset += 5)
    rect(x + offset, y - 15, m, m)
  for(let offset = 30; offset <= 60; offset += 5)
    rect(x + offset, y - 10, m, m)
  rect(x + 35, y - 25, m, m)


  fill(40, 40, 200);
  rect(x + 35, y - 5, m, m)
  rect(x + 55, y - 5, m, m)
  rect(x + 40, y, m, m)
  rect(x + 60, y, m, m)
  for(let offset = 40; offset <= 60; offset += 5)
    rect(x + offset, y + 5, m, m)
  for(let offset = 20; offset <= 65; offset += 5)
    rect(x + offset, y + 10, m, m)
  for(let offset = 20; offset <= 65; offset += 5)
    rect(x + offset, y + 15, m, m)
  for(let offset = 25; offset <= 65; offset += 5)
    rect(x + offset, y + 20, m, m)
  for(let offset = 20; offset <= 50; offset += 5)
    rect(x + offset, y + 25, m, m)
  for(let offset = 20; offset <= 35; offset += 5)
    rect(x + offset, y + 30, m, m)
  for(let offset = 65; offset <= 75; offset += 5)
    rect(x + offset, y - 30, m, m)
  for(let offset = 65; offset <= 75; offset += 5)
    rect(x + offset, y - 25, m, m)
  rect(x + 75, y - 20, m, m)
  rect(x + 70, y - 15, m, m)
  rect(x + 65, y - 10, m, m)

  fill(0, 0, 0);
  rect(x + 50, y - 30, m, m)
  rect(x + 50, y - 25, m, m)
  rect(x + 55, y - 20, m, m)
  for(let offset = 50; offset <= 70; offset += 5)
    rect(x + offset, y - 15, m, m)


  fill(255, 230, 0);
  rect(x + 45, y + 10, m, m)
  rect(x + 60, y + 10, m, m)


  fill(255)
  for(let offset = 65; offset <= 75; offset += 5)
    rect(x + offset, y - 45, m, m)
  for(let offset = 65; offset <= 75; offset += 5)
    rect(x + offset, y - 40, m, m)
  rect(x + 70, y - 35, m, m)
  rect(x + 75, y - 35, m, m)
  rect(x, y + 5, m, m)
  rect(x, y + 10, m, m)
  rect(x + 5, y + 5, m, m)
  rect(x + 5, y + 10, m, m)
  rect(x + 5, y + 15, m, m)
  rect(x + 10, y + 10, m, m)
  }
}