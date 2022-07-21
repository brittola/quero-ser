//inputs

const moedas = { //quantas moedas você tem
    c5: 3,
    c10: 3,
    c25: 3,
    c50: 3,
    c100: 3
}

const total = 1.50; //valor a pagar

//outputs

function pagar(valor) {

    while (moedas.c5 > 0 && valor > 0) {
        valor = (valor - 0.05).toFixed(2);
        moedas.c5--;
    }

    while (moedas.c10 > 0 && valor > 0) {
        valor = (valor - 0.10).toFixed(2);
        moedas.c10--;
    }

    while (moedas.c25 > 0 && valor > 0) {
        valor = (valor - 0.25).toFixed(2);
        moedas.c25--;
    }

    while (moedas.c50 > 0 && valor > 0) {
        valor = (valor - 0.50).toFixed(2);
        moedas.c50--;
    }

    while (moedas.c100 > 0 && valor > 0) {
        valor = (valor - 1.00).toFixed(2);
        moedas.c100--;
    }

    avisos(valor);

}

function avisos(valor) {
    
    if (valor > 0) {
        console.log('Falta pagar: R$' + valor.toFixed(2))
    } else if (valor < 0) {
        console.log('O troco é: R$' + (valor * -1).toFixed(2));
    } else {
        console.log('O pagamento foi exato.');
    }

    console.log('Moedas restantes: ' + contarMoedas());
}

function contarMoedas() {

    return moedas.c5 + moedas.c10 + moedas.c25 + moedas.c50 + moedas.c100;

}

pagar(total);