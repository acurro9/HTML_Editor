
//Se crea la varibale data sobre lo introducido en el input
let data = document.getElementById('input');
//Se crea la variable result sobre el result
let result = document.getElementById('result');
/*Al pulsar el botón se activa una función que compila 
el texto del input y las etiquetas y muestra el resultado*/
function run(){
    result.innerHTML=data.value;
}
