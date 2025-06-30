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
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let chute;
    let tentativas = 0;

    while (chute != numeroSecreto) {
        chute = parseInt(prompt('Escolha um número entre 1 e 100'));
        tentativas++;
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
    do {
        numero = 0;
        numero += parseInt(prompt("Digite o número que deseja somar"));
        do {
            numero += parseInt(prompt("Digite outro número que deseja somar"));
        } while (confirm("Gostaria de somar mais números?"));
        alert(`Soma total resultou em ${numero}`);
    } while (confirm("Gostaria de somar mais um conjunto?"));
    alert("Até mais :)");
    bloquearBotoes(false);
});

btnCalcNotas.addEventListener('click', () => {
    bloquearBotoes(true);
    alert('Seja bem-vindo à calculadora de notas!');
    let qtdNotas = parseInt(prompt('Digite a quantidade de Notas que compõem a média'));
    if (qtdNotas > 0) {
        do {
            let media = 0;
            for (let i = 0; i < qtdNotas; i++) {
                media += parseInt(prompt(`Digite a ${i+1}ª nota`));
            }
            media /= qtdNotas;
            if (media >= 6) {
                alert(`Aluno foi aprovado com média final ${media}`);
            } else {
                alert(`Aluno foi reprovado com média final ${media}`);
            }
        } while (confirm("Gostaria de calcular outra média?"));
        alert("Até a próxima :)");
    } else {
        alert("Até a próxima :)");
    }
    bloquearBotoes(false);
});