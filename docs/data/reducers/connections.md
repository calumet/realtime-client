# Reducer: connections

Lista de las conexiones enlazadas con el espacio actual en la instancia realtime.

**Model:**

```js
immutable.List (
  [ Connection ]
)
```

## Add

Agrega un nuevo item de conexión a la lista.

**Payload:** `{ Connection }`

## Remove

Remueve un item de conexión de la lista por su identificador.

**Payload:** `String id`

## Merge

Funde/une la lista de items actual con una nueva.

**Payload:** `[ { Connection } ]`
