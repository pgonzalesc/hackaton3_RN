/*4. Crea tu propia función reduce que funcione igual a Array.reduce. Por
ejemplo: function miReduce(arreglo, reduce).*/

const reduce = (array)=>{
    let arrayReduce = 0;
    for(key in array){
        arrayReduce += array[key];
    }
    return arrayReduce;
}

const myReduce = (array, callback)=>{
    return callback(array);
}

const array = [1,2,3,4,5];
console.log(myReduce(array, reduce));