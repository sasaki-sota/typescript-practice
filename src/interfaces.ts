export {};

type ObjectType = {
    name: string,
    age: number
};

// エリアスではない
// つまり別名をつけているわけではない
interface ObjectInterface {
    name: string,
    age: number
};

// let object: {name: string; age: number } = {
// 上のように作成されたものに変換できる
let object: ObjectInterface = {
    name: 'Souta',
    age: 19
};