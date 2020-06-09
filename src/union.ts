export {};

// この書き方でnumberかstringなら認証することができるようになる
let value: number | string = 1;
value = 'foo';
value = 1;
