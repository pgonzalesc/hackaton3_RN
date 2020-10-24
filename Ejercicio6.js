/*6. Crea una función usando callbacks, que reciba una condición, y dos
funciones que se realicen en caso la condición se cumpla o no.*/

const printPar = ()=> console.log('Es par');
const printImpar = ()=> console.log('Es impar');

const evaluate = (num)=> {
    if(num%2 == 0)
        printPar();
    else
        printImpar();
}

const myCallback = (number, callback)=> {
    callback(number);
}

myCallback(5,evaluate);
myCallback(6,evaluate);