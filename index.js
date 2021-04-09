/*
Para un sistema de gestión de tareas, deseamos registrar
todas las tareas, cada tarea tiene asociada la siguiente
información: nombre, fecha de inicio, descripción y estatus,
el estatus debe ser uno de los siguientes: pendiente, en proceso,
terminada, cancelada. Además se requiere una lista con todas
las tareas pendientes, las tareas terminadas y las canceladas.
*/
var Tarea = /** @class */ (function () {
    function Tarea() {
    }
    return Tarea;
}());
var Estado;
(function (Estado) {
    Estado["pendiente"] = "Pendiente";
    Estado["proceso"] = "En proceso";
    Estado["terminada"] = "terminada";
    Estado["cancelada"] = "cancelada";
})(Estado || (Estado = {}));
var tarea = [
    {
        nombreTarea: "Programación",
        fechaInicioTarea: 25082019,
        descripcionTarea: " Ejercicos de TypeScript ",
        estado: Estado.pendiente
    },
    {
        nombreTarea: "ingles",
        fechaInicioTarea: 25082019,
        descripcionTarea: " Ejercicos diarios de slang ",
        estado: Estado.proceso
    }
];
console.log(tarea);
