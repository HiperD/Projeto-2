const btnJogoNumero = document.getElementById('jogoNumero');
const btnSomaNumeros = document.getElementById('somaNumeros');
const btnCalcNotas = document.getElementById('calcNotas');

function bloquearBotoes(bloquear) {
    btnJogoNumero.disabled = bloquear;
    btnSomaNumeros.disabled = bloquear;
    btnCalcNotas.disabled = bloquear;
}

btnJogoNumero.addEventListener('click', () => {
    bloquearBotoes(true);
    alert('Seja bem-vindo ao nosso jogo!');

    // Gera um número secreto aleatório entre 1 e 10
    let numeroSecreto = 5;
    console.log(numeroSecreto); // (Para testes, pode remover depois)

    // Variável para armazenar o chute do usuário
    let chute;
    let tentativas = 0; // Inicia o contador de tentativas

    while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    tentativas++; // Soma +1 a cada tentativa

    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente.`);
    } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }
    }
    bloquearBotoes(false);
});

btnSomaNumeros.addEventListener('click', () => {
    bloquearBotoes(true);
    alert('Seja bem-vindo à soma de números!');
    let numero = 0;
    numero += parseInt(prompt("Digite o primeiro número inteiro:"));
    numero += parseInt(prompt("Digite o segundo número inteiro"));
    alert(`A soma dos números é: ${numero}`);
    bloquearBotoes(false);
});

btnCalcNotas.addEventListener('click', () => {
    bloquearBotoes(true);
    alert("Bem-vindo ao Jogo da Média!");

    let quantidade = prompt("Quantos números você quer digitar?");
    quantidade = Number(quantidade);

    if (quantidade <= 0 || quantidade === null || quantidade === "" || typeof quantidade !== "number") {
        alert("Quantidade inválida. Tente novamente com um número maior que zero.");
    }
    else {
        let soma = 0;
        for (let i = 1; i <= quantidade; i++) {
            let entrada = prompt(`Digite o ${i}º número:`);
            let numero = Number(entrada);

            if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
            alert("Valor inválido. Digite um número.");
            i--; // repetir a rodada
            continue;
            }
            soma += numero;
        }
    }
    let media = soma / quantidade;
    // Aqui está o uso correto da template string com crase:
    alert(`A média calculada entre os ${quantidade} números digitados é: ${media}`);
    bloquearBotoes(false);
});