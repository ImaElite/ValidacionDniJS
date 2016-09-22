/* 
 * DAW2
 * Alan Fox Echezarreta
 */
var nombre;
var dni;
var colores = ["#DF0101", "#DF0101", "#DF0101", "#DF0101", "#DF7401", "#D7DF01", "#31B404", "#01DFD7", "#0101DF", "#FF00BF"];
var notas = [["DIW", 0], ["DAW", 0], ["PHP", 0], ["JVS", 0]];
nombre = prompt("nombre?");
dni = prompt("dni?");
notas[0]=prompt("DIW?");
notas[2]=prompt("DAW?");
notas[3]=prompt("PHP?");
notas[4]=prompt("JVS?");
var htmlString="<table>\n<tr>\n<th>Nombre Asignatura</th>\n<th>Nota</th>\n<\tr>\n";
for (var nota in notas){
    htmlString.concat("<tr><td>", nota[0], "</td>\n<td>", nota[1], "</td></tr>\n");
}
htmlString.concat("</table>");
document.write();
