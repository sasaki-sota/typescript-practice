export {};

// 別名の型の名前（最初の文字は大文字)
type Mojiretu = string;

const fooString: string = 'Hello';
const fooMojiretu: Mojiretu = 'Hello';

const example1 = {
    name: 'Ham',
    age: 43
}

type Profile = {
    name: string,
    age: number
};
// 一度型を定義すればどこでも使用することができるようになる
const example2: Profile = {
    name: 'souta',
    age: 19
};

// typeof example1の方を検索
// 構造が変わった場合も連動して対応することができるようになる
type Profile2 = typeof example1;

