//プロゲート1

//じゃんけん
var p1 = 0;
var p2 = 0;
var p1_win = 0;
var p1_lose = 0;
var p1_draw = 0;

for(let i = 0; i <= 5; i++){
   p1 = Math.floor(Math.random()*3);
   p2 = Math.floor(Math.random()*3);

   if(p1 === p2){
      console.log("あいこ");
      p1_draw += 1;
   }else if(p1 === 0 && p2 === 1 || p1 === 1 && p2 === 2 || p1 === 2 && p2 === 0){
      console.log("p1の勝ち");
      p1_win += 1;
   }else{
      console.log("p1の負け");
      p1_lose += 1;
   }
}
console.log(`${p1_win}勝${p1_lose}敗${p1_draw}分`);

//「+=」はNumber型で定義すると適用されない