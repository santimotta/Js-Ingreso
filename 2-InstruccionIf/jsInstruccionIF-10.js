/*
Nombre y apellido: Santiago Motta
Ej: IF 10
*/



function mostrar()
{

	//Declaro la variable para el numero aleatorio

	var randomnum;
	
	//Le asignamos un valor aleatorio mediante la funcion el metodo random de la clase math...

	randomnum = parseInt((Math.random()+ 0.049)* 10 )

	//Logica

	if (randomnum >= 9){
		alert("EXCELENTE")
	}else if (randomnum < 9 && randomnum > 4){
		alert("APROBÓ")
	}else{
		alert("Vamos, la proxima se puede")
	}


}