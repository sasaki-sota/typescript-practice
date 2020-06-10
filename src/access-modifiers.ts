export {};

// publicなら使えるが、privateならここのクラスの部分のみでしか使えない
class Person {
	public name: string;
	// personクラスのみでしか使えない
	// private age: number;
	protected age: number;
	protected nationality: string;
	
	constructor(name: string, age: number, nationality: string) {
		this.name = name;
		this.age = age;
		this.nationality = nationality
	}
	
	//文字列を返すメソッド
	profile(): string {
		return `name: ${this.name}, age: ${this.age}`;
	}
}

// extendsでパーソンを継承
// 親クラスがPersonとなる
class Android extends Person {
	constructor(name: string, age: number, nationality: string) {
		// superを使うことでPresonと同じものを使える(constructorの部分)
		super(name, age, nationality);
	}
	
	profile(): string {
		return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
	}
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name);
console.log(taro.profile());