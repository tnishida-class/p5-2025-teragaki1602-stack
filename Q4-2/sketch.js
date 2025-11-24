// 折れ線グラフ
function setup() {
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for (let i = 0; i < 10; i++) {
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for (let i = 0; i < n; i++) { line(0, height * i / n, width, height * i / n); }




  noStroke();
  for (let i = 0; i < scores.length; i++) {
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    fill(0);
    ellipse(i * dx + 20, height - h, 5)
  }
  // ここからが本番
  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < scores.length - 1; i++) {
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    const x1 = i * dx + 20
    const y1 = height - h

    const h2 = height * scores[i + 1] / 100
    const x2 = (i + 1) * dx + 20
    const y2 = height - h2;
    line(x1, y1, x2, y2)

  }
}
