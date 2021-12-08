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

//objeto
let person: {name: string; age: number, adult?: boolean} = {
    name: 'jonathan',
    age: 30,

}

console.log(person.name);
