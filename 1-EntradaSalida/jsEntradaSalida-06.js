/*
Nombre y apellido: Santiago Motta
Ej: E/I 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/


//IDs: txtIdNumeroUno, txtIdNumeroDos


function sumar()
{
	//Declaro...
	let num1;
	let num2;
	let result;

	//Obtengo valores desde ID y los transformo a enteros con la fx parseInt().
	num1 = document.getElementById("txtIdNumeroUno").value; //siempre se debe declarar el nombre del ID entre comillas... no es una variable.
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	//Sumo los valores ingresados por ID...
	result = num1 + num2;

	//Imprimo en pantalla
	alert(result);
}






