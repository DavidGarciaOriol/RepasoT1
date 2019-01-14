
function crearInput(){
    let input = document.createElement('input');

    input.setAttribute('id','name');
    input.setAttribute('type','text');
    input.setAttribute('name','name');

    document.getElementById('container').appendChild(input);
    return input;
}

function aplicarFiltro(value){

    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML = "Equipos Filtrados";
    div.appendChild(h1);

    allLeagues.forEach(liga => 
        liga.equipos.forEach(equipo => mostrarEquipo(equipo,div,value)
        )
    );
    document.body.appendChild(div);
}

function mostrarEquipo(equipo,div,value){
    if(equipo.nombre.toUpperCase().includes(value.toUpperCase())){
        let div2 = document.createElement('div');
        div2.innerHTML = equipo.nombre;
        div.appendChild(div2);
    }
}

function validarInput(input, value){
    let regex = /^[A-Za-z]+$/;
    let regex2 = /^[A-Z]+$/;
    let esCorrectoTodoLetras = regex.test(value);
    let esCorrectoTodoMayus = regex2.test(value);
    let esCorrectoTam = value.length >= 5;
    let divConErrores = document.getElementById('divErroresInput');
    if(divConErrores === null){
        divConErrores = document.createElement('div');
        divConErrores.id = 'DivErroresInput';
    } else{
        divConErrores.innerHTML = "";
    }

    input.parentNode.insertBefore(divConErrores, input.nextSibling);

    if(!esCorrectoTodoLetras){
        let span = document.createElement('span');
        span.innerHTML = 'Solo se permiten letras.';
        divConErrores.appendChild(span);
    } else if(!esCorrectoTodoMayus){
        let span = document.createElement('span');
        span.innerHTML = 'El nombre debe estar en Mayúsculas.';
        divConErrores.appendChild(span);
    } else if(!esCorrectoTam){
        let span = document.createElement('span');
        span.innerHTML = 'Deben introducirse 5 o más letras.';
        divConErrores.appendChild(span);
    }


    // if(regex.test(value)){
    //     input.style.border = '1px solid green';
    // } else{
    //     input.style.border = '1px solid red';        
    // }
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