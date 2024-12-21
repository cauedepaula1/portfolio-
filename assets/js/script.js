function menuShow(){
    let menuMobile = document.querySelector('.mobile__menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open')
    }
}
// Seleciona todos os itens com a classe 'nav-item'
var menuItens = document.querySelectorAll(".nav-item");

menuItens.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        item.style.backgroundColor = "#FFD60A"; // Muda a cor de fundo
    });

    
    item.addEventListener("mouseleave", function () {
        item.style.backgroundColor = ""; // Volta ao estilo padrão
    });
});

var res2 = window.document.getElementById("titulojs")
var texto = "Bem vindo(a) ao meu portfólio!"
var interval = 60;

function digito(element, texto, interval){
    var escrita = texto.split("").reverse();
    var typer = setInterval(function(){
        if(!escrita.length){
            return clearInterval(typer)
        }
        var next = escrita.pop();
        element.innerHTML += next;
    },interval);
}
digito(res2,texto,interval);

var res3 = window.document.getElementById("sobre")
var texto1 = "Sobre mim"
var intervalo = 150;

function digito2(elemento, texto1, intervalo){
    var escrito = texto1.split("").reverse();
    var tipo = setInterval(function(){
        if(!escrito.length){
            return clearInterval(tipo)
        }
        var inicio = escrito.pop();
        elemento.innerHTML += inicio;
    }, intervalo);
}
digito2(res3, texto1, interval);