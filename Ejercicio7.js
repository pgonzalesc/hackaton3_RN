/*7. Crea una función usando callbacks que haga el incremento de valores en
un array (aumentar en uno cada elemento del array).*/

const functionIncrement = (array, increment)=> {
    for(let i=0; i<array.length; i++){
        array[i] += increment;
    }
    return array;
}

const myCallback = (array, increment, callback)=> {
    return callback(array, increment);
}

let array = [1,2,3,4,5,6,7,8,9];
console.log(myCallback(array, 2, functionIncrement));