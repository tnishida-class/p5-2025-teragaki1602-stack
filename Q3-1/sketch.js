const cycle = 300; // 1周期のフレーム数（定数）
let count = 0; // 現在のフレーム数（変数）
let size = 50;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if (keyIsPressed) {
    count = (count + 100) % cycle;
  }
  if (count < cycle / 2) {
    size = 50 + cycle - count;
  } else {
    size = 50 + count;
  } 
  fill(220, 40, 40);
for (let offset = 15; offset <= 35; offset += 5) {
  // y を y - 45 に変更
  rect(x + offset, y - 45, m, m); 
}
for (let offset = 10; offset <= 50; offset += 5) {
  // y + 5 を y + 5 - 45 = y - 40 に変更
  rect(x + offset, y - 40, m, m); 
}
// y + 35 を y + 35 - 45 = y - 10 に変更
rect(x + 10, y - 10, m, m)
rect(x + 15, y - 10, m, m)
rect(x + 25, y - 10, m, m)
rect(x + 30, y - 10, m, m)
rect(x + 35, y - 10, m, m)
// y + 40 を y + 40 - 45 = y - 5 に変更
rect(x + 5, y - 5, m, m)
rect(x + 10, y - 5, m, m)
rect(x + 15, y - 5, m, m)
rect(x + 25, y - 5, m, m)
rect(x + 30, y - 5, m, m)
rect(x + 40, y - 5, m, m)
rect(x + 45, y - 5, m, m)
rect(x + 50, y - 5, m, m)
// y + 45 を y + 45 - 45 = y に変更
rect(x , y , m, m)
rect(x + 5, y , m, m)
rect(x + 10, y , m, m)
rect(x + 15, y , m, m)
rect(x + 40, y , m, m)
rect(x + 45, y , m, m)
rect(x + 50, y , m, m)
rect(x + 55, y , m, m)
// y + 50 を y + 50 - 45 = y + 5 に変更
rect(x + 10, y + 5, m, m)
rect(x + 45, y + 5, m, m)

// --- 2. 茶色 (R:138, G:54, B:15) ---
fill(138, 54, 15);
// y + 70 を y + 70 - 45 = y + 25 に変更
rect(x + 5, y + 25, m, m)
rect(x + 10, y + 25, m, m)
rect(x + 15, y + 25, m, m)
rect(x + 40, y + 25, m, m)
rect(x + 45, y + 25, m, m)
rect(x + 50, y + 25, m, m)
// y + 75 を y + 75 - 45 = y + 30 に変更
rect(x, y + 30, m, m)
rect(x + 5, y + 30, m, m)
rect(x + 10, y + 30, m, m)
rect(x + 15, y + 30, m, m)
rect(x + 40, y + 30, m, m)
rect(x + 45, y + 30, m, m)
rect(x + 50, y + 30, m, m)
rect(x + 55, y + 30, m, m)
// y + 10 を y + 10 - 45 = y - 35 に変更
rect(x + 10, y - 35, m, m)
rect(x + 15, y - 35, m, m)
rect(x + 20, y - 35, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 15, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 15, y - 25, m, m)
rect(x + 20, y - 25, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 5, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 5, y - 25, m, m)
// y + 25 を y + 25 - 45 = y - 20 に変更
rect(x + 5, y - 20, m, m)
rect(x + 10, y - 20, m, m)

// --- 3. 肌色 (R:255, G:184, B:136) ---
fill(255, 184, 136);
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 10, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 10, y - 25, m, m)
// y + 10 を y + 10 - 45 = y - 35 に変更
rect(x + 25, y - 35, m, m)
rect(x + 30, y - 35, m, m)
rect(x + 40, y - 35, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 20, y - 30, m, m)
rect(x + 25, y - 30, m, m)
rect(x + 30, y - 30, m, m)
rect(x + 40, y - 30, m, m)
rect(x + 45, y - 30, m, m)
rect(x + 50, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 25, y - 25, m, m)
rect(x + 30, y - 25, m, m)
rect(x + 35, y - 25, m, m)
rect(x + 45, y - 25, m, m)
rect(x + 50, y - 25, m, m)
rect(x + 55, y - 25, m, m)
// y + 25 を y + 25 - 45 = y - 20 に変更
rect(x + 15, y - 20, m, m)
rect(x + 20, y - 20, m, m)
rect(x + 25, y - 20, m, m)
rect(x + 30, y - 20, m, m)
// y + 30 を y + 30 - 45 = y - 15 に変更
for (offset = 15; offset <= 45; offset += 5)
  rect(x + offset, y - 15, m, m)

