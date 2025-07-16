// Gera número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

const inputPalpite = document.getElementById('palpite');
const btnChutar = document.getElementById('btnChutar');
const mensagem = document.getElementById('mensagem');
const tentativas = document.getElementById('tentativas');

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

btnChutar.addEventListener('click', () => {
  const palpite = parseInt(inputPalpite.value);

  // Verifica se o valor é válido
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Por favor, digite um número entre 1 e 100.';
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = '🎉 Você acertou! Parabéns!';
    btnChutar.disabled = true;
    inputPalpite.disabled = true;
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
    btnChutar.disabled = true;
    inputPalpite.disabled = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = '🔼 O número secreto é maior!';
  } else {
    mensagem.textContent = '🔽 O número secreto é menor!';
  }

  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
  inputPalpite.value = '';
  inputPalpite.focus();
});
