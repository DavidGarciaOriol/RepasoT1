class Liga{

// Constructor

    constructor(nombre, temporada){
        this.nombre = nombre;
        this.temporada = temporada;
        this.equipos = [];
    }
 
// Getter&Setter

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get temporada(){
        return this._temporada;
    }

    set temporada(temporada){
        this._temporada = temporada;
    }

// Functions

    addTeam(equipo){
        this.equipos.push(equipo);
    }

// To String

    toString(){
        let salto = '<br>';
        let resultado = `${this.nombre}${salto}`;
        resultado += `${this.temporada}${salto}`;
        resultado += '<ul>';
        // this.equipos.forEach(function(x){
        //     resultado += `<li>${x.nombre}</li>`;
        // });
        this.equipos.forEach(x => resultado += `<li> ${x}`);
        resultado += '</ul>';
        return resultado;
    }

}

class Equipo{
    
// Constructor

    constructor(nombre, ciudad, escudo){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.escudo = escudo;
        this.jugadores = [];
    }

// Getter&Setter

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get ciudad(){
        return this._ciudad;
    }

    set ciudad(ciudad){
        this._ciudad = ciudad;
    }

    get escudo(){
        return this._escudo;
    }

    set escudo(escudo){
        this._escudo = escudo;
    }

//Functions

    addPlayer(jugador){
        this.jugadores.push(jugador);
    }

// to String

toString(){
    let salto = '<br>';
    let resultado = `${this.nombre}${salto}`;
    resultado += `${this.ciudad}${salto}`;
    resultado += '<ul>';
    this.jugadores.forEach(y => resultado += `<li> ${y.nombre}`);
    resultado += '</ul>';
    return resultado;
}

}

class Jugador{

// Constructor

    constructor(nombre){
        this.nombre = nombre;
    }

// Getter&Setter

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}
