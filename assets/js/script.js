let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta función se invoca al momento de que el usuario hace clic en el 
//boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    alert('Click de usuario ');

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);


    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    //alert('click de usuario');
    console.log(listaNombresGastos);
}