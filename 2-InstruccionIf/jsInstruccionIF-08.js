/*
Nombre y apellido: Santiago Motta
Ej: IF 8
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
	}else if (status === "Soltero" && age >= 18){
		alert("Es soltero y no es menor")
	}


}//FIN DE LA FUNCIÓN