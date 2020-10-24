/*8. Crea una función usando callbacks que eleve al cuadrado y al cubo un
numero enviado como parámetro a dicha función.*/

const calculate = (num)=> {
    let square = Math.pow(num, 2);
    let cube = Math.pow(num, 3);
    console.log(`${num} al cuadrado: ${square}`);
    console.log(`${num} al cubo: ${cube}`);
}

const myCallback = (num, callback)=> {
    callback(num);
}

myCallback(2, calculate);