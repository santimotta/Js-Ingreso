/*
Nombre y apellido: Santiago Motta
Ej: E/I 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/


function mostrarAumento()
{
	//Declaro...
	let importe;
	let descuento;

	//Capturo los valores y transformo a int
	importe = parseInt(document.getElementById("txtIdImporte").value);

	//Opero (descuento de 25%)...

	descuento = importe * 0.75;

	//Imprimo por ID

	document.getElementById("txtIdResultado").value = descuento;

}

//IDs: txtIdImporte, txtIdResultado
