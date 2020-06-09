export {};

// object型は複雑な型
// オブジェクト全般を使える型
let profile1: object = {name: 'Souta'};

// 制約が甘い
profile1 = {brithYear: 1976 };

// プロパティと方を宣言することができるようになる
let profile2: {
    name: string
} = {name: 'Souta'};

profile2 = {name: 'Ryouta'};