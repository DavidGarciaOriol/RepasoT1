document.addEventListener("DOMContentLoaded", function(event){

    input.addEventListener('change', function(event){

        let value = event.target.value;
        value.trim();
        aplicarFiltro(value);

    })

    document.body.innerHTML = liga1.toString();
    document.body.innerHTML += liga2.toString();
    document.body.innerHTML += liga3.toString();

});

function crearInput(){
    let input = document.createElement('input');

    input.setAttribute('id','name');
    input.setAttribute('type','text');
    input.setAttribute('name','name');

    document.getElementById('container').appendChild(input);

}

function aplicarFiltro(){

}

/**
 * Tarea
 * 
 *  - Mostrar equipos igual a "value" en aplicarFiltro()
 *    - Crear Div.
 *    - Crear h1 -> Equipos Filtros.
 *    - Añadir h1 a div.
 *    - Recorrer Ligas.
 *    - Recorerr Equipos de Ligas.
 *    - Todos los equipos que contengan el valor -> Crear div con el nombre del equipo.
 *    - Añadir div del nombre al div anteriormente creado.
 * 
 *  - Crear toString() para las clases Equipo y Jugador.
 */