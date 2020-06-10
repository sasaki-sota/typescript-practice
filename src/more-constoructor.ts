export {};

// パーソンクラスの作成
// constructorの引数にアクセス修飾子を書くと自動で初期化してくれる
class Person {
	constructor(public name: string, protected age: number) {}
}

const me = new Person('Souta', 19);
console.log(me);