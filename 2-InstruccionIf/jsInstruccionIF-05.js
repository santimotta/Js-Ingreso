/*
Nombre y apellido: Santiago Motta
Ej: IF 5
*/


function mostrar()
{

	//Declaro var
	var age;
	
	//Tomo de edad
	age = parseInt(document.getElementById("txtIdEdad").value);

	//Logica
	if (!(age >= 13 && age <= 17)){
		alert("Usted no es adolecente")
	}

}//FIN DE LA FUNCIÓN