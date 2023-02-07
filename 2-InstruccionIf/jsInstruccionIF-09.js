/*
Nombre y apellido: Santiago Motta
Ej: IF 9
*/




/*
//OPCION 1 ----> la saque de internet completa
function mostrar()
{

	//Declaro la variable para el numero aleatorio

	var randomnum;
	
	//Le asignamos un valor aleatorio mediante la funcion el metodo random de la clase math...
	//Este metodo nos devuelve un numero decimal aleatorio comprendido entre el 0 y el 1....

	randomnum = Math.random()

	//Para solucionarlo, creamos un funcion llamada random...
	function random(max){
		return Math.floor(Math.random() * (max + 1)) //Math.floor parsea hacia abajo... si tengo 11.67, lo transforma en 11.
	}

	//Utilizamos la funcion random para asignarle un valor random a nuestra variable...
	randomnum = random(10)

	//Mostramos el numero random...
	alert(randomnum)


}

*/


//OPCION 2 --> solo saque la fx math, lo otro se me ocurrio a mi
function mostrar()
{

	//Declaro la variable para el numero aleatorio

	var randomnum;
	
	//Le asignamos un valor aleatorio mediante la funcion el metodo random de la clase math...
	//Este metodo nos devuelve un numero decimal aleatorio comprendido entre el 0 y el 1....

	randomnum = Math.random()

	//Para solucionarlo, creamos un funcion llamada random...
	randomnum = parseInt(Math.random() * 10)

	alert(randomnum)

}