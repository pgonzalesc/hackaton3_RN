/*3. Crea tu propia función filter que funcione igual a Array.filter. Por ejemplo:
function miFilter(arreglo, filter).*/

const filter = (array)=>{
    let arrayFilter = [];
    for(key in array){
        if(array[key]>18){
            arrayFilter.push(array[key]);
        }
    }
    return arrayFilter;
}

const myFilter = (array, callback)=>{
    return callback(array);
}

const ages = [22,19,24,17,16,25];
console.log(myFilter(ages, filter));