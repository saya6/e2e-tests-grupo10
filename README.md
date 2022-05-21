## Listado de escenarios de pruebas (120) y funcionalidades principales (4):

### Descripción del uso de estrategias de generación de datos:
Se agrega el enlace de la página de la [Wiki](https://github.com/saya6/e2e-tests-grupo10/wiki/Estrategias-de-generaci%C3%B3n-de-datos-para-pruebas)

### Funcionalidades:
* Iniciar sesión.
* Creación de posts
* Creación de tags
* Creación de miembros
* Creación de páginas

## Escenarios de Pruebas:
### Posts:
* Creación de post con múltiples combinaciones de datos

### Members:
* Creación de miembros con múltiples combinaciones de datos

### Tags:
* Creación de tags con múltiples combinaciones de datos

### Páginas:
* Creación de páginas con múltiples combinaciones de datos

## Nota
Para facilitar las pruebas se desplegó en un servidor propio la plataforma Ghost en su versión `4.45.0`. Dónde las credenciales de administración son las siguientes para ambas versiones: 
- email : grupo10@uniandes.edu.co
- password : mMCDL6mWRAWyKUC

URL version `4.45.0`: http://estudiantesmiso.space:2368/ghost/#

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
 URL del registro de incidencias: [Repositorio](https://github.com/cgarciaa1/Incidencias-proyecto-pruebas-automatizadas/issues)

