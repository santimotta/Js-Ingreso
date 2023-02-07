function mostrar()
{

	//Declaro la variable
	let mes

	//Asigno valor a la variable
	mes = document.getElementById("txtIdMes").value

	//Logica (swtich)

	switch(mes){
		case "Enero":
			alert("que comiences bien el año!!!.")
			break
		case "Marzo":
			alert("a clases!!!.")
			break		
		case "Julio":
			alert("se vienen las vacaciones!!!.")
			break
		case "Diciembre":
			alert("Felices fiesta!!!.")
			break
	}


}//FIN DE LA FUNCIÓN





/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!.

*/


/*
FREE USE

	switch(mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
	}

*/