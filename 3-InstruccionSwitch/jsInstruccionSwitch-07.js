


function mostrar()
{

	//Declaro variable
	let destino;

	//Asigno valor
	destino = document.getElementById("txtIdDestino").value;

	//Logica
	switch(destino){
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN


//Id: txtIdDestino