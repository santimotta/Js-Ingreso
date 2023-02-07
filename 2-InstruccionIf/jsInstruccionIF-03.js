/*
Nombre y apellido: Santiago Motta
Ej: IF 3
*/


function mostrar()
{
	//Declaro var
	var age;
	
	//Tomo de edad
	age = parseInt(document.getElementById("txtIdEdad").value);

	//Logica
	if (age >= 18){
		alert("Usted es mayor de edad")
	}else {
		alert("Usted es menor de edad")
	}
 
	

}//FIN DE LA FUNCIÓN