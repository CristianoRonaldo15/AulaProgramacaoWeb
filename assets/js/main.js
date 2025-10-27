// main.js
document.addEventListener('DOMContentLoaded', function() {
  // Inserir ano no rodapé
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year-2')?.textContent = y;
  document.getElementById('year-3')?.textContent = y;

  // Menu toggle (simples)
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Máscaras simples: CPF, Telefone, CEP
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  function setCursorToEnd(el) { setTimeout(() => { el.selectionStart = el.selectionEnd = el.value.length; }, 0); }

  if (cpfInput) {
    cpfInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g,'').slice(0,11);
      if (v.length > 9) v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2}).*/, '$1.$2.$3-$4');
      else if (v.length > 6) v = v.replace(/^(\d{3})(\d{3})(\d{1,3}).*/, '$1.$2.$3');
      else if (v.length > 3) v = v.replace(/^(\d{3})(\d{1,3}).*/, '$1.$2');
      e.target.value = v;
    });
  }

  if (telInput) {
    telInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g,'').slice(0,11);
      if (v.length > 6) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
      else if (v.length > 2) v = v.replace(/^(\d{2})(\d{1,4}).*/, '($1) $2');
      else v = v.replace(/^(\d{0,2})/, '($1');
      e.target.value = v;
    });
  }

  if (cepInput) {
    cepInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g,'').slice(0,8);
      if (v.length > 5) v = v.replace(/^(\d{5})(\d{1,3}).*/, '$1-$2');
      e.target.value = v;
    });
  }

  // Validação do form usando Constraint Validation API + feedback simples
  const form = document.getElementById('cadastroForm');
  if (form) {
    form.addEventListener('submit', function(ev) {
      if (!form.checkValidity()) {
        ev.preventDefault();
        // Foco no primeiro elemento inválido
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        alert('Inscrição invalida! Tente novamente.')
      } else {
        // Aqui normalmente enviaríamos via fetch/AJAX
        ev.preventDefault();
        alert('Inscrição enviada (simulação). Obrigado!');
        form.reset();
      }
    });
  }

});
