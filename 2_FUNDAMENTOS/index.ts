let x: number = 10;

console.log(x);


x = 15;

console.log(typeof x);


const y: number = 15.43234234234;
console.log(typeof y);


//using numbers method
console.log(y.toPrecision(3));



//string

const firstName: string = "yan";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Carvalho";

fullName = firstName +  " " + lastName;

fullName = fullName.toUpperCase();
console.log(fullName, typeof fullName);



//boolean

let a: boolean = false;

a = true;

console.log(a, typeof a);


//4 - inference and annotation


let ann: string = "teste";

//ts define the type
let inf = "teste";

// inf = 1; ts blockcs  because I understand that inf is a string

console.log('testadno 3');


//tasl

const n = 5;
const numberString = n.toString();
// console.log(numberString, typeof numberString)
console.log('Imprimindo numero', numberString);






