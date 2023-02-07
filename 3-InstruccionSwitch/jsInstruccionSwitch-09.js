function mostrar() {

	//Declaro las variables
	let destino
	let estacion
	let tarifabase

	//Asigno valor
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	tarifabase = 15000;

	//Logica

	switch (destino) {
		case "Bariloche":
			switch (estacion) {
				case "Verano":
					tarifabase = tarifabase * 0.8;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Invierno":
					tarifabase = tarifabase * 1.2;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Otoño":
				case "Primavera":
					tarifabase = tarifabase * 1.1;
					alert("La tarifa es de : " + tarifabase);
					break;
			}
			break;
		case "Cataratas":
			switch (estacion) {
				case "Verano":
					tarifabase = tarifabase * 1.1;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Invierno":
					tarifabase = tarifabase * 0.9;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Otoño":
				case "Primavera":
					tarifabase = tarifabase * 1.1;
					alert("La tarifa es de : " + tarifabase);
					break;
			}
			break;
		case "Cordoba":
			switch (estacion) {
				case "Verano":
					tarifabase = tarifabase * 1.1;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Invierno":
					tarifabase = tarifabase * 0.9;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Otoño":
				case "Primavera":
					alert("La tarifa es de : " + tarifabase);
					break;
			}
			break;
		case "Mar del plata":
			switch (estacion) {
				case "Verano":
					tarifabase = tarifabase * 1.2;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Invierno":
					tarifabase = tarifabase * 0.8;
					alert("La tarifa es de : " + tarifabase);
					break;
				case "Otoño":
				case "Primavera":
					tarifabase = tarifabase * 1.1;
					alert("La tarifa es de : " + tarifabase);
					break;
			}
			break;

	}

}//FIN DE LA FUNCIÓN


/*

Enunciado:

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final


-se cobra $15.000 por cada estadia como base

en Invierno: 
	bariloche tiene un aumento del 20% -
	cataratas y Cordoba tiene un descuento del 10% 
	Mar del plata tiene un descuento del 20%

en Verano: 
	bariloche tiene un descuento del 20% -
	cataratas y Cordoba tiene un aumento del 10% 
	Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
	bariloche tiene un aumento del 10% -
	cataratas tiene un aumento del 10% 
	Mar del plata tiene un aumento del 10% y 
	Cordoba tiene el precio sin descuento



-se cobra $15.000 por cada estadia como base
*/