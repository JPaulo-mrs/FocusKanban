var corTitulo;
var botaoAdm;
var botaoGep;
var botaoMkt;
var botaoPjt;
var botaoPres;
var botaoCom;
var Card;
var ColunaCard;

//Adicionar ouvintes para touchscreen
let touchMoved = false;

function attachTouchListeners() {
  const tasks = document.querySelectorAll('.item');
  
  tasks.forEach(task => {
    task.addEventListener('touchstart', function(event) {
      touchMoved = false; // Reinicie a variável para falso a cada novo toque
    });

    task.addEventListener('touchmove', function(event) {
      touchMoved = true; // Se o dedo se mover, defina como true
    });

    task.addEventListener('touchend', function(event) {
      if (!touchMoved) { // Se o dedo não se moveu (ou seja, foi um toque simples)
        event.preventDefault(); // Prevenindo comportamentos padrão
        containerCard(this); // Chame sua função containerCard com a tarefa clicada
      }
    }, { passive: false }); // Permitindo prevenção de comportamento padrão
  });
}


document.addEventListener('DOMContentLoaded', (event) => {
  attachTouchListeners();
});

function attachCloseListeners() {
  const closeButton = document.querySelector('#cardEx .closeButton'); // Certifique-se de ter uma classe ou ID para seu botão de fechar
  
  closeButton.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevenindo comportamentos padrão
    closeContainer();
  }, { passive: false }); // Permitindo prevenção de comportamento padrão
}

function attachCloseListeners() {
  const closeButton = document.querySelector('#cardEx .closeButton'); // Certifique-se de ter uma classe ou ID para seu botão de fechar
  
  closeButton.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevenindo comportamentos padrão
    closeContainer();
  }, { passive: false }); // Permitindo prevenção de comportamento padrão
}



function botaoColuna()
{
  var local = document.getElementById("botaoColuna");
  var buttonR = document.createElement("button");
  var imageR = document.createElement("img");
  var buttonL = document.createElement("button");
  var imageL = document.createElement("img");
  var colunaAtual = document.createElement("p");

  buttonR.className = "moverButton";
  buttonR.id = "moverButton";
  buttonR.setAttribute('onclick', 'moverColunaA()');
  local.appendChild(buttonR);
  imageR.className = "moverImg";
  imageR.src = "../../src/setaR.png";
  buttonR.appendChild(imageR);

  colunaAtual.className = "movertext";
  colunaAtual.id = "movertext";
  colunaAtual.textContent = ColunaCard.id;
  local.appendChild(colunaAtual);

  buttonL.className = "moverButton";
  buttonL.id = "moverButton";
  buttonL.setAttribute('onclick', 'moverColunaF()');
  local.appendChild(buttonL);
  imageL.className = "moverImg";
  imageL.src = "../../src/setaL.png";
  buttonL.appendChild(imageL);
}

function moverColunaA()
{
  var lista = document.getElementsByClassName("coluna");
  var textColunaAtual = document.getElementById("movertext");
  switch(ColunaCard.id)
  {
    case "Backlog":
      lista[3].appendChild(Card);
      textColunaAtual.textContent = lista[3].id;
      ColunaCard = Card.parentNode;
    break;
    case "Em andamento":
      lista[0].appendChild(Card);
      textColunaAtual.textContent = lista[0].id;
      ColunaCard = Card.parentNode;
    break;
    case "Review":
      lista[1].appendChild(Card);
      textColunaAtual.textContent = lista[1].id;
      ColunaCard = Card.parentNode;
    break;
    case "Concluido":
      lista[2].appendChild(Card);
      textColunaAtual.textContent = lista[2].id;
      ColunaCard = Card.parentNode;
    break;
  }
}

function moverColunaF()
{
  var lista = document.getElementsByClassName("coluna");
  var textColunaAtual = document.getElementById("movertext");
  switch(ColunaCard.id)
  {
    case "Backlog":
      lista[1].appendChild(Card);
      textColunaAtual.textContent = lista[1].id;
      ColunaCard = Card.parentNode;
    break;
    case "Em andamento":
      lista[2].appendChild(Card);
      textColunaAtual.textContent = lista[2].id;
      ColunaCard = Card.parentNode;
    break;
    case "Review":
      lista[3].appendChild(Card);
      textColunaAtual.textContent = lista[3].id;
      ColunaCard = Card.parentNode;
    break;
    case "Concluido":
      lista[0].appendChild(Card);
      textColunaAtual.textContent = lista[0].id;
      ColunaCard = Card.parentNode;
    break;
  }
}