// --- 4. 濃い青 (R:40, G:40, B:200) ---
fill(40, 40, 200);
// y + 35 を y + 35 - 45 = y - 10 に変更
rect(x + 20, y - 10, m, m)
// y + 40 を y + 40 - 45 = y - 5 に変更
rect(x + 20, y - 5, m, m)
// y + 45 を y + 45 - 45 = y に変更
rect(x + 20, y , m, m)
rect(x + 25, y , m, m)
rect(x + 30, y , m, m)
rect(x + 35, y , m, m)
// y + 40 を y + 40 - 45 = y - 5 に変更
rect(x + 35, y - 5, m, m)
// y + 45 を y + 45 - 45 = y に変更
rect(x + 35, y , m, m)
// y + 50 を y + 50 - 45 = y + 5 に変更
rect(x + 15, y + 5, m, m)
rect(x + 25, y + 5, m, m)
rect(x + 30, y + 5, m, m)
rect(x + 40, y + 5, m, m)
// y + 55 を y + 55 - 45 = y + 10 に変更
for (offset = 15; offset <= 40; offset += 5)
  rect(x + offset, y + 10, m, m)
// y + 60 を y + 60 - 45 = y + 15 に変更
for (offset = 10; offset <= 45; offset += 5)
  rect(x + offset, y + 15, m, m)
// y + 65 を y + 65 - 45 = y + 20 に変更
rect(x + 10, y + 20, m, m)
rect(x + 15, y + 20, m, m)
rect(x + 20, y + 20, m, m)
rect(x + 35, y + 20, m, m)
rect(x + 40, y + 20, m, m)
rect(x + 45, y + 20, m, m)

// --- 5. 黒 (R:0, G:0, B:0) ---
fill(0, 0, 0);
// y + 10 を y + 10 - 45 = y - 35 に変更
rect(x + 35, y - 35, m, m)
// y + 15 を y + 15 - 45 = y - 30 に変更
rect(x + 35, y - 30, m, m)
// y + 20 を y + 20 - 45 = y - 25 に変更
rect(x + 40, y - 25, m, m)
// y + 25 を y + 25 - 45 = y - 20 に変更
for (offset = 35; offset <= 50; offset += 5)
  rect(x + offset, y - 20, m, m)

// --- 6. 黄色 (R:255, G:230, B:0) ---
fill(255, 230, 0);
// y + 50 を y + 50 - 45 = y + 5 に変更
rect(x + 20, y + 5, m, m)
rect(x + 35, y + 5, m, m)

// --- 7. 白色 (背景色) ---
fill(255)
// y + 50 を y + 50 - 45 = y + 5 に変更
for (offset = 0; offset <= 5; offset += 5)
  rect(x + offset, y + 5, m, m)
for (offset = 50; offset <= 55; offset += 5)
  rect(x + offset, y + 5, m, m)
// y + 55 を y + 55 - 45 = y + 10 に変更
rect(x, y + 10, m, m)
rect(x + 5, y + 10, m, m)
rect(x + 10, y + 10, m, m)
rect(x + 45, y + 10, m, m)
rect(x + 50, y + 10, m, m)
rect(x + 55, y + 10, m, m)
// y + 60 を y + 60 - 45 = y + 15 に変更
rect(x, y + 15, m, m)
rect(x + 5, y + 15, m, m)
rect(x + 50, y + 15, m, m)
rect(x + 55, y + 15, m, m);
}
