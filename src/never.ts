export {};

// never型 = 呼び元に戻ってこない型(例外が起きるため)

// 例外が起きる関数(エラーが起きる関数)
function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('test');
    console.log({ result });
} catch (error) {
    console.log({ error });
}

// voidにはundefinedが使える
let foo: void = undefined;

// never型にはそもそも代入がない
// never型を返す関数であれば唯一代入できる
let bar: never = error('only me');