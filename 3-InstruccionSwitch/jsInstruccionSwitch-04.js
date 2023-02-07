function mostrar()
{
	//Declaro variables
	let mes;

	//Asigno el valor a la variable
	mes = document.getElementById("txtIdMes").value; //PUNTO VALUEEEEEEEEEEEEEEEEE

	//Logica
	switch(mes){
		case "Febrero":
			alert("Este mes tiene 28 dias.");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
 		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias.");
			break;
	}
}//FIN DE LA FUNCIÓN


/*

al seleccionar un mes informar.
si tiene 28 días.  ---> Febrero
si tiene 30 días.  ---> Abril, junio, septiembre, noviembre
si tiene 31 días.  ---> Enero, Marzo, Mayo, Julio, Agosto, Octubre, Dieciembre

*/