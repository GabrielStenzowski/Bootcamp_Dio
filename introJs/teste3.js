//console.log("Hello World!");

let evenNuns = [];
function returnEvenValues(array){
    for(let i = 0; i < array.lenght;){
        if(array[i] % 2 === 0){
            evenNuns.push(array[i]);
        }
        }
    }
    console.log('Numeros pares são: ' + evenNuns);

let array = [1, 2 , 4, 5, 7, 8];

returnEvenValues(array);
