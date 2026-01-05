# Fashion Store - Loja de Roupas Online

Um projeto de e-commerce moderno de roupas desenvolvido com HTML, CSS e JavaScript puro, hospedado no GitHub Pages.

## Descrição

Fashion Store é um site de vendas de roupas que apresenta:

- **Página inicial atrativa** com banner principal e chamada para ação
- **Catálogo de produtos** com grid responsivo
- **Produtos variados** incluindo camisas, calças, vestidos, jaquetas e acessórios
- **Seção sobre a loja** com história e valores
- **Formulário de contato** funcional
- **Navegação suave** entre seções
- **Design responsivo** que funciona em todos os dispositivos

## Recursos

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com gradientes, animações e layout flex/grid
- **JavaScript**: Funcionalidades interativas sem dependências externas

### Funcionalidades
- Página inicial com banner animado
- Grid de produtos com 8 itens
- Botões "Adicionar ao Carrinho" funcionais
- Formulário de contato com validação
- Navegação com scroll suave
- Design totalmente responsivo para mobile, tablet e desktop

## Arquivos do Projeto

```
testeia/
├── index.html       # Página principal
├── style.css        # Estilos CSS
├── script.js        # Lógica JavaScript
├── docs.md         # Documentação
└── README.md       # Arquivo principal do repositório
```

## Como Usar

### Opção 1: GitHub Pages
1. O site está hospedado automaticamente no GitHub Pages
2. Acesse: `https://Vodfa.github.io/testeia/`

### Opção 2: Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/Vodfa/testeia.git
   ```
2. Abra o arquivo `index.html` em seu navegador

## Estrutura HTML

O HTML está organizado em seções:
- **Navegação**: Menu sticky no topo
- **Hero Section**: Banner principal com CTA
- **Produtos**: Grid dinâmico de produtos
- **Sobre**: Informações sobre a loja
- **Contato**: Formulário para mensagens
- **Rodapé**: Informações de copyright

## Estilo CSS

### Cores Principais
- Primeira: #667eea (Roxo)
- Secundaria: #764ba2 (Roxo escuro)
- Destaque: #3498db (Azul)
- Neutro: #2c3e50 (Cinza escuro)

### Animações
- Fade In Down: Tídulo hero
- Fade In Up: Subtítulo hero
- Hover Effects: Cards de produtos
- Smooth Scroll: Navegação

## JavaScript

### Variáveis Globais
- `produtos[]`: Array com dados dos produtos

### Funções Principais
- `renderizarProdutos()`: Cria HTML dos produtos dinamicamente
- `adicionarAoCarrinho()`: Simula adição ao carrinho
- Event listeners para formulário e navegação

## Produtos Disponíveis

1. **Camisa Casual** - R$ 79,90
2. **Calça Jeans** - R$ 129,90
3. **T-Shirt Gamer** - R$ 59,90
4. **Jaqueta Bomber** - R$ 199,90
5. **Vestido Floral** - R$ 149,90
6. **Óculos de Sol** - R$ 89,90
7. **Sapão Estruturado** - R$ 119,90
8. **Bolsa de Mão** - R$ 159,90

## Responsividade

O site é totalmente responsivo com breakpoints para:
- Mobile: até 768px
- Tablet: 768px a 1024px
- Desktop: acima de 1024px

## Customização

Para personalizar o site:

1. **Produtos**: Edite o array `produtos` em `script.js`
2. **Cores**: Modifique as variáveis em `style.css`
3. **Conteúdo**: Atualize o texto em `index.html`

## Compatibilidade

- Chrome (versão recente)
- Firefox (versão recente)
- Safari (versão recente)
- Edge (versão recente)
- Opera (versão recente)

## Licença

Este projeto é de código aberto e disponível para uso pessoal e comercial.

## Autor

Vodfa - 2026

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer fork, clonar e enviar pull requests.
