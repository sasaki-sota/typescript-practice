export {};

const reducer = (accumulator: number, currentValue: number) => {
    console.log({accumulator, currentValue});
    return  accumulator + currentValue;
};


// rest-parameter =
// 上限のない引数を受け取ることができるようになる（...~)とする
const sum = (...values: number[]): number => {
    // 足算をする関数
    return values.reduce(reducer)
};

console.log(sum(1,2,3,4,5));            

