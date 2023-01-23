/*
Objetivo 1 - Quando o usuário clicar no botão 'veja o trailer', devemos abrir a modal com o video do trailer.
    1.1 dar um jeito de pegar o elemento que representa o botão na tela usando o javascript;
    1.2 identificar quando o usuário clicou no botão;
    1.3 dar um jeito de pegar o elemento da modal no js;
    1.4 abrir a modal na tela;

Objetivo 2 - Quando o usuário clicar no 'X', devemos fechar a modal.
    2.1 dar um jeito de pegar o elemento de fechar a modal usando js;
    2.2 dar um jeito de identificar quando o usuário clicar no x;
    2.3 fechar a modal;
*/

console.log('Mostrar o document', document);

// 1.1
const botaoTrailer = document.querySelector(".botao");
//1.3
const modal = document.querySelector(".modal");
//2.1
const fecharModal = document.querySelector(".fechar-modal");
//2.3
const video = document.getElementById("video");
//2.3.2
const linkDoVideo = video.src;

//1.2
botaoTrailer.addEventListener("click", ()=>{
    modal.classList.add("aberto");
    //2.3.2
    video.setAttribute("src", linkDoVideo);
});

//1.4 - VAI FICAR DENTRO DO 1.2!

//2.2
fecharModal.addEventListener("click", ()=>{
    modal.classList.remove("aberto");
//2.3.1
    video.setAttribute("src", "");
});

// Deixando o código mais limpo, ficaria:

/*
const botaoTrailer = document.querySelector(".botao");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", ()=>{
   alternarModal();
    video.setAttribute("src", "");
});
*/




