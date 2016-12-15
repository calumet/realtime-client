# Reducer: rooms

Lista de todas las salas del espacio en el que el usuario está actualmente conectado.

**Model:**

```js
immutable.List (
  [ { SpaceRoom } ]
)
```

## Reset

Resetea la lista de salas actuales por una nueva proveida.

**Payload:** `[ { SpaceRoom } ]`

## Disable

Deshabilita/habilita una sala usando su identificador.

**Payload:** `{ String id, Boolean disabled }`
