export {};

// numberかnullとなるようにしてユニオン型を使う
let profile: {name: string, age: number | null} = {
	name: 'Ham',
	// tsconfig.jsonのnullchecksをしており、これだとどんなものでもnullが描けるようになってしまった
	age: null
};

