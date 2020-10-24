/*1. Crea tu propia función forEach que funcione igual a Array.forEach. Por
ejemplo: function miForEach(arreglo, callback){ // completa aquí }*/

const call = (array)=> {
    for(const element of array){
        console.log(element);
    }
}

const myForeach = (array, callback)=> {
    callback(array);
}

let array1=['Pedro', 'Aldair', 'Gonzales', 'Camacho'];
myForeach(array1, call);