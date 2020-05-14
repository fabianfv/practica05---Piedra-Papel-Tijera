const PIEDRA = 0
const PAPEL = 1
const TIJERA = 2

function game(jugador1, jugador2) {
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
game(PIEDRA, PIEDRA)
game(PAPEL, PAPEL)
game(TIJERA, TIJERA)

// Gana jugador1
game(PAPEL, PIEDRA)
game(PIEDRA, TIJERA)
game(TIJERA, PAPEL)

//Gana jugador2
game(PIEDRA, PAPEL)
game(TIJERA, PIEDRA)
game(PAPEL, TIJERA)
