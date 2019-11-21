# Proyecto dynamoDB

### Este es un creado con la excluiva finalidad de mostrar un ejemplo de uso de la BDD dynamoDB de AWS para la asignatura ASXBD del ciclo superior de ASIR.

# Preparación

> Está práctica se sustenta en la instalación de 4 herramientas:
Node js v.10.16.0 - Motor V8 desarrollado por Google que
permite la ejecución de JavaScript fuera del navegador, es decir,
en el servidor. Con ello lanzaremos scripts que ordenan a la BDD
que trabaja basada en los “verbos” de creación, consulta,
modificación y borrado. El documento estará bajado en JSON
(JavaScript Object Notation).

> DynamoDB local versión - CLiente basado en Java
proporcionado por AWS para crear la infraestructura de servidor
que gestiona la BDD de dynamoDB.

> Visual Studio Code - IDE de Microsoft que servirá para crear
la estructura de directorios y ficheros. Proporciona además una
terminal integrada desde donde lanzaremos el servicio y
ejecutaremos los scripts.

> AWS Command line interface - Línea de comandos e intérprete
de comandos con la shell customizada para tareas concretas de la
BDD.

# Instalación

> Instalar dependencia
- npm install

> Lanzar BDD (:8000)
- java -D"java.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar -sharedDb

> Crear tabla
- aws dynamodb create-table --cli-input-json file:"///[ruta]/config/[nombre tabla].json" --endpoint-url http://localhost:8000

> Ver tabla
- aws dynamodb scan --table-name [nombre tabla]

> Crear dato (introudcir datos en ./CRUD/create.js)
- node ./CRUD/create.js

> Leer dato (introudcir [key] en ./CRUD/read.js)
- node ./CRUD/read.js

> Modificar dato (introudcir [key] y [dato] en ./CRUD/update.js)
- node ./CRUD/update.js

> Borrar dato (introducir [key] en ./CRUD/delete.js)
- node ./CRUD/delete.js#   A S B D _ d y n a m o D B  
 