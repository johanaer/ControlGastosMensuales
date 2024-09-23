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
    //Agregamos variable para agregar una lista para los alimentos y los valores de cada alimento
    let htmlLista = '';
    //recorrer el arreglo(
    listaNombresGastos.forEach ((elemeto, posicion) => {
        htmlLista += "<li>" + elemento + "</li>";

    });
    console.log(htmlLista);
}