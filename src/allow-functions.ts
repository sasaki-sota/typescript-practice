export {};

// アロー関数での書き方
let bmi = (height: number, weight: number): number => {
    return weight / (height * height);
};

console.log(bmi(1.9, 86));