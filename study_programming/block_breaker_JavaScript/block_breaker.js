//canvasの領域設定
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
/* ->グラフィックを描画するためのメソッドやプロパティを持つオブジェクトを返す
     引数に2dを渡すと2Dグラフィックを描画するためのメソッドやオブジェクトを返す*/
 
canvas.width = 400;
canvas.height = 400;

canvas.setAttribute('style', 'display:block;margin:auto;background-color: #ddd');   //指定した要素に新しい属性を追加する(canvasの配置箇所やbackgroundなど)

document.body.appendChild(canvas);//append Child -> 指定した親ノードに子ノードを追加する

const ball = {
   x: null,
   y: null,
   width: 5,
   height: 5,
   speed: 4,
   dx: null,//ボールがx方向に移動する時の値
   dy: null,//ボールがy方向に移動する時の値

   //ボールの描画
   update: function(){
      ctx.fillRect(this.x, this.y, this.width, this.height); //fillRect -> 四角形を描画する
                                                            //this.x -> initで代入されたxの値
      ctx.fill();

      if (this.x < 0 || this.x > canvas.width) this.dx *= -1; //ボールが壁に当たった時の跳ね返り
      if (this.y < 0 || this.y > canvas.height) this.dy *= -1; //ボールが天井または底に当たった時の跳ね返り

      this.x += this.dx;
      this.y += this.dy;
   }

}
const paddle = {
   x: null,
   y: null,
   width: 100,
   height: 15,
   speed: 0,
   
   //パドルの描画
   update: function() {
      ctx.fillRect(this.x, this.y, this.width, this.height); 
      ctx.fill();

      this.x += this.speed
   } 
}
const block = {
   width: null, //canvasの領域によって可変させるため
   height: 20,
   data: [],//各ブロックの座標を入れる

   update: function(){
      this.data.forEach(brick => {
         ctx.strokeRect(brick.x, brick.y, brick.width, brick.height); //strokeRect -> 線画の四角形、塗りつぶしなし
         ctx.stroke;
      })
   }

}
const level = [
   //ブロックを配置しない配列
   [0,0,0,0,0,0],
   [0,0,0,0,0,0],

   //ブロックを配置する配列
   [1,1,1,1,1,1],
   [1,1,1,1,1,1],
   [1,1,1,1,1,1],
   [1,1,1,1,1,1],
]

//初期化
const init = () => {
   paddle.x = canvas.width / 2 - paddle.width / 2;
   paddle.y = canvas.height - paddle.height;

   ball.x = canvas.width / 2;
   ball.y = canvas.height / 2 + 150;
   ball.dx = ball.speed;
   ball.dy = ball.speed;

   block.width = canvas.width / level[0].length;

   for(let i = 0; i < level.length; i++){
      for(let j = 0; j < level[i].length; j++){
         if(level[i][j]){
            block.data.push({
               x: block.width * j,
               y: block.height * i,
               width: block.width,
               height: block.height
            })
         }
      }
   }
}
const collide = (obj1, obj2) => {
   return obj1.x < obj2.x + obj2.width &&
          obj2.x < obj1.x + obj1.width &&
          obj1.y < obj2.y + obj2.height &&
          obj2.y < obj1.y + obj1.height;
}
const loop = () => {
   ctx.clearRect(0,0,canvas.width,canvas.height);//clearRect・・・指定した範囲の描画を削除

   paddle.update();
   ball.update();
   block.update();

   if (collide(ball,paddle)){
      ball.dy *= -1;
      ball.y = paddle.y - ball.height;
   }

   block.data.forEach((brick,index) => {
      if(collide(ball,brick)){
         ball.dy *= -1;
         block.data.splice(index, 1);
      }
   })

   //ctx.arc(canvas.width/2,canvas.height/2,50,0,3*Math.PI,true); - 円形の描画

   window.requestAnimationFrame(loop);//ブラウザごとに最適なloop処理を行う
}//フレームごとの繰り返し処理

init();//init処理の呼び出し
loop();//loop処理の呼び出し

document.addEventListener('keydown', e => {  //addEventListener -> マウスやキーボード等のインターフェースを使用したイベント実行の処理
   if(e.key === "ArrowLeft") paddle.speed = -6;
   if(e.key === "ArrowRight") paddle.speed = 6;
});//キーを押した時の処理
document.addEventListener('keyup', () => {
   paddle.speed = 0;
});//キーを離した時の処理

//git test2