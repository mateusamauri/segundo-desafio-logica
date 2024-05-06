
let saldoVitorias = calculadoraDePartidas(68, 12)

function calculadoraDePartidas(vitorias, derrotas) {
    let calculo = vitorias - derrotas
    return (calculo)
}

let nivelHeroi

if (saldoVitorias < 10) {
    nivelHeroi = "Ferro"
} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivelHeroi = "Bronze"
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivelHeroi = "Prata"
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivelHeroi = "Ouro"
} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivelHeroi = "Diamante"
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivelHeroi = "Lendário"
} else {
    nivelHeroi = "Imortal"
}


console.log("O herói tem saldo de " + saldoVitorias + " e está no nível " + nivelHeroi)