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
notas[0][1]=prompt("DIW?");
notas[1][1]=prompt("DAW?");
notas[2][1]=prompt("PHP?");
notas[3][1]=prompt("JVS?");
document.write("<table>\n<tr>\n<th>Asignatura</th>\n<th>Nota</th>\n<\tr>\n");
for (i=0; len=notas.length; i++<len){
    document.write("<tr><td>", notas[i][0], "</td>\n<td>", notas[i][1], "</td></tr>\n");
}
document.write("</table>");
