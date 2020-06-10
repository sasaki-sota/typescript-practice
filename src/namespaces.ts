export {};

// namespace の中にnamespecaはかける
// これで一つ下のディレクトリに移動した感じ
namespace Japanese {
	// ここでもexportしてあげて外で使えるようにする
 	export namespace Tokyo {
		// export を書くことで外の環境で使うことができるようになる
		export class Person {
			constructor(public name: string) {}
		}
	}
	
	export namespace Osaka {
		// export を書くことで外の環境で使うことができるようになる
		export class Person {
			constructor(public name: string) {}
		}
	}
}

// これを使うことによって同名クラスをかける
namespace English {
	export class Person {
		constructor(
			public firstName: string,
			public middleName: string,
			public lastName: string
		) {}
	}
}

// ここの部分でJapaneseの中に入っているので最初に書くことが必要になっていく
const me = new Japanese.Tokyo.Person('souta');
console.log(me.name);

const my = new English.Person('Jon', 'Hi', 'Tenga');
console.log(my.firstName);

const mesa = new Japanese.Osaka.Person('Him');
console.log(mesa.name);