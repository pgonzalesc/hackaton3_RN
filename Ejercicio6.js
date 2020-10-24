/*6. Crea una función usando callbacks, que reciba una condición, y dos
funciones que se realicen en caso la condición se cumpla o no.*/

const orderAsc = (array)=> {
    let aux;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
};

const orderDesc = (array)=> {
    let aux;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] < array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
};

const order = (array, orderBy='ASC')=> {
    if(orderBy == 'ASC')
        return orderAsc(array);
    else if(orderBy == 'DESC')
        return orderDesc(array);
}

const myCallback = (array, callback, orderBy)=> {
    return callback(array, orderBy);
}
let fruits = ['Manzana', 'Pera', 'Mandarina', 'Piña', 'Fresa'];
let numbers = [50, 5, 10, 32, 3];

console.log(myCallback(fruits, order, 'ASC'));
console.log(myCallback(fruits, order, 'DESC'));

console.log(myCallback(numbers, order, 'ASC'));
console.log(myCallback(numbers, order, 'DESC'));