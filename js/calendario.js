document.addEventListener('DOMContentLoaded', function() {
    // Obtém a tabela do calendário
    const calendario = document.getElementById('calendario');

    // Obtém a data atual
    const dataAtual = new Date();

    // Obtém o mês atual (0-11)
    const mesAtual = dataAtual.getMonth();

    // Obtém o ano atual (yyyy)
    const anoAtual = dataAtual.getFullYear();

    // Obtém o último dia do mês atual
    const ultimoDiaMesAtual = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // Gera as células do calendário
    let dia = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        cell.classList.add('date-block')
        if (i === 0 && j < new Date(anoAtual, mesAtual).getDay()) {
          // Células vazias antes do primeiro dia do mês
          cell.innerHTML = '';
        } else if (dia > ultimoDiaMesAtual) {
          // Células vazias após o último dia do mês
          cell.innerHTML = '';
        } else {
          // Células com os dias do mês atual
          cell.innerHTML = `<button type="button" class="btn btn-dia" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${dia}</button>`
          dia++;
        }
        row.appendChild(cell);
      }
      calendario.appendChild(row);
    }

    /* // Adiciona um evento de clique aos links dos dias
    const diaLinks = document.getElementsByClassName('dia-bloco');
    for (let i = 0; i < diaLinks.length; i++) {
      diaLinks[i].addEventListener('click', function() {
        alert('Escolha seu horário')
        
      })
    }   */
  })
  
  