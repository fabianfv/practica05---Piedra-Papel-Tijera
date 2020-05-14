const PIEDRA = 0
const PAPEL = 1
const TIJERA = 2

function game(jugador1, jugador2) {
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
