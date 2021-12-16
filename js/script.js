
// ATIVR LINKS DO MENU
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){

    const url = location.href;
    
    const href = link.href;

    if(url.includes(href)){
        link.classList.add('ativo');
    }

}

links.forEach(ativarLink);

// ATIVAR ITENS DO ORÇAMENTO
// CHECA OS ITENS DA URL PRA VER SE CHECA O ITEM OU NÃO.
const parametros = new URLSearchParams (location.search); //new cria a classe, esse parametro serve para fazer buscas no link da página.

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    
    if(elemento){
        elemento.checked= true;
    }
   
}
parametros.forEach(ativarProduto);