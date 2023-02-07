/*
Nombre y apellido: Santiago Motta
Ej: IF 7
*/


function mostrar()
{

	//Declaro var
	var age;
	var status;
	
	//Tomo de edad y estado civil
	age = parseInt(document.getElementById("txtIdEdad").value);
	status = document.getElementById("estadoCivil").value;

	//Logica
	if (status != "Soltero" && age < 18) {
		alert("Usted es muy joven para NO estar soltero")
	}


}//FIN DE LA FUNCIÓN