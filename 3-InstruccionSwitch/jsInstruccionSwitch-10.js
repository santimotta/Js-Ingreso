function mostrar()
{

	//declaro las variables

	let estacion
	let destino

	//asigno valor

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//Logica

	switch(estacion){
		case "Invierno":
			switch(destino){
				case("Bariloche"):
					alert("Se viaja");
					break;
				case("Cordoba"):
				case("Mar del plata"):
				case("Cataratas"):
					alert("No se viaja");
					break;
			}
			break;
		case "Primavera":
			switch(destino){
				case("Bariloche"):
					alert("No se viaja");
					break;
				case ("Cordoba"):
				case("Mar del plata"):
				case("Cataratas"):
					alert("Se viaja");
					break;			
			}
			break;
		case "Verano":
			switch(destino){
				case ("Cordoba"):
				case("Bariloche"):
					alert("No se viaja")
					break;
				case("Mar del plata"):
				case("Cataratas"):
					alert("Se viaja")
					break;
			}
			break;
		case "Otoño":
			switch(destino){
				case ("Cordoba"):
				case("Bariloche"):
				case("Mar del plata"):
				case("Cataratas"):
					alert("Se viaja.")
					break;
			}
			break;
	}
}



//FIN DE LA FUNCIÓN


/*

Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 

informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

en Primavera: solo no se viaja a Bariloche

*/