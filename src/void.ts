export {};

// returnが存在しない関数
// A function whose declared type is neither 'void' nor 'any' must return a value
// この関数がvoidでもanyでもない場合
function returnNothing(): void {
    console.log("I don't return anything");
}

console.log(returnNothing());