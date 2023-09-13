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