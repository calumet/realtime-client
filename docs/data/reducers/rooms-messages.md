# Reducer: roomMessages

Lista de todos los mensajes de todas las salas actuales.

**Model:**

```js
immutable.List (
  [ { RoomMessage } ]
)
```

## Add

Agrega un nuevo mensaje a la lista de mensajes.

**Payload:** `{ RoomMessage }`

## Merge

Funde/une la lista de mensajes actual con una nueva lista proveida.

**Payload:** `[ { RoomMessage } ]`
