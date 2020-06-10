export {};

// owner = 所有者を管理するもの
// 初期化時に設定することができる
// 途中で変更できないようにする。
// 参照できるものにする。

// secretNumber = 個人番号
// 初期化時に設定することができる
// 途中で変更可能なものにする
// 参照できない

class MyNumberCard {
	// private をつけて変更できないようにする
	private _owner: string;
	private _secretNumber: number;
	
	constructor(owner: string, secretNumber: number) {
		this._owner = owner;
		this._secretNumber = secretNumber;
	}
	
	// 参照専用のメソッド(getter)
	// _ownerをつけて専用にする
	get owner() {
		return this._owner;
	}
	
	// 値を設定するときのみのメソッド(setter)
	set secretNumber(secretNumber: number) {
		this._secretNumber = secretNumber;
	}
	
	// 値を表示するメソッド（デバックよう)
	debugprint() {
		return `secretNumber: ${this._secretNumber}`;
	}
}

let card = new MyNumberCard('Souta', 4273);
// card.owner = 'Ryota';
console.log(card.owner);
console.log(card.debugprint());

// 数値を変更できるかどうかを検証
card.secretNumber = 27342842847;
console.log(card.debugprint());

// ここの部分は開くことができないようになっている
console.log(card.secretNumber);
