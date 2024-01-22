
const parOrImpar = (n: number): string => {
    return n % 2 === 0 ? 'par' : 'impar'
}

console.log(parOrImpar(2));


const negPostZero = (n:number): string => {
    if(n > 0 ) return 'positivo' 
    if(n < 0) return 'negativo'
    return 'zero';

}
console.log(negPostZero(-1));


function calcFatorial(n: number) {

    if(n === 0 || n === 1) {
        return 1;
    }

    let ac = n;

    for(let i = n -1; i >=2 ; i--) {
        ac *= i         
    }
    return ac;
}

console.log(calcFatorial(4));


