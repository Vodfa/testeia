// Array de produtos
const produtos = [
    {
        id: 1,
        nome: 'Camisa Casual',
        preco: 'R$ 79,90',
        descricao: 'Camisa casual perfeita para o dia a dia',
        emoji: '👘'
    },
    {
        id: 2,
        nome: 'Calça Jeans',
        preco: 'R$ 129,90',
        descricao: 'Calça jeans confortável e estĩlosa',
        emoji: '👖'
    },
    {
        id: 3,
        nome: 'T-Shirt Gamer',
        preco: 'R$ 59,90',
        descricao: 'T-shirt com estampas incríveis',
        emoji: '👕'
    },
    {
        id: 4,
        nome: 'Jaqueta Bomber',
        preco: 'R$ 199,90',
        descricao: 'Jaqueta bomber moderna e elegante',
        emoji: '🧥'
    },
    {
        id: 5,
        nome: 'Vestido Fl orado',
        preco: 'R$ 149,90',
        descricao: 'Vestido feminino com estámpa floral',
        emoji: '👗'
    },
    {
        id: 6,
        nome: 'Óculos de Sol',
        preco: 'R$ 89,90',
        descricao: 'Óculos de sol UV protectão total',
        emoji: '😎'
    },
    {
        id: 7,
        nome: 'Sapão Estruturado',
        preco: 'R$ 119,90',
        descricao: 'Sapão estruturado para qualquer ocasião',
        emoji: '🧢'
    },
    {
        id: 8,
        nome: 'Bolsa de Mão',
        preco: 'R$ 159,90',
        descricao: 'Bolsa elegante e espacosa para mulheres',
        emoji: '👜'
    }
];

// Função para renderizar os produtos
function renderizarProdutos() {
    const produtoGrid = document.getElementById('productGrid');
    produtoGrid.innerHTML = '';

    produtos.forEach(produto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${produto.emoji}</div>
            <div class="product-info">
                <div class="product-name">${produto.nome}</div>
                <div class="product-price">${produto.preco}</div>
                <p class="product-description">${produto.descricao}</p>
                <button class="btn" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        produtoGrid.appendChild(productCard);
    });
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        alert(`${produto.nome} foi adicionado ao carrinho!`);
    }
}

// Função para enviar formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    renderizarProdutos();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Fashion Store JavaScript carregado com sucesso!');
