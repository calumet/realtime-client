# RealTime Client

Framework client-side de conexión con el servidor [realtime](https://github.com/calumet/realtime)
basado en [React](https://facebook.github.io/react), [Redux](http://redux.js.org) y [Foundation Sites](http://foundation.zurb.com/sites.html).

Consiste en un archivo de estilos y otro de scripts. La última distribución se encuentra en [/dist](../dist).

Tiene dependencias de la fuentes de [Google Fonts](http://fonts.google.com)
[Open Sans](https://fonts.google.com/specimen/Open+Sans) y [Roboto](https://fonts.google.com/specimen/Roboto), y
en la fuente de iconos [Material Design Icons](http://materialdesignicons.com).

## Example

En una página HTML:

- Importamos las dependencias
- Importamos los archivos del framework
- Importamos la librería socket.io desde el servidor de realtime
- Definimos una etiqueta con el identificador "realtime"
- Inicializamos el framework pasándole los parámetros:
    - server: URL base de servidor realtime
    - spaceCode: código del espacio a conectarnos
    - userId: identificador del usuario que se conecta

```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Roboto:400,400i,700,700i">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/1.8.36/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="/dist/css/realtime.css">
  </head>
  <body>
    <div id="realtime"></div>
    <script src="http://127.0.0.1:9700/socket.io/socket.io.js"></script>
    <script src="/dist/js/realtime.js"></script>
    <script>
      realtime.start({
        server: 'http://127.0.0.1:9700',
        spaceCode: 'aulavirtual',
        userId: 'U1291',
      });
    </script>
  </body>
</html>
```

## Demos

Ejemplos de implementación con datos de prueba se encuentra en [demos](../demos).
