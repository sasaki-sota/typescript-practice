export {};

// シグネチャー　＝　概要のみを書いたもの
// 関数の前を書く
// rubyのdbのschamaのようなもの
function double(value: number): number;
function double(value: string): string;


 // 引数の数の２倍の数字を返す関数
// シグネチャーで型宣言しているのでany型でおっけ
function double(value: any): any {
    console.log(typeof value);
    if (typeof value === "number") {
        return value * 2;
    } else {
        return  value + value;
    }
}


console.log(double(100));
console.log(double('Go '));
// console.log(double(true));

