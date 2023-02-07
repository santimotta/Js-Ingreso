/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.



TP2
Santiago Motta


*/





//Declaro las variables...
var ancho;
var largo;
var radio;


//Capturo el dato.... probar si fx por fuera de la fx... se deberia poder pq el value lo toma a penas escribimos algo... no es necesario que el user haga click en el button.


ancho = parseInt(document.getElementById("txtIdAncho").value);
largo = parseInt(document.getElementById("txtIdLargo").value);
radio = parseInt(document.getElementById("txtIdRadio").value);


//Declaro la funciones


function Rectangulo () 
{
    //Definimos variables
    let ancho;
    let largo;
    let radio;
    let diametroRect;
    let alamRect;

    //Asignamos valor a las variables
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);
    radio = parseInt(document.getElementById("txtIdRadio").value);

    //El perimetro de un rectangulo se calcula como la suma de su ancho y su largo * 2 = (ancho + largo) * 2 
    diametroRect = (ancho + largo) * 2;

    //3 vueltas y un poquito mas asi no nos quedamos cortos...
    alamRect = diametroRect * 3 + 3;

    //Alert
    alert("La cantidad de alambre necesaria es: " + alamRect);


}



function Circulo () 
{
    //Definimos variables
    let radio;
    let diametroCirc;
    let alamCirc;

    //Asignamos valor a las variables

    radio = parseInt(document.getElementById("txtIdRadio").value);

    //La circunferencia se calcula como PI = circunferencia/diametro = PI*diamtro = circunferencia = 2radio * PI = circunferencia
    diametroCirc = 2 * radio * 3.14;

    //PI tambien se puede traer con la funcion math.PI
    diametroCirc = 2 * radio * Math.PI

    //3 vueltas + unos metros para no quedarnos cortos...
    alamCirc = diametroCirc * 3 + 3;

    //Alert
    alert("La cantidad de alambre necesaria es: " + parseInt(alamCirc));

	
}



function Materiales () 
{
    //Para este ejercicio debemos tener en cuenta: area del rectangulo..., cantidad de materiales para ese area sabiendo que son 2 cemento y 3 de cal x m2.
	
//Declaro variables
    let ancho;
    let largo;
    let metrosCuadrados;
    let cal;
    let cemento;
    let calNecesaria;
    let cementoNecesario;
    let materialesNecesarios;

//Asigno valor a variables

    //Capturo los datos
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);

    //Cal y cemento
    cal = 3;
    cemento = 2;

    //Calculo metros cuadrados para el contrapiso
    metrosCuadrados = ancho * largo;

    //Calculo materiales necesarios
    calNecesaria = metrosCuadrados * cal;
    cementoNecesario = metrosCuadrados * cemento;
    materialesNecesarios = calNecesaria + cementoNecesario;

//Mostramos en pantalla
    alert("Para construir este contrapiso, seran necesarias " + calNecesaria + " bolsas de cal, y " + cementoNecesario +" de cemento.")

}

//Ids: txtIdLargo, txtIdAncho, txtIdRadio