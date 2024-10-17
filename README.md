
# Formulario para Crear Cuenta Título

Este es un formulario desarrollado en React para permitir a los usuarios crear cuentas título mediante la recopilación de datos como la cuenta vinculada, el correo electrónico y la aceptación de los términos y condiciones.

## Características

- **Formulario de creación de cuenta título**: Permite al usuario ingresar su cuenta vinculada, email y aceptar los términos y condiciones.
- **Mensajes de éxito y error**: Muestra mensajes cuando el registro es exitoso o cuando ocurre un error en el proceso.
- **Limpieza automática de campos**: Los campos del formulario se limpian después de un registro exitoso.
- **Validación de los términos y condiciones**: El formulario requiere que el usuario acepte los términos antes de proceder.
- **Mensajes temporales**: Los mensajes de éxito o error desaparecen automáticamente después de 3 segundos.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/cuenta-titulo-formulario.git
cd cuenta-titulo-formulario
```

### 2. Instalar las dependencias

Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde [aquí](https://nodejs.org/).

```bash
npm install
```

### 3. Ejecutar el proyecto

Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

```bash
npm start
```

Esto abrirá el proyecto en `http://localhost:3000` en tu navegador.

## Tecnologías utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Axios**: Cliente HTTP basado en promesas para realizar peticiones a la API.
- **Bootstrap**: Framework CSS para una estructura de diseño responsiva y moderna.

## API Backend

Este formulario se conecta con una API backend para crear la cuenta título. La API espera los siguientes parámetros en el cuerpo de la solicitud:

- `cuentaVinculada` (string)
- `email` (string)
- `terminosAceptados` (boolean)

La API está disponible en la siguiente URL (asegúrate de que tu servidor backend esté en ejecución):

```http
http://localhost:5000/api/v1/cuentas-titulos/crear
```

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu característica o arreglo de error.
3. Realiza tus cambios y haz commit de los mismos.
4. Envía un Pull Request para que revisemos tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactar a [tu-email@dominio.com](mailto:tu-email@dominio.com).
```

### Descripción de las secciones:

1. **Características**: Explica las funcionalidades principales del formulario.
2. **Instalación**: Instrucciones para que otros desarrolladores puedan clonar y ejecutar el proyecto.
3. **Tecnologías utilizadas**: Menciona las tecnologías clave que usas en el proyecto (React, Axios, Bootstrap).
4. **API Backend**: Describe cómo interactúa el formulario con el backend y qué espera de la API.
5. **Contribuciones**: Cómo otras personas pueden contribuir al proyecto.
6. **Licencia**: Tipo de licencia del proyecto, en este caso MIT.
7. **Contacto**: Detalles de contacto para cualquier pregunta.

Este README ofrece una visión clara sobre cómo configurar, utilizar y contribuir al proyecto.