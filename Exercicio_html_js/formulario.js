    const formulario = document.getElementById('formulario');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagem = document.getElementById('mensagem');

    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault(); 

      const valorA = Number(campoA.value);
      const valorB = Number(campoB.value);

      if (valorB > valorA) {
        mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A.';
        mensagem.classList.remove('invalido');
        mensagem.classList.add('valido');
      } else {
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        mensagem.classList.remove('valido');
        mensagem.classList.add('invalido');
      }
    });