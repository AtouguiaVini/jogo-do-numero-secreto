let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo de Advinhação');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto){
            let palavraTentativa = tentativas >1? 'tentativas':'tentativa';
            let mensagemTentativas = `Parabéns, você descobriu o número com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('h1','Você acertou!!');
            exibirTextoNaTela('p',`${mensagemTentativas}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto){
                exibirTextoNaTela('h1','Erroooooooou!');
                exibirTextoNaTela('p','O número secreto é menor!');
            } else {
                    exibirTextoNaTela('h1','Erroooooooou!');
                    exibirTextoNaTela('p','O número secreto é maior!');
            }
            tentativas++;
            limparCampo();
        };
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeNumerosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeNumerosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    } 
}

