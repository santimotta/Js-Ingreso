/*
Hasta ahora los tipos de ejecucion que vimos fueron: Secuenciales, y condicionales... ambas con una secuencia de ejecucion lineal.
En el caso de la secuencial, todas las lineas se ejecutan; y el condicional, en el cual, algunas lineas pueden ejecutarse o no, dependiendo de si cumplen o no la condicion de ejecucion.


Las estructuras iterables son un tipico de estructuras en las cuales la secuencia de ejecucion puede repetirse, en el caso de que se cumple cierta condicion, es decir, el flujo del programa puede VOLVER HACIA ATRAS.

------WHILE------

-> while es una palabra reservada, utilizada para ejecutar una secuencia iterativa.

-> La sintaxis (similar a la de if) es:

while (condicion){    ----> si se cumple la condicion, entro a la ejecucion de las instrucciones
    instrucciones     ----> luego de ejecutar las instrucciones, compruebo nuevamente la condicion. Si la condicion sigue siendo true, se vuelven a ejecutar las instrucciones. Esto sucede hasta que la condicion sea false.
}


-> Existen distintas formas de configurar while, dependiendo de si sabemos o no de antemano, cuantas veces queremos que se repita el bloque.

Si sabemos cuantas veces queremos ejecutar el codigo....
+ crear una variable de control (contador), por convencion i, y le asignamos el valor (inicializamos).
+ en el bloque del instrucciones de while, se debe anadir valor a la variable contador, hasta transformar la condicion en falsa.

        funtion x()
        {
            let i // declaro
            i = 0 // inicializo

            while ( i >= 2 ){   //variable de control
                alert("Hola");
                i = i + 1;  //modificacion de la variable de control
            }

        }





*/