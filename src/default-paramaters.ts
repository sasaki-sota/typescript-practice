export {};

// 今年の年俸とレイトを計算する定数
// もし引数がない場合は1.1が採用される
const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
    return currentSalary * rate;
};

console.log(nextYearSalary(1000));