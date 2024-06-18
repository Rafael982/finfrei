import prompt from 'prompt-sync'
let ler = prompt()

import { depositar, exibirsaldo, sacar, mensagem, simulador } from './funcao.js'

let saldo = 0

    while (true) {
    console.log(
    `    0 - Sair 
    1- depositar
    2 - sacar
    3 - exibir o saldo
    4- simulador de investimentos`)
    let es = Number(ler())

    if (es === 0) { 
        break
    }

    else if (es === 1) {
        saldo = depositar(saldo)
        console.log(`Novo saldo: ${saldo.toFixed(1)}`)
    } 
    else if (es === 2) {
        saldo = sacar(saldo)
        console.log(`Novo saldo: ${saldo.toFixed(1)}`)
    } 
    
    else if (es === 3) {
        console.clear()
        exibirsaldo(saldo.toFixed(1))
    } 
    
    else if (es === 4) {
        saldo = simulador(saldo)
        console.log(`Novo saldo: ${saldo.toFixed(1)}`)
    }
    else {
        console.log("Opção inválida. Tente novamente.");
    }
}