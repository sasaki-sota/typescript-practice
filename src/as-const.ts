export {};

let name = 'Souta';
name = 'Sasaki';

// as const を使用するとこの場合Souta以外では変更できない
let nickname = 'Souta' as const;

let profile = {
	name: 'Souta',
	height: 178
} as const;

// このように再代入を許せない時にconstアサーションが使える
// 値を変えたくない場合
// profile.name = 'Gyo';
// profile.height = 180;