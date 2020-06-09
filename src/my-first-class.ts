export {};

class Person {
	name: string;
	age: number;
	
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	
	//文字列を返すメソッド
	profile(): string {
		return `name: ${this.name}, age: ${this.age}`;
	}
}

let taro = new Person('Taro', 30);
console.log(taro.profile());