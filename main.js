
function crearInput(){
    let input = document.createElement('input');

    input.setAttribute('id','name');
    input.setAttribute('type','text');
    input.setAttribute('name','name');

    document.getElementById('container').appendChild(input);
    return input;
}

function aplicarFiltro(){

    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML = "Equipos Filtrados";
    div.appendChild(h1);

    allLeagues.foreach(liga => 
        liga.equipos.forEach(equipo => mostrarEquipo(equipo,div,value)
        )
    );
}

function mostrarEquipo(equipo,div,value){
    if(equipo.nombre.upperCase().includes(value.upperCase())){
        let div2 = document.createElement('div');
        div2.innerHTML = equipo.nombre;
        div.appendChild(div2);
    }
}

function validarInput(input, value){
    let regex = /^[A-ZÁÉÍÓÚ0-9]{5,}$/;
    if(regex.test(value)){
        input.style.border = '1px solid green';
    } else{
        input.style.border = '1px solid red';        
    }
}

document.addEventListener("DOMContentLoaded", function(event){

    let input = crearInput();

    input.addEventListener('change', function(event){

        let value = event.target.value;
        value = value.trim();
        aplicarFiltro(value);

    });

    input.addEventListener('blur', function(event){
        let value = event.target.value;
        value = value.trim();
        validarInput(input,value);
    });

    //document.body.innerHTML = liga1.toString();
    //document.body.innerHTML += liga2.toString();
    //document.body.innerHTML += liga3.toString();

});

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