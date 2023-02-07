/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").


TP3
Santiago Motta

*/



/*
                INFO IMPORTANTE
    (x °F − 32) × 5/9 = y °C

    Id: txtIdTemperatura


*/


//-------------------------------------------------
       // DE FAHRENHEIT A CENTIGRADOS

function FahrenheitCentigrados () 
{
    //inicializo las variables:
    var temperatura;
    var fahrenheit;
	var celsius;


    //asigno valor
    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    //aplico la formula para obtener los valores

    fahrenheit = (temperatura / (5/9)) + 32;
    celsius = (temperatura - 32) * (5/9);

    //limitamos el numero de decimales con la fx tofixed().

    fahrenheit = fahrenheit.toFixed(1);
    celsius = celsius.toFixed(1);


    //muestro por alert

    alert(temperatura + " grados Fahrengeit son " + celsius + " grados Celsius")
}




//-------------------------------------------------
        // DE CENTIGRADOS A FAHRENHEIT

function CentigradosFahrenheit () 
{
    //inicializo las variables:
    var temperatura;
    var fahrenheit;
	var celsius;


    //asigno valor
    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    //aplico la formula para obtener los valores
    
    fahrenheit = (temperatura / (5/9)) + 32;
    celsius = (temperatura - 32) * (5/9);	

    //limitamos el numero de decimales con la fx tofixed().

    fahrenheit = fahrenheit.toFixed(1);
    celsius = celsius.toFixed(1);


    //muestro por alert

    alert(temperatura + " grados Celsius son " + fahrenheit + " grados Fahrenheit")
}
