let cantDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));

const alumnos = []

for (let index = 0; index < cantDeAlumnos; index++) {
    let nombre = prompt("Ingrese nombre del alumno:");
    let nota = parseInt(prompt("Ingrese nota del alumno:"));
    alumnos.push({nombre,nota});

}

const notas = alumnos.map((el)=>el.nota); 
const alumno = alumnos.map((el)=>el.nombre);




if (alumno.includes("Juan")) {
    alert("Hay un alumno llamado Juan")
} else { alert("No hay alumno llamado Juan") }
if (notas.includes(7)) { alert("Hay un alumno que se saco 7") }
if (alumno.includes("Carlos")) { alert("Hay un alumno llamado Carlos") } else { alert("No hay alumno llamado Carlos") }


const oper = prompt("Ingrese operacion (Promedio/MaxNota/MinNota)")



let notaMinima = Math.min(...notas);
let notaMaxima = Math.max(...notas);
let suma = 0; let promedio = 0;
notas.forEach(element => {
    suma = suma + element;
});

promedio = suma / notas.length

switch (oper) {
    case "Promedio":
        alert("La nota promedio es " + promedio)
        break;

    case "MaxNota":
        alert("La nota maxima es " + notaMaxima)
        break;

    case "MinNota":
        alert("La nota minima es " + notaMinima)
        break;


    default:
        break;
}

const busca = prompt("Ingrese el nombre del alumno a buscar")
alert("El alumno "+busca+" se saco "+alumnos.find((el)=>el.nombre===busca).nota);

const filtra = prompt("Ingrese la nota desde la cual mostrar los nombres:")

const lista = filtrar(filtra);

let mostrando = "Nombre   Nota \n"

lista.forEach(element => {
    mostrando = mostrando + element.nombre+"   "+element.nota+"\n"
});

alert(mostrando);



function filtrar (nota1){
       return alumnos.filter((el)=>el.nota>=nota1);
}