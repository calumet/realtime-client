# Reducer: app

Datos de estado de la aplicación realtime.

**Model:**

```js
immutable.Map (
  {
    Boolean starting,  // Se está inicializando la app
    Boolean started,   // La app y sus recursos se han initializado correctamente
    Object fatal,      // Ha ocurrido un error fatal y la app no puede continuar
    String room,       // Sala actualmente observada
  }
)
```

## Start

Inicia la aplicación cargando los recursos necesarios iniciales y renderizando la aplicación.

**Payload:** `undefined`

## Started

La aplicación ha inicializado correctamente.

**Payload:** `undefined`

## Error

Un error no fatal ha ocurrido. La aplicación puede continuar.

**Payload:** `{ String message, ... }`

## Fatal

Un error fatal ha ocurrido y la aplicación no puede continuar.

**Payload:** `{ String message, ... }`

## Change Room

Cambiar la sala actual que el usuario está actualmente observando.

**Payload:** `String roomId`
