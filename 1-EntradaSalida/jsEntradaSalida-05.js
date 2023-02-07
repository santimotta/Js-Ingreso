/*
Nombre y apellido: Santiago Motta
Ej: E/I 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*
Los id son:

-txtIdNombre
-txtIdEdad
*/

function mostrar()
{	
	//Declaramos variables
	var nombre;
	var edad;

	//Asignamos el valor mediante el ID. Hay que tener en cuenta, que el = es un operador de ASIGNACION.
	// El operador = fx asignando el valor de los elementos a la derecha, al elemento de la izquierda.

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;


	//Los mostramos concatenedas mediante un alert

	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
	alert(typeof(edad)); // Se puede concatenar pq es un string... si fuese un num se podria?
}



