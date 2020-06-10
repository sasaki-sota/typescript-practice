export {};

// readonly = クラスの修飾子を読み込み専用にするために使用するもの

class VisaCard {
	// readonly owner: string
	// このように書くことができる
	constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Souta');
console.log(myVisaCard.owner);
myVisaCard.owner = 'Beki';