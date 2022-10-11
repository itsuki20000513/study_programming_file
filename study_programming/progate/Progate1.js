/*
プロゲート1
<行ったこと>
・出力
・コメントアウト
・四則演算
　累乗演算の際は「^」を使わず、Math.pow(底,指数)を使う
・文字の連結(テンプレートリテラルを含む)
・変数、定数(宣言と更新)
　var[変数]ー＞再宣言・再代入可能、どこからでも呼び出せる
  let[変数]ー＞再宣言不可・再代入可能、ブロック{}の外側からは呼べない
  const[定数]ー＞再宣言・再代入不可、ブロック{}の外側からは呼べない
・条件分岐(if文、case文)
　if->セミコロン不要(内部の処理には必要)
　case->セミコロン不要(内部の処理には必要)
　　　　　caseごとに「break」を付ける(これ以上処理を行わないということ)
　　　　　caseにあてはまらない場合はdefault(ifでいうelse)
・比較演算
・論理演算
*/

//じゃんけん
var p1 = 0;
var p2 = 0;
var p1_win = 0;
var p1_lose = 0;
var p1_draw = 0;

for (i = 0; i <= 5; i++){
   p1 = Math.floor(Math.random()*3);
   p2 = Math.floor(Math.random()*3);
   if(p1 === p2){
      p1_draw += 1;
      console.log("あいこ")
   }else if(p1 === 0 && p2 === 1 || p1 === 1 && p2 === 2 || p1 === 2 && p2 === 0){
      p1_win += 1;
      console.log("p_1の勝ち")
   }else{
      p1_lose += 1;
      console.log("p_1の負け")
   }
};
console.log(`${p1_win}勝${p1_lose}敗${p1_draw}分`);


