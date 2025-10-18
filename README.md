👟 Sneakers E-commerce Product Page

Visão Geral do Projeto

Este projeto é uma implementação front-end de uma página de produto para uma loja de comércio eletrônico (e-commerce).
 O objetivo principal foi replicar fielmente um design detalhado, garantindo uma experiência de usuário rica e totalmente interativa, incluindo a manipulação de galeria de imagens, controle de quantidade e funcionalidade de carrinho de compras.O projeto foi desenvolvido com foco em acessibilidade e responsividade, utilizando Vanilla JavaScript para toda a lógica de interação.

 ✨ Funcionalidades

  O projeto oferece as seguintes interações e recursos:
  🖼️ Galeria de Produtos e LightboxTroca de Imagem: Alterne a imagem principal do produto clicando nas miniaturas (thumbnails).
  Feedback Visual: A miniatura ativa é destacada com uma borda laranja e opacidade reduzida (sincronizada via classe .active).
  Lightbox (Galeria em Tela Cheia): A imagem principal é clicável, abrindo uma galeria em modal de tela cheia.
  Navegação Circular: Dentro do Lightbox, é possível navegar entre as quatro imagens do produto usando botões de navegação lateral (próximo e anterior).
  Sincronização de Estado: O estado de visualização do Lightbox (qual imagem está sendo exibida) é sincronizado com o estado da galeria principal.

  🛒 Carrinho de Compras

  Modal do Carrinho: Um modal pop-up é exibido/ocultado ao clicar no ícone do carrinho no cabeçalho.
  Adição de Item: O botão "Add to cart" adiciona o produto ao carrinho, calculando o preço total com base na quantidade selecionada.
  Contador Visual: O número de itens no carrinho é exibido em um badge laranja no ícone do carrinho.
  Remoção de Item: O usuário pode remover o produto do carrinho usando o ícone de lixeira, o que limpa o modal e zera o contador.

  ➕ Controle de Quantidade

  Botões de Incremento/Decremento: Botões dedicados (+ e -) permitem ajustar a quantidade do produto antes de adicionar ao carrinho.
  Validação: O valor da quantidade é rigorosamente mantido em 1 ou superior, impedindo a inserção de números negativos ou inválidos, tanto por clique quanto por entrada direta no campo de texto.

  🎨 Design e Estilização

  Fidelidade ao Design: O layout e a tipografia foram replicados com atenção aos detalhes do design de referência.
  Estados Interativos: Todos os elementos interativos (links de menu, botões, ícones e miniaturas) possuem estados de hover e focus bem definidos para melhorar a acessibilidade e a experiência do usuário. 

  💻 Tecnologias Utilizadas 
  
  Tecnologia e Finalidade 

  HTML5: Estrutura semântica e esqueleto do projeto, incluindo os elementos de modal (lightbox-modal e cart-modal).
  CSS3: Estilização completa, uso de variáveis CSS (custom properties) para cores e o layout principal de desktop de duas colunas.
  JavaScript: Lógica de interação do projeto: controle de estado da galeria, funcionalidade de toggle dos modais, cálculo do carrinho e: validação de quantidade.
  Google Fonts Uso da fonte Kumbh Sans para replicar a tipografia do design.
