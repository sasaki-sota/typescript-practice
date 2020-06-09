export {};

let bmi = function (height: number, weight: number): number {
    return weight / (weight * weight);
};

console.log(bmi(1.9, 0.56));