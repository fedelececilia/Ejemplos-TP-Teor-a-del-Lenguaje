// El lenguaje es tipado
var miVariable : string;
miVariable = 'Hola';
miVariable = "Chau";
//miVariable = 1;
//mostrar (con console.log) que mientras acá la línea anterior tira error, en el archivo .js se puede.


// Number
var miNumero : number;
miNumero = 1;
miNumero = 2.5;
miNumero = miNumero / 2;
miNumero = undefined;
//console.log(miNumero);


// Boolean
var miBool = false; 
//var miBool = 5; //ver que el error nos dice dónde fue declarada


// Array
var miArray1 : number[];
var miArray2 : Array<string>;
miArray1 = [1, 2, 3];
miArray2 = ['h', 'o', 'l', 'a'];
//console.log(miArray2.join('')); //al poner miArray2. tira todas las funciones posibles del tipo Array


// Tuple
var nom_ape_edad : [string, string, number]; //var nom_ape_edad : [string, string, number | string];
nom_ape_edad = ['Cecilia', 'Fedele', 20];
//nom_ape_edad = ['Cecilia', 'Fedele', '20'];
//console.log(nom_ape_edad[0]); //el conteo de las posiciones arranca en 0
//console.log(nom_ape_edad[10]); //nos tira el error acá mismo


// Enum
enum Peliculas {Titanic, Cars, KillBill};
var miEnum1 = Peliculas.Titanic;
var miEnum2 = Peliculas[1]; //el conteo empieza desde 0
//console.log("miEnum1: " + miEnum1 + ", miEnum2: " + miEnum2);


// Any
var miAny : any;
miAny = 5;
miAny = 'hola';


// Void
var miVoid : void;
miVoid = null;
miVoid = undefined;
//miVoid = 'Hola';


// Null (usando el flag)

// Never
function error(mensaje : string) : never {
    throw new Error(mensaje);
}
function lanzaraError() {
    error("Lanzó error");
} //nunca la llamamos, por eso no lanza error


function loopInfinito() : never {
    while (true) {
        console.log("Iteración");
    }
}
//vs.
function loopConCorte() : void { //ponerle never en vez de void y ver que da error
    var i = 10;
    while (i > 0) {
        console.log("Iteración");
        i--;
    }
}

// Objects
var miNombre : { nombre: string, apellido : string };
miNombre = {nombre: 'Martín', apellido: 'Palermo'};
//miNombre = {nombre: 'Martín'};
//miNombre = {nombre: 'Juan', apellido: 'Riquelme', segundoNombre: 'Román'};
//vs.
type Persona = {nombre: string, apellido?: string}; //defino el tipo
var yo : Persona = {nombre: 'Cecilia', apellido: 'Fedele'};
//var vos : Persona = {nombre: 'Pablo'}; //si le ponemos '?' a apellido, no da error
//console.log(yo);
//console.log(vos);