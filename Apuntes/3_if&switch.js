
/*

-------------Condicionales------------------



Hasta ahora habiamos visto un codigo de ejecucion lineal.
Con los condicionales, introducimos la posibilidad de ejecutar un codigo dependiendo de las condiciones que se den.
Para ello, debemos establecer la condiciones, y el codigo a ejecturar si se cumple.

Dentro de los condicionales tenemos al 

--------IF--------
La traduccion al espanol seria "Si" condicional, es decir, si llueve, tengo que usar paraguas.
El if, es una palabra reservada.

La sintaxis es: if(){}.
-if es la palabra reservada para indicar el condicional
-entre los parentesis, ingresamos la condicion que se debe comprobar como verdadera o falsa.
-entre los corchetes, se ingresa la instruccion que se debe ejecutar en el caso de que la condicion haya resultado verdadera. En el caso de que haya resultado falsa, el programa no ingresa a la ejecucion de las instrucciones entre el corchete.

-------ELSE IF------

Es otra forma de declarar una condicion, pero en este caso, solo ingresara a ejecutar las instrucciones en caso de que el IF sea negativo.
En cambio, si ponemos un if luego de otro, entrar en los dos, aunque el primero sea true.

if x  --> compprueba que es true, y ejecuta la instrucciones
if x  --> comprueba que es false, y no ejecuta
if x  --> comprueba que es false, y no ejecuta

if x  --> comprueba que es false, y no ejecuta.
else if --> comprueba que es false (pq el if anterior fue false), y no ejecuta
else if --> compureba que es false y no ejecuta
if x --> comprueba que es true y ejecuta
else if --> no comprueba pq el if anterior era true, por lo cual saltea a los else if siguientes.

-------Switch-------

"switch" es una palabra reservada.
Switch toma el valor de una variable, y sigue un camino de ejecucion, segun este detallado en los diferentes casos (case). En el caso de que ninguno se cumpla, podemos utilizar "default", para indicar las instrucciones que se deben llevar a cabo en el caso de que la variable con coincida con ninguno de los casos declarados.

Sintaxis:

    switch(variable){
        case "valor de la variable":
            instruccion para este caso
            break
        case "otro valor de la variable":
            instruccion para el otro valor de la variable
            break
        default:
            instruccion en caso de que no se cumpla ningun case.
    }


-variable: va a ser la variable de la cual queremos evaluar su valor, para ver que camino seguir segun el caso
-case: palabra reservada para crear un caso en el cual la variable tome un valor particular. Dicho valor debe declararse especificamente al lado del case. RECORDAR PONER DOS PUNTOS (:) DESPUES DEL CASE.
-break: palabra reservada que termina la ejecucion del bloque de codigo (el bloque de codigo son los valores dentro de corchetes, en este casos, se salteo todos los casos, hasta llegar al final del switch.)
        Es necesario declarar el break para que termine la ejecucion, si no, seguira ejecutando los casos que siguen, hasta que encuentre un break.



Si bien la mayoria de los problemas de ejecucion por condicion, pueden resolverse con IF, en algunos casos, es conveniente usar switch.
Sin embargo, en otros casos, es conveniente usar IF. 
Esto depende fundalmente de si los valores de las variables van a ser conocidos, pudiendo crearse caso particulares a partir de los mismos (en tal caso es conveniente usar switch), o si solo se pueden determinar los rangos de valor de la variable (en cuyo caso la mejor opcion es utilizar IF)
*/