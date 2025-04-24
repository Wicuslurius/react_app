# Aplicacion consumo de la api lista de usuarios
  clone el repositorio en su maquina local
    -con git instalado: abra su cmd, powershell, gitbash alguna de los 3 , clone el proyecto con ( git clone [ssh instruction])
  Corra el proyecto en su maquina local
    -en la terminal de visual studio o los 3 mencionados anteriores ejecute (npm start) para correr el proyecto
  ejecute pruebas unitarias
    -en la terminal ejecute (npm test)

#Como funciona el codigo
  Se usa el componente Suspence (para no forzar renderizado del proyecto al momento de realizar la consulta a la api)
    -se crea una funcion fetchData la cual recibe nuestra url para hacer el consumo de la api
    -adentro tengra una funcion que tratara la informacion
    -despues se ejecutara una funcion getSuspender par ver los estados de la consulta
    -por ultimo tenderoms una funcion read con un condicional switch el cual validara el estado de nuestra consulta y al momento de utilizarlo en el app.js el read 
     tendra la informacion adecuada para mostrar
    -por ultimo se realiza una prueba unitaria de la app.js para ver si se esta pintando la informacion solicitada
    -como decoracion agregamos un navbar aleatorio y clases css propias y sencillas

#Expectativas a cumplir segun seniority:
  ● Interfaz básica funcional que consume la API.
  ● Estructura simple y clara en HTML/CSS.
  ● Uso básico de Git (commits descriptivos).
  ● Pruebas unitarias básicas (mínimo 30% cobertura).
  ● Documentación mínima del proyecto (README básico con instrucciones).

  

