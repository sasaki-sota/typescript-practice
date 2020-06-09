export {};

// number型の配列の定義
// numbersの上にカーソル合わせてみることもできるようになっている
let numbers: number[] = [1,2,3];

// 非推奨の書き方
let numbers2: Array<number> = [1,2,3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['Javascript', 'Java', 'Kotlin'];

// 二次元配列の定義の仕方
let  nigigenhairetu: number[][] = [
    [50, 100],
    [150, 300]
];

// カーソル合わせるのがとても優秀
// ｜はorを表す　＝　複数の型を並べておく
let hairetu: (string | number | boolean)[] = [1,false,'japan'];


