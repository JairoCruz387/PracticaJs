var frutas = ["Manzana", "Uva", "Fresa" ,"Peras" ,"Mangos","Papaya"];

for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}
//Objetos
var persona = { nombre: "Juan", telefono: "12345678" };

// Array de objetos
var contactos = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Jose", telefono: "87654321" },

];
console.log(contactos);
for (var i = 0; i < contactos.length; i++) {
    document.getElementById("listaContactos").innerHTML += "<li>";
    document.getElementById("listaContactos").innerHTML += contactos[i].nombre + ":" + contactos[i].telefono;
    document.getElementById("listaContactos").innerHTML += "</li>";
}