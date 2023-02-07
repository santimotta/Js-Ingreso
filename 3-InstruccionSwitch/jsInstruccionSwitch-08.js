function mostrar()
{

	//Declaro variable
	let destino;

	//Asigno valor
	destino = document.getElementById("txtIdDestino").value;

	//Logica
	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;
		default:
			alert("Calor");
	}
}
//FIN DE LA FUNCIÓN