export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// 無事に代入できる
// any型はstring型と互換性がある
fooCompatible = barCompatible

console.log(typeof fooCompatible);

let fooInpatible: string;
let barInpatible: number = 1;

// numberとstringでは互換性がない
// 型の互換性について理解をしておく

// fooInpatible = barInpatible;

let fooString: string;
let barString: string = 'string';

// 同じ型なので大丈夫
fooString = barString;

let fooStringliteral: 'fooStringLiteral' = 'fooStringLiteral';

// 文字列リテラル型も互換性がある
fooString = fooStringliteral;

let fooNumber: number;

// リテラルではその型の値のみ
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
	age: number;
	name: string;
}

class Person {
	constructor(public age: number, public name: string) {
	}
}

// interfaceのアニマル
let me: Animal;

// animalの互換性が発生してくる
me = new Person(43, 'Souta');