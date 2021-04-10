/*

D2 requiere un registro de inventario básico, para ello necesita saber la lista de productos existentes en su  almacén principal, cada producto debe tener asignados los siguientes atributos: Nombre, fecha de vencimiento, precio, peso, uuid, distribuidor, cantidad.

Se cuenta también con los datos de los distribuidores entre ellos: nombre, teléfono, productos que ofrece. Además, D2 requiere las siguientes listas: productos en almacén, productos por solicitar a distribuidor y lista de distribuidores.

*/
var Producto = /** @class */ (function () {
    function Producto() {
    }
    return Producto;
}());
var Distribuidor = /** @class */ (function () {
    function Distribuidor() {
    }
    return Distribuidor;
}());
var Estado;
(function (Estado) {
    Estado["almacen"] = "en almacen";
    Estado["solicitar"] = "por solicitar";
})(Estado || (Estado = {}));
var producto = [
    {
        nombre: "arepas",
        fechaVencimiento: 10082201,
        precio: 2000,
        id: 5,
        estado: Estado.almacen,
        distribuidor: [
            {
                nombre_distribuidor: "Nestle",
                telefono_distribuidor: 4512020
            }
        ]
    },
    {
        nombre: "doritos",
        fechaVencimiento: 9082021,
        precio: 4000,
        id: 9,
        estado: Estado.solicitar,
        distribuidor: [
            {
                nombre_distribuidor: "Frito lay",
                telefono_distribuidor: 2959595
            },
        ]
    },
];
console.log(producto);
