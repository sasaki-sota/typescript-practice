export {};

// 受け取った数字を返す関数
// const echo = (arg: number): number => {
// 	return arg;
// };
//
// // 同じようなもの
// const echo = (arg: string): string => {
// 	return arg;
// };

// <> = ジェネリクスの型であり、stringにもnumberにもなる(なんの型なのかわからない)
const echo = <T>(arg: T): T => {
	return arg;
};

// ここの部分で初めて型がわかる
// 型を指定するだけで無限に関数を作れる
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
	constructor(public value: T) {
	}
	
	echo(): T {
		return this.value;
	}
}

// このように明確に型をつけることができる
// 実装コストを下げることができる
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello').echo());
console.log(new Mirror<boolean>(true).echo());