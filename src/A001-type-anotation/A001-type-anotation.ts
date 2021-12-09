/* eslint-disable */
let names: string  ="luiz";
let age: number  =  28;
let adult: boolean  = true;
let s: symbol   = Symbol("any symbol");
// let big: bigint  = 10n;


//Arrays
let numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
let numberArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let stringArray: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f'];

//Object
let person: {name: string; age: number, adult?: boolean} = {
    name: 'jonathan',
    age: 30,

}

//Functions
function sum(x: number, y:number): number {
    return x + y;

}
const sum2: (x: number, y:number) => number = (x, y) => x + y;
