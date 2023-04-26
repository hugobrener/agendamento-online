// construir objeto agenda
      /* {
        "Barbeiro": "profissional-escolhido",
        "Dia": "dia-escolhido",
        "Servico": "servico-escolhido",
        "Horário": "horario-escolhido"
      } */
      
/* function log(msg) {
    const logElem = document.querySelector(".log");
  
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}
  
log("Logging mouse events inside this container…");
  
function logEvent(event) {
    const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
    log(msg);
}
  
const boxElem = document.querySelector(".box");


document.addEventListener("click", logEvent); */


const mes = new Date();
const conteudoDiv = document.querySelector('#mes');
mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
diasSemana = ['segunda', 'terça','quarta', 'quinta', 'sexta','sabado','domingo'];
conteudoDiv.innerHTML = `<span>${mesesAno[mes.getMonth()]}  de  ${mes.getFullYear()} </span>`;

let diaAtual = document.querySelector(`[data-${diasSemana[mes.getDay()]}]`);
diaAtual.innerHTML = `<span>${mes.getDate()}</span>`;

dayWeek = document.querySelectorAll('.numberday')




