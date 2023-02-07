/* 
Nombre y apellido: Santiago Motta
Ej: E/I 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/





//En este caso, hay que tomar el valor a traves del prompt, y mostrarlo a traves de del ID (es decir, a traves del HTML)

//la fx mostrar, cumple las siguientes intrucciones luego de tocar el boton "mostrar", declarado en HTML.
function mostrar()
{

	//Generar variable con dato desde prompt
	var nombre;
	nombre = prompt("Ingrese su nombre: ");

	//Indicar el valor que va a tener el form de html (value)... tmb se podrian declar otras propiedades, como que el valor lo tome el place holder en vez del value. 
	//Eso se determina luego de la fx que llama al ID

	document.getElementById("txtIdNombre").value = nombre;

}

