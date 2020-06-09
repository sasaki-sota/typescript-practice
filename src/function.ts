
export {};

// 引数を型付けないとanyになってしまう
// 返り値もnumberなので型をつける
function bmi(height: number, weight: number): number {
    return weight / (height * height);
}

console.log(bmi(1.9, 78));