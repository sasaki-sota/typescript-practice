export {};

class Animal {
	// 初期化処理
	constructor(public name: string) {}
	
	run(): string {
		return 'I can run.';
	}
}

// 継承しているのでsuperが必要
// speedはlionのみ
class Lion extends Animal {
	public speed: number;
	
	// 継承されたnameのみ初期化処理がされている
	constructor(name: string, speed: number) {
		// 継承で行われる
		super(name);
		
		this.speed = speed;
	}
	
	
	run(): string {
		// 継承してくるrunクラスを行う
		return `${super.run()} ${this.speed}km/h`;
	}
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Souta').run());
console.log(new Lion('Sasaki', 32).run());
