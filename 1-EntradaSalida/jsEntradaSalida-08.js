/*
Nombre y apellido: Santiago Motta
Ej: E/I 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/



function SacarResto()
{
	//Declaro...
	let num1;
	let num2;
	let resultdivid;
	let resultresto;

	//Obtengo valores desde ID y los transformo a enteros con la fx parseInt().
	num1 = document.getElementById("txtIdNumeroDividendo").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDivisor").value;
	num2 = parseInt(num2);

	//Divido los valores ingresados por ID...
	resultdivid = num1 / num2;

	//Obtengo el resto de la division...
	resultresto = num1 % num2;

	//Imprimo en pantalla
	alert("El resultado de la division es: " + resultdivid + " y el resto es: " + resultresto);	
}


// IDs: txtIdNumeroDividendo, txtIdNumeroDivisor