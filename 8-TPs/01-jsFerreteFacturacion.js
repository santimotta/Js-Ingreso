/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).


TP1
Santiago Motta

*/

var precio1; 
var precio2;
var precio3;
var total;
var promedio;
var iva
var totalIva;

function Sumar () 
{
	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    total = precio1 + precio2 + precio3;
    alert("El precio total es: " + total);

}
function Promedio () 
{
	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    total = precio1 + precio2 + precio3;
    promedio = total / 3;
    alert("El promedio de precios es: " + Math.floor(promedio))
}
function PrecioFinal () 
{
	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    total = precio1 + precio2 + precio3;
    iva = total * 0.21;
    totalIva = total + iva;
    alert("El precio total mas IVA es de : " + parseInt(totalIva))
}


//Ids: txtIdPrecioUno, txtIdPrecioDos, txtIdPrecioTres