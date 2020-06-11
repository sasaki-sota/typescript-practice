export {};

let name: any = 'Souta';

// lengthの型を適切にする
// 文字列を数えるのでnumber型
// asを使用することでnumber型になる
let length = (<string>name).length;

// length = 'foo';