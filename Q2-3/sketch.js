// ギリシャ国旗（ほかの国旗に挑戦してもOK）

//function setup() {
  createCanvas(270, 180
  );
  noStroke();
  background(255);

  const d = height / 9; // 縞1本の太さ
  const blue = color(0, 51, 160);
rect(0, 0, 270, 180)
fill(blue)

  // 縞を描く
  for(let i = 0; i < 9; i++){
    // BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
   if(i%2==1){
       fill(255)
    }
    else{
      fill(blue)
    };
    rect(0, i * d, width, d)
  }
      
  

  // 十字を描く
  const size = d * 5;
  fill(blue);
  rect(0, 0, size, size);
  fill(255);
  rect(d * 2, 0, d, size);
  fill(0);
  
  
  // BLANK[2] 十字を完成させよう
  fill(255);
  rect(0, d * 2, size, d);
//}


let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);

  // 速度は「位置の変化量」
  x += vx;
  y += vy;

  // 跳ね返りは「速度 × -1」
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }

  // x座標, y座標を画面内に戻しておく
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}