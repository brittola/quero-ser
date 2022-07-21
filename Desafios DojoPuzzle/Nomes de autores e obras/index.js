const input = 'Gabriel Rodrigues De Britto Filho';

function gerarNomeAutor(nome) {

    let nomes = nome.split(' ');
    
    nomes = inverterSobrenome(nomes);

    console.log(nomes.join(', '));

}

function inverterSobrenome(nomes) {

    let ultimoNome = nomes.pop();

    for(let i in nomes) {
        nomes[i] = nomes[i].toLowerCase();
        switch(nomes[i]) {
            case 'da':
            case 'de':
            case 'do':
            case 'das':
            case 'dos':
                break;
            default:
                let aux = nomes[i];
                nomes[i] = aux.charAt(0).toUpperCase() + aux.slice(1);
        }
    }
    
    switch(ultimoNome) {
        case 'Filho':
        case 'Filha':
        case 'Neto':
        case 'Neta':
        case 'Sobrinho':
        case 'Sobrinha':
            ultimoNome = nomes.pop() + ' ' + ultimoNome;
            break;
        default:
            break;
    }

    nomes = [ultimoNome.toUpperCase(), nomes.join(' ')];

    return nomes;

}

gerarNomeAutor(input);