function switch_game(jugador1, jugador2) {
  const OPCIONES = ["PIEDRA", "PAPEL", "TIJERA"]
  const JUGADA = OPCIONES[jugador1] + " vs " + OPCIONES[jugador2]

  switch (JUGADA) {
    case "PIEDRA vs PIEDRA":
    case "TIJERA vs TIJERA":
    case "PAPEL vs PAPEL":
      console.log(`¡¡¡EMPATE!!! Ambos jugadores eligieron: ${OPCIONES[jugador1]}`)
      break
    case "PIEDRA vs TIJERA":
    case "PAPEL vs PIEDRA":
    case "TIJERA vs PAPEL":
      console.log(`GANA JUGADOR1, porque ${OPCIONES[jugador1]} vence a ${OPCIONES[jugador2]}`)
      break
    default:
      console.log(`GANA JUGADOR2, porque ${OPCIONES[jugador2]} vence a ${OPCIONES[jugador1]}`)
  }
}

// Empates
console.log("\n" + "Ejecutando: switch.js")
console.log("-".repeat(80) + "\n")
switch_game(PIEDRA, PIEDRA)
switch_game(PAPEL, PAPEL)
switch_game(TIJERA, TIJERA)

// Gana jugador1
switch_game(PAPEL, PIEDRA)
switch_game(PIEDRA, TIJERA)
switch_game(TIJERA, PAPEL)

//Gana jugador2
switch_game(PIEDRA, PAPEL)
switch_game(TIJERA, PIEDRA)
switch_game(PAPEL, TIJERA)
