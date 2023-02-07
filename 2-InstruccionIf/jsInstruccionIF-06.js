/*
Nombre y apellido: Santiago Motta
Ej: IF 6
*/



function mostrar()
{

	//Declaro var
	var age;
	
	//Tomo de edad
	age = parseInt(document.getElementById("txtIdEdad").value);

	//Logica
	if (age < 13){
		alert("Usted es menor de edad")
	}else if (age >= 13 && age <= 17){
		alert("Usted es adolecente")
	}else {
		alert("Usted es mayor de edad")
	}

}//FIN DE LA FUNCIÓN