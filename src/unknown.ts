export {};

// 数値を返す関数
// アロー関数で定義
const kansu = (): number => 43;
// const kansu = function(){
//     return 43
// };

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// typeof で型を取得する
// ここの部分の出力でnumber型を取得できる
// console.log(typeof numberUnknown);

// すでにUnknown型を定義していれば関数が数値でないことを検知してエラーを吐いていくれる
// let sumUnknown = numberUnknown + 10;

// 型ガードの部分はしっかりと学習する
// もしunknownの部分の方がnumberがtrueの場合
if (typeof numberUnknown === "number") {
    let sumUnknown = numberUnknown + 10;
}