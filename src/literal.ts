export {};

// 曜日を管理する関数
// これで曜日以外はコンパイルできない
let dayOfTheWeek: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
dayOfTheWeek = '月';

let month: 1|2|3|4|5|6 = 1;
month = 6;

// trueのみ許容
let TRUE: true = true;