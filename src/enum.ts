export {};

// 複数あるので複数形にする
// webstrom自動で書いてくれるのでめっちゃ便利
enum Months {
    January,
    February,
}

// console.log()した場合は数値を返す
Months.January;

// 色を宣言する
enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
};