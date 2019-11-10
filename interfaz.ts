/*interface Forma {
    cantVertices : number;

    obtenerArea(): number;
};

class Circulo implements Forma {
    cantVertices : number;
    radio : number;

    constructor (radio: number) {
        this.cantVertices = 0;
        this.radio = radio;
    }
    obtenerArea() {
        return Math.PI * this.radio ** 2;
    }
}

class Rectangulo implements Forma {
    cantVertices : number;
    base : number;
    altura : number;

    constructor (base: number, altura: number) {
        this.cantVertices = 4;
        this.base = base;
        this.altura = altura;
    }
    obtenerArea() {
        return this.base * this.altura;
    }
}

class Cuadrado implements Forma {
    cantVertices : number;
    lado : number;

    constructor (lado: number) {
        this.cantVertices = 4;
        this.lado = lado;
    }
    obtenerArea() {
        return this.lado ** 2;
    }
}*/

//vs.

type Forma = 
    { kind: 'Circulo', radio : number; } |
    { kind: 'Rectángulo', base : number, altura : number; } |
    { kind: 'Cuadrado', lado : number; }

function obtenerArea(forma : Forma) {
    switch (forma.kind) {
        case 'Circulo':
            return Math.PI * forma.radio ** 2;
        case 'Rectángulo':
            return forma.base * forma.altura;
        case 'Cuadrado':
            return forma.lado ** 2;
    }
    throw new Error("Forma inválida");
}

//const forma: Forma = new Cuadrado(10);
//const area = forma.obtenerArea();
const forma : Forma = {kind: 'Cuadrado', lado: 10};
const area = obtenerArea(forma);
console.log(area);
console.log(forma);