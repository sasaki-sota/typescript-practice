export {};

// abstract を使用することで抽象くらす
abstract class Animal {
	// 抽象メソッド
	abstract cry(): string;
}

class Lion extends Animal {
	cry(): string {
		return "roar";
	}
}

// メソッドを使っていない場合エアラーをはく
class Tiger extends Animal {
	cry(): string {
		return "gerrrr";
	}
}