export {};

// 静的メンバー　＝　クラスで書いているとクラスからインスタンスを作成して属性を参照してきた
// この時にnewを使用していた

// newを使わないとアクセスできない
// staticをつけると静的メンバーに変換される
// インスタンスを使用しなくても良くなる(new)
class Me {
	static programmer: boolean = true;
	static firstName: string = 'Souta';
	static lastName: string = 'Sasaki';
	
	static work() {
		return "Hey, guys! Are you interested in TypeScript?"
	}
}

// let me = new Me();
// console.log(me.programmer);

// 静的メンバーへのアクセス
// クラス名を書いてアクセスする
// 静的メンバーはnewでインスタンスを作る必要がない
console.log(Me.programmer);
console.log(Me.work());