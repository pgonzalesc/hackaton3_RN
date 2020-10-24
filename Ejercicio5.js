/*5. Crea tu propia función sort que funcione igual a Array.sort. Por ejemplo:
function miSort(arreglo, callback).*/

const sort = (array) => {
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
}

const mySort = (array, callback) => {
    return callback(array);
}

let countries = ['Perú', 'Bolivia', 'Argentina', 'Venezuela', 'Colombia'];
console.log(mySort(countries, sort));