function mudar(elemento) {
  switch(elemento.className)
  {
    case "setorButton Adm Fin":
      corTitulo.style.backgroundColor = "rgb(73, 87, 102)";
      botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Marketing":
      corTitulo.style.backgroundColor = "rgb(246, 165, 45)";
      botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";

    break;
    case "setorButton GEP":
      corTitulo.style.backgroundColor = "rgb(229, 51, 36)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Comercial":
      corTitulo.style.backgroundColor = "rgb(41, 219, 226)";
      botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Projetos":
      corTitulo.style.backgroundColor = "rgb(47, 153, 61)";
      botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Presidência":
      corTitulo.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
    break;
  }
}

function confirmarBox()
{
  document.getElementById("confirmar").style.display = "block";
}

function cancelar()
{
  document.getElementById("confirmar").style.display = "none";
}


function deletar()
{
  cancelar();
  closeContainer();
  Card.remove();
}

function criarBotao(nomeBotao, name)
{
  var local = document.getElementById("setores");
  var espaco = document.createElement("br");
  espaco.className = "setorButton";
  
  nomeBotao.className = "setorButton "+name;
  nomeBotao.setAttribute('onclick', 'mudar(this)');
  local.appendChild(nomeBotao);
  local.appendChild(espaco);
  var buttonText = document.createElement("p");
  buttonText.className = "setortext";
  buttonText.textContent = name;
  nomeBotao.appendChild(buttonText);
}

