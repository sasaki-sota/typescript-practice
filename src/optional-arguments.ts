export {};

// 引数の最後に？があるとあってもなくてもいいものになる
///ここで引数のアノテーションの設定
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    // こっちは実際の引数の設定
    height: number,
    weight: number,
    printable?: boolean
): number => {
    // bmiの計算式を定数として定義
    const bmi: number = weight / (height * height);

    if (printable) {
        console.log({ bmi });
    }
    return  bmi;
};

bmi(1.9, 78, true);

// あってもなくてもいい引数