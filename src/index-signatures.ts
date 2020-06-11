export {};

// これから動的に様々なものを作る
// nameが決まっていないので?をつける
// let profile: {name?: string} = {};

interface Profile {
	name: string;
	// 未成年かどうかを判別するメソッド
	underTwenty: boolean;
	[index: string]: string | number | boolean;
}

let profile: Profile = {name: 'Souta' ,underTwenty: false};

// index-signatureをかく
// { [ index: typeForIndex]; typeForValue }
profile.name = 'Souta';
profile.age = 43;
// 未知のプロパティを追加しても平気
profile.nationality = 'Japan';
