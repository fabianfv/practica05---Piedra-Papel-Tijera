function if_game(jugador1, jugador2) {
  const OPCIONES = ["PIEDRA", "PAPEL", "TIJERA"]

  if (jugador1 === jugador2) {
    console.log(`¡¡¡EMPATE!!! Ambos jugadores eligieron: ${OPCIONES[jugador1]}`)
  } else if (
    (jugador1 === PIEDRA && jugador2 === TIJERA) ||
    (jugador1 === PAPEL && jugador2 === PIEDRA) ||
    (jugador1 === TIJERA && jugador2 === PAPEL)
  ) {
    console.log(`GANA JUGADOR1, porque ${OPCIONES[jugador1]} vence a ${OPCIONES[jugador2]}`)
  } else {
    console.log(`GANA JUGADOR2, porque ${OPCIONES[jugador2]} vence a ${OPCIONES[jugador1]}`)
  }
}

console.log("\n" + "Ejecutando: if.js")
console.log("-".repeat(80) + "\n")

// Empates
if_game(PIEDRA, PIEDRA)
if_game(PAPEL, PAPEL)
if_game(TIJERA, TIJERA)

// Gana jugador1
if_game(PAPEL, PIEDRA)
if_game(PIEDRA, TIJERA)
if_game(TIJERA, PAPEL)

//Gana jugador2
if_game(PIEDRA, PAPEL)
if_game(TIJERA, PIEDRA)
if_game(PAPEL, TIJERA)
