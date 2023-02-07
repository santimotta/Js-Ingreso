/*
Nombre y apellido: Santiago Motta
Ej: E/I 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


function mostrarAumento()
{
	//Declaro...
	let sueldo;
	let aumento;

	//Capturo los valores y transformo a int
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);


	//pedir porcentaje

	porcent = parseInt(prompt("Ingrese el porcentaje de aumento que desea(solo el numero):"))
	porcent = porcent / 100
	//Opero (aumento el porcent)...

	aumento = sueldo * porcent;
	sueldoaumentado = aumento + sueldo

	//Imprimo por ID

	document.getElementById("txtIdResultado").value = sueldoaumentado;

}

//IDs: txtIdSueldo, txtIdResultado