/*



---Operadores---

-> ARITMETICOS

        "+" (como suma, no como concatenacion)
        "-"
        "*"
        "/"
        "%" (resto de la division entera)

    El operador (cualquiera de los anterior), tiene a la izquierda y la derecha, los operandos.
    En el caso de los operadores aritmeticos, los operandos son numeros (int, float)

-> RELACIONALES

    Operadores que relacionan un operando, con otro operando.

        "==" ---> el operando que esta a las IZQUIERDA es igual a la que esta a la DERECHA? --> si lo es: True, si no lo es: False.
        "!=" ---> el operando de la IZQUIERDA es DISTINTO al de la derecha?
        ">" ---> I mayor a D?
        "<" ---> I menor a D?
        "<=" ---> I menor o igual a D?
        ">=" ---> I mayor o igual a D?

    En este caso, los operandos pueden ser cualquier tipo de dato.
    El resultado de las operaciones relacionales, siempre es un booleano (True o False)


-> RELACIONALES ESTRICTOS

    Obliga a que los operandos sean estrictamente iguales...
    Para los operadores relacionales, "15" (str) == 15 (int) = true
    Pero para los operadores relacionales estrictos no.
    Para declararlos utilizamos (solo en Js):

        === I es igual tanto en valor como en tipo de D?
        !== I es distinto tanto en valor como en tipo de D?

      

-> LOGICOS

    Se utilizan para armar condiciones COMPUESTAS. 
    Las condiciones simples, son las que tienen un solo operador.
    Las compuestas, tienen mas de un operador.
    Dichas condiciones, deben enlazar las condiciones mediante operadores logicos.

    La sintaxis seria :
    if(condicion1 operadorlogico condicion2){
        instruccion
    }
    
        OR ---> para que una condicion compuesta por dos operandos sea True, al menos una de las dos debe ser True.
                La unica forma de que on OR sea False, es que los dos operandos sean False
        
        AND ---> para que una condicion compuesta resulte True, ambos operandos deben ser True.
                La unica forma de que un AND sea True, es que ambos operandos sean True.

    
    Dichos operadores logicos trabajan con "tablas de verdad"

        a    b   |   OR    |   AND   |
        ---------|---------|---------|
        F    F   |    F    |    F    |
        T    F   |    T    |    F    |
        F    T   |    T    |    F    |
        T    T   |    T    |    T    |



    Tambiene existe un operador logico que niega el resultado de la condicion.
    
        NOT ---> invierte el resultado de una operacion logica.


    Los operadores se escriben de la siguiente forma:

        OR --> || (pipe)
        AND --> && (ampersand)
        NOT --> !



*/