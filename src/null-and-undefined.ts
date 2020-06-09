export {};

// 型推論ではnull型は持たせてくれない
// nullのみ許容してくれる型
let absence: null = null;
// absence = 'hello';

// undefinedのみを許容する型
let data: undefined = undefined;

// data = 12