/*
Nombre y apellido: Santiago Motta
Ej: E/I 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	//Declaro...
	let num1;
	let num2;
	let resultsum;

	//Obtengo valores desde ID y los transformo a enteros con la fx parseInt().
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	//Sumo los valores ingresados por ID...
	resultsum = num1 + num2;

	//Imprimo en pantalla
	alert(resultsum);
}

function restar()
{
	//Declaro...
	let num1;
	let num2;
	let resultrest;

	//Obtengo valores desde ID y los transformo a enteros con la fx parseInt().
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	//Resto los valores ingresados por ID...
	resultrest = num1 - num2;

	//Imprimo en pantalla
	alert(resultrest);
}

function multiplicar()
{ 
	//Declaro...
	let num1;
	let num2;
	let resultmult;

	//Obtengo valores desde ID y los transformo a enteros con la fx parseInt().
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	//Multiplico los valores ingresados por ID...
	resultmult = num1 * num2;

	//Imprimo en pantalla
	alert(resultmult);	
}

function dividir()
{
	//Declaro...
	let num1;
	let num2;
	let resultdivid;

	//Obtengo valores desde ID y los transformo a enteros con la fx parseInt().
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	//Divido los valores ingresados por ID...
	resultdivid = num1 / num2;

	//Imprimo en pantalla
	alert(resultdivid);	
}

