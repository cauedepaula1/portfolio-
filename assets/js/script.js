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
var texto = "Bem vinda(o) ao meu portfólio!"
var interval = 90;

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
