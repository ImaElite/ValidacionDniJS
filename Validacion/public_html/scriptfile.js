/* 
 * DAW2
 * Alan Fox Echezarreta
 */
var nombre;
var dni;
var colores = ["red", "red", "red", "red", "red", "orange", "yellow", "cyan", "green", "gray", "purple"];
var notas = [["DIW", 0], ["DAW", 0], ["PHP", 0], ["JVS", 0]];
nombre = prompt("nombre?");
do {

    var dni = prompt("Escribe tu Dni ");

    dni_correcto = nif(dni);
} while (dni_correcto === false);

notas[0][1] = prompt("DIW?");
notas[1][1] = prompt("DAW?");
notas[2][1] = prompt("PHP?");
notas[3][1] = prompt("JVS?");
document.write("<table>\n<tr>\n<th>Asignatura</th>\n<th>Nota</th>\n<\tr>\n");
for (i = 0; i < notas.length; i++) {
    alert(colores[notas[i][1]]);
    document.write("<tr><td>", notas[i][0], '</td>\n<td bgcolor="', colores[notas[i][1]], ";\">", notas[i][1], "</td></tr>\n");
}
document.write("</table>");



function nif(dni) {
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni;
    var correcto = false;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) === true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra !== letr.toUpperCase()) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
        } else {
            alert('Dni correcto');
            correcto = true;
        }
    } else {
        alert('Dni erroneo, formato no válido');
    }
    return correcto;
}
