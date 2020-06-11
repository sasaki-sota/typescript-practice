export {};

class Mahoutukai {
	
}

class Souryo {

}

// 継承は一つまでしかできない
class Taro extends Mahoutukai {

}

// インターフェースはすべてのクラスが抽象メソッドのようなさらに、複数の継承をすることができる

interface Kenja {
	// データがないのでセミコロン
	ionazun(): void;
}

interface Senshi {
	kougeki(): void;
}

// 実装する　＝　インプリメント
// 複数の実装ができるようになる
class Jiro implements Kenja, Senshi{
	 ionazun() {
	 	console.log('ionazun');
	 }
	 
	 // 継承したので使用することができる
	 kougeki() {
	 	console.log('kougeki');
	 }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();