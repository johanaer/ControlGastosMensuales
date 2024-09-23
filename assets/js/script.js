let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta función se invoca al momento de que el usuario hace clic en el 
//boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    //alert('Click de usuario ');

    console.log(nombreGasto);
    console.log(valorGasto);



    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    //alert('click de usuario');

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    //llamamos a la funcion es para mostrar los datos que fueron adicionadops por el usuario en la pantalla 
    ActualizarListaGastos();
}

function ActualizarListaGastos(){
    // Actualizar en pantalla las cosas , capturar el html (ul) y traerlo a js 
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElemetos = document.getElementById('totalGastos');

    //Agregamos variable para agregar una lista para los alimentos y los valores de cada alimento
    let htmlLista = '';
    let totalGastos = 0;
    //recorrer el arreglo(
    listaNombresGastos.forEach ((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
        <button onclick="eliminarGasto(${posicion});">Eliminar gasto</button>
        </li>`;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);

    });
    listaElementos.innerHTML = htmlLista;    
    totalElemetos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value ='';
    document.getElementById('valorGasto').value = '';

}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion, 1);
    ActualizarListaGastos();

}