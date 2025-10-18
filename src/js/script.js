/* =========================================================
   🧩 PROJETO E-COMMERCE — FUNCIONALIDADES JAVASCRIPT
   ---------------------------------------------------------
   Este script implementa:
   1. Galeria de imagens do produto
   2. Lightbox (visualização ampliada)
   3. Carrinho de compras interativo
   ========================================================= */

/* =========================================================
   🖼️ 1. GALERIA DE IMAGENS
   ---------------------------------------------------------
   Objetivo: trocar a imagem principal conforme o clique nas miniaturas
   ========================================================= */

const mainImage = document.getElementById("current-product-image");
const thumbButtons = document.querySelectorAll(".thumb-button");
let currentImageIndex = 1;

/*
 * Atualiza a imagem principal e o estado das miniaturas.
 * @param {number} newIndex - Índice da nova imagem (1–4)
 * @param {HTMLElement} targetImage - Elemento da imagem principal a ser alterada
 * @param {NodeList} thumbContainer - Lista de miniaturas para atualizar o estado "active"
 */
function updateGallery(newIndex, targetImage, thumbContainer) {
    currentImageIndex = newIndex;
    targetImage.src = `./src/images/image-product-${newIndex}.jpg`;

    if (thumbContainer) {
        thumbContainer.forEach(btn => btn.classList.remove("active"));
        thumbContainer[newIndex - 1].classList.add("active");
    }
}

// Evento: troca da imagem principal ao clicar em uma miniatura
thumbButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateGallery(index + 1, mainImage, thumbButtons);
    });
});


/* =========================================================
   💡 2. LIGHTBOX (VISUALIZAÇÃO AMPLIADA)
   ---------------------------------------------------------
   Objetivo: abrir o modal com a imagem ampliada e navegar
   entre as imagens dentro do lightbox.
   ========================================================= */

const lightboxModal = document.querySelector(".lightbox-modal");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightboxMainImage = document.querySelector(".lightbox-main-image img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Abre o lightbox ao clicar na imagem principal
mainImage.addEventListener("click", () => {
    lightboxModal.classList.remove("hidden");
    updateGallery(currentImageIndex, lightboxMainImage, null);
});

// Fecha o lightbox
closeLightboxBtn.addEventListener("click", () => {
    lightboxModal.classList.add("hidden");
});

// Navegação: imagem anterior
prevBtn.addEventListener("click", () => {
    const prevIndex = currentImageIndex > 1 ? currentImageIndex - 1 : 4;
    updateGallery(prevIndex, lightboxMainImage, thumbButtons);
});

// Navegação: próxima imagem
nextBtn.addEventListener("click", () => {
    const nextIndex = currentImageIndex < 4 ? currentImageIndex + 1 : 1;
    updateGallery(nextIndex, lightboxMainImage, thumbButtons);
});


/* =========================================================
   🛒 3. CARRINHO DE COMPRAS
   ---------------------------------------------------------
   Objetivo: adicionar, remover e visualizar produtos no carrinho.
   ========================================================= */

const cartButton = document.querySelector(".cart-button");
const cartCount = document.querySelector(".cart-count");
const cartModal = document.querySelector(".cart-modal");
const cartContent = document.querySelector(".cart-content");
const quantityInput = document.getElementById("quantity");
const addToCartButton = document.getElementById("addToCart");

const EMPTY_CART_HTML = `<p class="empty-message">Your cart is empty.</p>`;

// Alternar visibilidade do modal do carrinho
cartButton.addEventListener("click", () => {
    cartModal.classList.toggle("hidden");
});

// Função: remover item do carrinho
function activateDeleteCartItem() {
    const deleteBtn = document.querySelector(".delete-btn");
    if (!deleteBtn) return;

    deleteBtn.addEventListener("click", () => {
        cartContent.innerHTML = EMPTY_CART_HTML;
        cartCount.classList.add("hidden");
    });
}

// Função: adicionar item ao carrinho
addToCartButton.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);

    if (quantity <= 0 || isNaN(quantity)) {
        cartContent.innerHTML = EMPTY_CART_HTML;
        cartCount.classList.add("hidden");
        return;
    }

    const totalPrice = (125.00 * quantity).toFixed(2);

    cartCount.textContent = quantity;
    cartCount.classList.remove("hidden");

    cartContent.innerHTML = `
        <div class="cart-item">
            <img src="./src/images/image-product-1-thumbnail.jpg" 
                 alt="Thumbnail do produto no carrinho">

            <div class="item-details">
                <p class="item-name">Fall Limited Edition Sneakers</p>
                <p class="item-price">
                    $125.00 x ${quantity} = 
                    <strong class="total-price">$${totalPrice}</strong>
                </p>
            </div>

            <button class="delete-btn" aria-label="Remover item do carrinho">
                <img src="./src/images/icon-delete.svg" alt="">
            </button>
        </div>

        <button class="checkout-btn">Checkout</button>
    `;

    activateDeleteCartItem();
});


/* =========================================================
   ➕➖ 4. CONTROLE DE QUANTIDADE
   ---------------------------------------------------------
   Objetivo: aumentar, diminuir e validar a quantidade de itens.
   ========================================================= */

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Aumentar quantidade
increaseBtn.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Diminuir quantidade (mínimo = 1)
decreaseBtn.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

// Garantir valor mínimo 1
quantityInput.addEventListener("input", () => {
    const currentValue = parseInt(quantityInput.value);
    if (isNaN(currentValue) || currentValue < 1) {
        quantityInput.value = 1;
    }
});

/* =========================================================
   ✅ FIM DO SCRIPT
   ---------------------------------------------------------
   Código estruturado para fácil compreensão e manutenção.
   ========================================================= */




