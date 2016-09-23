/////////////Declaracion de arrays

var colores = ["red", "red", "red", "red", "red", "orange", "green", "blue", "blue", "yellow", "yellow"];
var notas = [["DIW", 0], ["DAW", 0], ["PHP", 0], ["JVS", 0]];
var calificaiones = ["Suspenso", "Suspenso", "Suspenso", "Suspenso", "Suspenso", "Suficiente", "Bien", "Notable", "Notable", "Sobresaliente", "Sobresaliente"]
///Declaracion de variables
var nombre;

nombre_dni();

////////////////Asignaturas, que sean solo números, entre 0 y 10

var asig_diw = meter_notas(asig_diw, "DIW");
var asig_daw = meter_notas(asig_daw, "DAW");
var asig_php = meter_notas(asig_php, "PHP");
var asig_jvs = meter_notas(asig_jvs, "JVS");

///cargo esas notas en el array
notas[0][1] = asig_diw;
notas[1][1] = asig_daw;
notas[2][1] = asig_php;
notas[3][1] = asig_jvs;

//creo el formulario en ventana

document.write("<div id='a'>");
document.write("<h1>Estas son tus notas: ");
document.write(nombre);
document.write("</h1>");
document.write("<form>");
document.write("<table border='1' width='35' cellspacing='4' cellpadding='4' align='center'><tr><th>Asignatura</th><th>Nota</th><\tr>");
for (i = 0; i < notas.length; i++) {
    document.write("<tr><td>", notas[i][0], '</td>\n<td bgcolor="', colores[notas[i][1]], '">', calificaiones[i], "</td></tr>\n");
}
document.write("<tr><td><input type='button' value='Imprimir' id='boton_imprimir' onclick='window.print();'></td><td><input type='button' value='Reiniciar' id='boton_salida' onclick='<script>document.reload();</script>'></td></tr>");
document.write("</form>");
document.write("</table>");
document.write("</div>");

//////////////FUNCIONES

//Funcion del dni

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
            // alert('Dni correcto');
            correcto = true;
        }
    } else {
        alert('Dni erroneo, formato no válido');
    }
    return correcto;
}

///Funcion para meter las notas
function meter_notas(a, b) {
    do {
        var a = parseInt(prompt("Introduce la nota de : " + b));
        if (isNaN(a)) {
            alert("No se admiten letras ni dejar en blanco el campo");
        }
        if (a > 10 || a <= -1) {
            alert("Solo se admiten números de 0 a 10 para las notas");
        }

    } while (isNaN(a) || (a > 10 || a < 0) || a.length === 0);
    return a;
}

///Funcion de pedir nombre y dni
function nombre_dni() {

    nombre = prompt("Introduce tu nombre:");
    do {
        var dni = prompt("Introduce tu Dni ");

        dni_correcto = nif(dni);
    } while (dni_correcto === false);

}
