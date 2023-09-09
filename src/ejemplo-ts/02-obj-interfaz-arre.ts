
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