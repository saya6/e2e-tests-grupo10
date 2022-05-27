## Ejecución de las pruebas planteadas para la semana 1 de la iteración de 8 semanas

### Ventajas y desventajas de las herramientas usadas:
Se agrega el enlace de la página de la [Wiki](https://github.com/saya6/e2e-tests-grupo10/wiki)

### Descripción del uso de estrategias de generación de datos:
Se agrega el enlace de la página de la [Wiki](https://github.com/saya6/e2e-tests-grupo10/wiki/Estrategias-de-generaci%C3%B3n-de-datos-para-pruebas)

### Funcionalidades:
* Iniciar sesión.
* Creación de posts

## Escenarios de Pruebas:
### Posts:
* Ejecución de pruebas exploratorias manuales a la opción de creación de psot
* Ejecución de pruebas de reconocimiento usando Monkeys a la plataforma Ghost
* Ejecución de pruebas de reconocimiento con Rippers a la plataforma Ghost
* Creación de post en la versión 4.45.0
* Creación de post en la versión 4.0.0
* Creación de post con múltiples combinaciones de datos


## Nota
Para facilitar las pruebas se desplegó en un servidor propio la plataforma Ghost en sus versiones `4.45.0` y `4.0.0`. Dónde las credenciales de administración son las siguientes para ambas versiones: 
- email : grupo10@uniandes.edu.co
- password : mMCDL6mWRAWyKUC

- URL version `4.45.0`: http://estudiantesmiso.space:2368/ghost/#
- URL version `4.0.0` : http://estudiantesmiso.space:2369/ghost/#

## Pruebas de extremo a extremo con Cypress para las versiones `4.45.0` y `4.0.0`:
Instrucciones para ejecutar los escenarios de manera local:
Requisitos (Linux/MacOS)

- NodeJS v16.14.2
- Librería de cypress instalada en modo global (npm install -g cypress)
- make

### Ejecucion

`make run-all-cypress-test`

## Ejecucion pruebas de regresion visual

`make run-visual-regression`

Nota: el script para generar el reporte de regresion visual se encuentra en la carpeta `Report`

## Pruebas con Cypress de validación de datos:

Los scripts de las pruebas se encuentran en la carpeta Pruebas-generacion-datos/Cypress 

### Instrucciones para ejecutar los escenarios de manera local:
#### Requisitos (Linux/MacOS)
- NodeJS v16.14.2
- Librería de cypress instalada en modo global (npm install -g cypress)
- make

#### Ejecucion
`make run-cypress-data-tests`

O en su defecto: ubicarse en la carpeta Pruebas-generacion-datos/Cypress, luego ejecutar el comando npm install y finalmente cypress run --headless

#### Incidencias
 URL del registro de incidencias: [Repositorio](https://github.com/saya6/e2e-tests-grupo10/issues)
