const products = [
    { name: 'Red Digital Watch', price: 'R$ 9999.99' },
    { name: 'Black Digital Watch', price: 'R$ 8999.99' },
    { name: 'Gray Digital Watch', price: 'R$ 7999.99' },
    { name: 'Gray Pro Digital Watch', price: 'R$ 12999.99' }
];

var productCarousel = document.getElementById('productCarousel');
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');

// Função para atualizar nome e preço ao trocar de slide
productCarousel.addEventListener('slide.bs.carousel', function (event) {
    var newIndex = event.to; // Índice do próximo slide
    productName.textContent = products[newIndex].name;
    productPrice.textContent = products[newIndex].price;
});