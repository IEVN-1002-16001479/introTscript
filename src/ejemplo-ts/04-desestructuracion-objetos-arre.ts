//desestructurar


interface Reprodcutor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reprodcutor={
    volumen:90,
    segundo:66,
    cancion: "Mañanitas",
    detalles:{
        autor:'cepillin',
        year:1978,
    }

}

console.log(`El Volumenen actual es: ${reproductor.volumen}`);
console.log(`El segundo actual es: ${reproductor.segundo}`);
console.log(`La cancion actual es: ${reproductor.cancion}`);
console.log(`El autor es: ${reproductor.detalles.autor}`);

const{volumen,segundo,cancion,detalles}=reproductor
const{autor,year}=detalles

console.log(`El Volumenen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`El autor es: ${autor}`);

const colores:string[]=['blue', 'red','green','violet'];
console.log(`color 1: ${colores[0]}`);
console.log(`color 2: ${colores[1]}`);
console.log(`color 3: ${colores[2]}`);


const[azu,,x,b]=colores;
console.log(`color 2: ${b}`);