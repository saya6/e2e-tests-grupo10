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

<<<<<<< HEAD
=======
### Tags:
* Crear un tag de manera correcta.
* Crear un tag de manera incorrecta - sin nombre.
* Actualziar un tag de manera correcta.
* Actualziar un tag de manera incorrecta - sin nombre.
* Eliminar un tag existente.
>>>>>>> master

## Pruebas con Cypress:
### Instrucciones para ejecutar los escenarios:
`make run-cypress-test`


## Pruebas con Kraken:
### Instrucciones para ejecutar los escenarios:
`make run-kraken-test`


