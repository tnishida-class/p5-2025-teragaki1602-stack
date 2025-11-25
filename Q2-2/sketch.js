// チェッカー
function setup() {
  createCanvas(400, 400);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i%2==0 && j%2==0) || (i%2==1 && j%2==1 ))  {
        fill(255)
        } // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
    else{
      fill(150)
    }
    rect(i * 50 ,j * 50, 50, 50)
      }
  }


  for(let I = 0; I < 8; I++){
    for(let J = 0; J < 8; J++){
      if((I%2==0 && J%2==0) || (I%2==1 && J%2==1)){
        fill(255)
        }
        else if(J<3){
          fill(255,0,0)
        }
        else if(J>4){
          fill(0)
        }
        else{
          fill(150)
        }
        ellipse(I * 50 + 25,J * 50 + 25,40,40)
    }
  }
}