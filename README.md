## Listado de escenarios de pruebas (20) y funcionalidades (5):
### Funcionalidades:
* Iniciar sesión.
* Crear posts.
* Eliminar posts.
* Visualizar el previo de un post.
* Crear un miembro.
* Visualizar lista de miembros.
* Editar un miembro.
* Eliminar un miembro.
* Crear tag
* Actualizar tag
* Listar tags
* Eliminar tag

## Escenarios de Pruebas:
### Posts:
* Crear un post correctamente
* Crear un post cond atos vacíos
* Eliminar un post publicado
* Eliminar un post no publicado
* Visualizar el previo de un post

### Members:
* Crear un miembro exitosamente.
* Crear un miembro con correo existente (Duplicado).
* Eliminar un miembro y cancelar.
* Eliminar un miembro exitosamente.
* Editar un miembro exitosamente.
* Intentar editar un miembro con un correo vacío.
* Intentar editar un miembro con un correo invalido.
* Intentar editar un miembro con un correo existente.
* Intentar editar un miembro con una nota muy larga.

### Tags:
* Crear un tag de manera correcta.
* Crear un tag de manera incorrecta - sin nombre.
* Actualziar un tag de manera correcta.
* Actualziar un tag de manera incorrecta - sin nombre.
* Eliminar un tag existente.

## Pruebas con Cypress:
### Instrucciones para ejecutar los escenarios de manera local:
#### Requisitos (Linux/MacOS)
- NodeJS v16.14.2
- Libreria de cypress instalada en modo global (npm install -g cypress)
- make
#### Ejecucion
`make run-cypress-test`


## Pruebas con Kraken:
### Instrucciones para ejecutar los escenarios de manera local:
#### Requisitos (Linux/MacOS)
- NodeJS v16.14.2
- Libreria de kraken instalada en modo global (npm install -g kraken-node)
- make
#### Ejecucion
`make run-kraken-test`

## Pruebas usando VirtualBox:
Disponemos de una maquina virtual con el ambiente preparado, listo para ser ejecutado.
Para realizar las pruebas usando este mecanismo, debe de disponer de VirtualBox version 6.2 o superior.

#### Ejecucion
- Debe descargar la imagen de este link: ...
- Importar la maquina virtual.
- Configurar la maquina virtual ajustandola a sus necesidades ( asignar numero de CPUs y memoria RAM )
- Ejercutar la maquina virtual.
- Iniciar sesion con el usuario `tae` y password `tae2022`.
- Abrir una terminal.
- `cd e2e-tests-grupo10`.
- Dependiendo de las pruebas que desee ejecutar debe ejecutar `make run-cypress-test` para ejecutar las pruebas usando `kraken` o `make run-cypress-test` para ejecutar las pruebas usando `cypress`.
- Enjoy it!