function containerCard(clickedElement) {

  setTimeout(function() {
    var element = document.querySelector('.is-dragging');

    if (element) {
        // Remova a classe 'is-dragging' do elemento
        element.classList.remove('is-dragging');
    }
  }, 400);

  // Início de função para apagar a imagem fantasma do botão
  var targetNode = document.body; // ou outro elemento alvo
  var config = { childList: true }; // configuração para observar mudanças na lista de filhos

  var callback = function(mutationsList, observer) {
      for(var mutation of mutationsList) {
          if (mutation.type === 'childList') {
              // verifica se um nó filho foi adicionado
              if (mutation.addedNodes.length > 0) {
                  var lastAddedElement = mutation.addedNodes[0];
                  lastAddedElement.remove(); // remove o último elemento adicionado
                  observer.disconnect();
              }
          }
      }
  };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

  document.getElementById("cardEx").style.display = "block";
  var localDestino
  //salvando na variavel card a tarefa atual
  Card = clickedElement;
  //salvando na variavel ColunaCard a coluna atual do card
  ColunaCard = clickedElement.parentNode;
  //criando o titulo no container do card
  var titulo = document.createElement("textarea");
  titulo.className = "tituloCard";
  titulo.id = "tituloCard";
  titulo.textContent = clickedElement.querySelector(".tasktext").innerText;
  localDestino = document.getElementById("cardEx-content");
  localDestino.appendChild(titulo);
  //criando a box de comentario no container do card
  var boxComentario = document.createElement("textarea");
  boxComentario.className = "boxComentario";
  boxComentario.id = "boxComentario";
  localDestino = document.getElementById("descricao");
  localDestino.appendChild(boxComentario);
  var comentario = clickedElement.querySelector(".comentario");
  if(comentario!==null)
  {
    comentario = clickedElement.querySelector(".comentario").innerText;
    boxComentario.textContent = comentario;
  }
  else
  {
    comentario = document.createElement("div");
    comentario.className = "comentario";
    comentario.id = "comentario";
    comentario.style.display = "none";
    clickedElement.appendChild(comentario);
  }
  //criando a box de atividade
  var boxAtiv = document.createElement("textarea");
  boxAtiv.className = "boxAtividade";
  boxAtiv.id = "boxAtiv";
  localDestino = document.getElementById("atividade");
  localDestino.appendChild(boxAtiv);
  var ativ = clickedElement.querySelector(".atividade");
  if(ativ!==null)
  {
    ativ = clickedElement.querySelector(".atividade").innerText;
    boxAtiv.textContent = ativ;
    console.log("pres1");
  }
  else
  {
    ativ = document.createElement("div");
    ativ.className = "atividade";
    ativ.style.display = "none";
    clickedElement.appendChild(ativ);
  }
  //criando a box de responsavel
  var boxResp = document.createElement("textarea");
  boxResp.className = "boxResponsavel";
  boxResp.id = "boxResponsavel";
  localDestino = document.getElementById("responsavel");
  localDestino.appendChild(boxResp);
  var responsavel = clickedElement.querySelector(".responsavel");
  if(responsavel!==null)
  {
    responsavel = clickedElement.querySelector(".responsavel").innerText;
    boxResp.textContent = responsavel;
  }
  else
  {
    responsavel = document.createElement("div");
    responsavel.className = "responsavel";
    responsavel.style.display = "none";
    clickedElement.appendChild(responsavel);
  }

  //criando input de calendario
  var inputCalendario = document.createElement("input");
  inputCalendario.className = "data";
  inputCalendario.id = "InputCalendario";
  inputCalendario.type = "date";
  localDestino = document.getElementById("data");
  localDestino.appendChild(inputCalendario);
  var calendario = clickedElement.querySelector(".calendario");
  if(calendario!==null)
  {
    calendario = clickedElement.querySelector(".calendario").innerText;
    console.log(calendario);
    inputCalendario.value = calendario;
  }
  else
  {
    inputCalendario.value = "aaaa-mm-dd";
    calendario = document.createElement("div");
    calendario.className = "calendario";
    calendario.id = "calendario";
    calendario.style.display = "none";
    clickedElement.appendChild(calendario);
  }

  //criando botão adm fin
  botaoAdm = document.createElement("button");
  criarBotao(botaoAdm, "Adm Fin");
  botaoMkt = document.createElement("button");
  criarBotao(botaoMkt, "Marketing");
  botaoPres = document.createElement("button");
  criarBotao(botaoPres, "Presidência");
  botaoGep = document.createElement("button");
  criarBotao(botaoGep, "GEP");
  botaoPjt = document.createElement("button");
  criarBotao(botaoPjt, "Projetos");
  botaoCom = document.createElement("button");
  criarBotao(botaoCom, "Comercial");
  corTitulo = clickedElement.querySelector(".taskCircle");
  switch(corTitulo.style.backgroundColor)
  {
    case "rgb(139, 95, 164)":
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.value = "ativado";
      break;
    case "rgb(73, 87, 102)":
      botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
      botaoAdm.value = "ativado";
      break;
    case "rgb(246, 165, 45)":
      botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
      botaoMkt.value = "ativado";
      break;
    case "rgb(229, 51, 36)":
      botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
      botaoGep.value = "ativado";
      break;
    case "rgb(47, 153, 61)":
      botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
      botaoPjt.value = "ativado";
      break;
    case "rgb(41, 219, 226)":
      botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
      botaoCom.value = "ativado";
      break;
  }
  botaoColuna();
}

function closeContainer() {
  // Obtém o elemento da caixa de diálogo pelo ID e define o estilo de exibição como "none"
  document.getElementById("cardEx").style.display = "none";
  
  if(document.getElementById("tituloCard").value !== "")
  {
    Card.querySelector(".tasktext").textContent = document.getElementById("tituloCard").value;
    document.getElementById("tituloCard").remove();
  }
  else
  {
    document.getElementById("tituloCard").remove();
  }

  Card.querySelector(".comentario").textContent = document.getElementById("boxComentario").value;
  document.getElementById("boxComentario").remove();

  Card.querySelector(".atividade").textContent = document.getElementById("boxAtiv").value;
  document.getElementById("boxAtiv").remove();

  Card.querySelector(".responsavel").textContent = document.getElementById("boxResponsavel").value;
  document.getElementById("boxResponsavel").remove();

  Card.querySelector(".calendario").textContent = document.getElementById("calendario").value;
  document.getElementById("InputCalendario").remove();

  var lista = document.getElementsByClassName("setorButton");
  for(var i = lista.length - 1; i >= 0; i--)
  {
    lista[i].remove()
  }

  lista = document.getElementsByClassName("moverButton");
  for(var i = lista.length - 1; i >= 0; i--)
  {
    lista[i].remove()
  }

  document.getElementById("movertext").remove();

  if(Card.querySelector(".tasktext").textContent !== "Escreva o nome da tarefa")
  {
    Card.style.display = "initial";
  }
  else
  {
    Card.remove();
  }
}