# Notas de Proyecto

## Pendientes funcionales

- [X] Page default para el router
- [ ] El header comun no navega
  
----

## Mejoras

### Generales

- [ ] Implementar el loading spinner en todas las pantallas (ver la propiedad visibility para reservar espacio)
- [ ] Crear un Guard para la navegacion
- [ ] Devolver un user feedback en los campos de input del login
- [ ] Timeout con las requests
- [ ] Profile Pic - Alinear verticalmente src alt text de la foto de perfil al medio
- [ ] **Corregir el Loading screen y los alerts que en algunas pantallas cuelgan la APP**

### Login

- [ ] En start reemplazar margin por porcentajes de alturas (Titulo y Ingresar 80%-20%)
- [ ] Aumentar los check de campos input (longitud del campo) para login, register, recover.
- [ ] Fijar controles (buttons, Terms and Conds) en la parte inferior
- [ ] Mostrar alerts en validacion de datos para informar al usuarios
- [X] Chequear disponibilidad de usuario en register
- [ ] Pasar router a formato Ionic4
- [X] El account como interface no es suficiente -> pasarlo a clase Edit: si lo es. Solucionado.
- [ ] **Revisar la implementacion del loading backdrop en especial en register**

### Tabs

- [ ] Darken home images (CSS filter?)
- [ ] La pagina Home agrega una barra para deslizar que mueve 0.000002mm. No debería.
  
### Profile

- [X] Para poder usar el "back button" tiene su propio header, ver de hacerlo generico para toda la APP.
- [ ] Con la foto de perfil se trasluce parte de la card
- [ ] Agregar la opción de cambiar foto de perfil
- [ ] Corregir desde el backend la forma en que se envía la foto de perfil. Enviar como un campo más.
  
### Header

- [X] Hacer un header global dentro de la app. Que no exista un header por cada tab.
- [X] Ver como hacer un import comun en APP Module para todo el proyecto para el componente header
- [ ] Aumentar el tamaño de los iconos de perfil y busqueda en el header
- [ ] Pasar router a formato Ionic4
- [ ] Hacer una verificacion más fuerte sobre el campo account.picture. Actualmente solo chequea si account.picture != "". Chequear que la foto sea valida.
  
----

## Testing

- [ ] Inscribir un usuario/email ya existente. Discriminar para el user feedback UI.
- [ ] Rotacion
  
----
  
## Consultas

- [ ] Terminos y Condiciones de Uso. Servicio de Ayuda.
- [ ] Qué deberia buscar la barra de busqueda superior?