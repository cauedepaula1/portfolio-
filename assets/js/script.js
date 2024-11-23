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

