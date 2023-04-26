calendario()
profissional()
servico()
horario()
confirmacao()



function calendario() {document.addEventListener('DOMContentLoaded', function() {
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

      const mesAgora = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

      const mesTitulo = document.getElementById('mes-titulo')
      mesTitulo.textContent = `Agenda ${mesAgora[mesAtual]} de ${anoAtual}`
      
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
            cell.innerHTML = `<button type="button" class="btn btn-dia" id="${dia}" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${dia}</button>`
            dia++;
          }
          row.appendChild(cell);
        }
        calendario.appendChild(row);
      }

      

      // Adiciona um evento de clique aos links dos dias e pega o dia clicado
      const diaLinks = document.getElementsByClassName('date-block');
      for (let i = 0; i < diaLinks.length; i++) {
        diaLinks[i].addEventListener('click', () => {
          dia_escohido = diaLinks[i].innerText
          
          
        })
        
      }

      

    }//DOMContentLoad
  )//addEventListener
}//function calendario


function profissional(){
  const profissional = document.querySelectorAll('[data-profissional]')
  for (let i=0; i< profissional.length; i++) {
    profissional[i].addEventListener('click', ()=>{
      profissional_escolhido = profissional[i].id
      return profissional_escolhido
    })
  }
}

function servico(){
  const servico = document.querySelectorAll('[data-servico]')
  for (let j=0; j<servico.length; j++) {
    servico[j].addEventListener('click', () => {
      servico_escolhido = servico[j].innerText
      return servico_escolhido
    } )
  }
}

function horario(){
  const horario = document.querySelectorAll('[data-horario]')
  for (let k=0; k<horario.length; k++) {
    horario[k].addEventListener('click', () => {
      horario_escolhido = horario[k].innerText
      return horario_escolhido
    } )
  }
}

function confirmacao(){
  const confirma = document.querySelector('[data-confirma]')
  confirma.addEventListener('click', () => {
    alert(`barbeiro ${profissional_escolhido}, serviço ${servico_escolhido}, no dia a ser definido, as ${horario_escolhido}`)
  })
}


 
    

