
interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
}
const alumno:Alumno={
    nombre:'juan',
    email:'luis@gmail.com'
}

console.log(alumno.nombre);
let mascotas:string[]=['perro','gato','perico']

mascotas[1]='perico verde';
mascotas.push('gato dos');
console.table(mascotas);

let tem:(string|number)[]=[];
tem.push('RCR');
tem.push(34);