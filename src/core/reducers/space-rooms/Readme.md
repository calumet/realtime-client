# Reducer: spaceRooms

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

## Availability

Deshabilita/habilita una sala usando su identificador.

**Payload:** `{ String id, Boolean disabled }`
