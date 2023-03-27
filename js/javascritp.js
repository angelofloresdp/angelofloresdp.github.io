function aleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion (jugada) {
    let resultado =''
    if (jugada == 1) {
    resultado =  ' piedra 🥌'
    } else if (jugada == 2) {
    resultado = ' papel 📰'
    } else if (jugada == 3) {
    resultado = ' tijera ✂'
    } else {
    resultado = (' no selecciono alguna opción correcta, porfavor recargue la página e intente nuevamente')
    }
    return resultado
}
let jugador=0 
let min=1
let max=3
let pc=0
let triunfos=0 
let perdidas=0 
while(triunfos < 3 && perdidas <  3) {  
    pc = aleatorio (1,3)
    jugador= prompt (' escoja 1 para piedra, 2 para papel o 3 para tijera')
    alert ('pc escogio ' + eleccion(pc))
    alert ('tu eliges ' + eleccion(jugador))
    if (pc == jugador) {
        alert('empate')
    } else if (pc == 1 && jugador == 2) {
        alert('ganaste')
    triunfos= triunfos + 1
    } else if (pc == 2 && jugador == 3) {
        alert('ganaste')
    triunfos= triunfos + 1
    } else if (pc == 3 && jugador == 1) {
        alert('ganaste')
    triunfos= triunfos + 1
    } else {
        alert('perdiste')
    perdidas= perdidas + 1
    }
}
alert ('ganaste ' + triunfos + ' veces. perdiste '+ perdidas +' veces' )
