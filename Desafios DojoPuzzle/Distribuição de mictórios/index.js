//input

let mictorios = ['_', 'X', 'X', '_', '_', '_', '_']; //X são previamente ocupados, _ são livres

let length = mictorios.length;
let mijoes = 0;

function checarDisponiveis(mictorios, length) {

    if(mictorios[0] == '_' && mictorios[1] == '_'){
        mijoes++;
        mictorios[0] = 'm' + mijoes;
    }

    for(let i = 1; i < length - 1; i++) {

        if(mictorios[i] == '_') {
            if(mictorios[i - 1] == '_' && mictorios[i + 1] == '_') {
                mijoes++;
                mictorios[i] = 'm' + mijoes;
            }
        }

    }

    if(mictorios[length - 1] == '_' && mictorios[length - 2] == '_'){
        mijoes++;
        mictorios[length - 1] = 'm' + mijoes;
    }

    console.log(mictorios.join(' | '));
    console.log(mijoes + ' vão poder utilizar algum mictório.');
    //m é cada "mijão" que pode usar um mictório
}

checarDisponiveis(mictorios, length);