/*2. Crea tu propia función map que funcione igual a Array.map. Por ejemplo:
function miMap(arreglo, callback).*/

const call = (array)=>{
    let arrayMap = [];
    for(key in array){
        arrayMap[key] = `${array[key]}s`;
    }
    return arrayMap;
}

const myMap = (array, callback)=>{
    return callback(array);
}

let array = ['Perro', 'Gato', 'Conejo', 'Loro'];

console.log('array', myMap(array, call));