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



    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    //alert('click de usuario');

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    //llamamos a la funcion es para mostrar los datos que fueron adicionadops por el usuario en la pantalla 
    ActualizarLIstaGastos();
}

function ActualizarLIstaGastos(){
    //recorrer el arreglo(
    listaNombresGastos.forEach ((elemeto, posicion) => {
        console.log(elemnto);
        console.log(posicion);

    });
}