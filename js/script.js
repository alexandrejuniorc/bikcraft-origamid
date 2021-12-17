// ATIVR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;

  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITENS DO ORÇAMENTO
// CHECA OS ITENS DA URL PRA VER SE CHECA O ITEM OU NÃO.
const parametros = new URLSearchParams(location.search); //new cria a classe, esse parametro serve para fazer buscas no link da página.

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTES
// FAZENDO AS PERGUNTAS APARECEREM AO SEREM CLICADAS

const perguntas = document.querySelectorAll(".perguntas button");

//isso é um evento então sempre colocar event entre os parenteses
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa"); // ADICIONA E REMOVE A VARIÁVEL QUE ESTÁ ENTRE ASPAS
  const ativa = resposta.classList.contains("ativa"); // VERIFICA SE A CLASSE TEM ATIVO
  resposta.setAttribute("aria-expanded", ativa); // SELECIONA O ELEMENTO
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta); //função que ativa a pergunta
}

perguntas.forEach(eventosPerguntas);

// GALERIA DE BICICLETAS
// ALTERANDO A POSIÇÃO DA IMAGEM PRA PRINCIPAL

const galeria = document.querySelectorAll(".bicicleta-imagens img"); // CRIA A CONSTANTE GALERIA PUXANDO A DIV .BICICLETA-IMAGENS E VARIÁVEL IMG QUE ESTÁ DENTRO
const galeriaContainer = document.querySelector(".bicicleta-imagens"); // CRIA A CONSTANTE GALERIACONTAINER DA DIV .BICICLETA-IMAGENS

function trocarImagem(event) {
  const img = event.currentTarget; // SEMPRE SELECIONAR O ITEM QUE ESTOU CLICANDO
  const media = matchMedia("(min-width: 1000px)").matches; // MÉTODO QUE IRÁ RECEBER A MEDIA QUERY (RESPONSIVO) E NÃO IRÁ DEIXAR A IMAGEM ALTERAR APÓS O TAMANHO ESTABELECIDO

  if (media) {
    galeriaContainer.prepend(img); // COLOCA O ITEM QUE EU QUISER EM PRIMEIRO LUGAR
  }
}

function eventosGaleria(img) {
  //FUNÇÃO DE CLIQUE
  img.addEventListener("click", trocarImagem); // QUE VAI DIRETO PRA FUNÇÃO trocarImagem
}

galeria.forEach(eventosGaleria); // ADICIONANDO EVENTO DE CLIQUE

//ANIMAÇÃO

if (window.SimpleAnime) {
  new SimpleAnime(); // new inicia uma classe
}
