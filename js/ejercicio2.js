var productos = [
    { nombre: "Galleta Principe", precio: 2.65 },
    { nombre: "Pera UD", precio: 0.15 },
    { nombre: "Yogurt Griego", precio: 0.75 },
    { nombre: "Uvas libra", precio: 1.00 },
    { nombre: "Galletas Tosh", precio: 0.25 },
    { nombre: "Pan Aleman", precio: 2.25 },
    { nombre: "Chicle Fresa", precio: 0.25 },
    { nombre: "Arroz Precosido", precio: 1.00 },
    { nombre: "Papitas Rancheras", precio: 0.25 },
    { nombre: "Monster Black", precio: 2.25 },
];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
}
