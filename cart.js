const addToCartButtons = document.querySelectorAll('.add-to-cart');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        addItemToCart(item);
        showModal(item);
    });
});

let cartItems = [];

function addItemToCart(item) {
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function showModal(item) {
    modal.style.display = 'block';
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <h2>Item Added to Cart</h2>
        <p>${item} has been added to your cart.</p>
        <button onclick="closeModal()">Close</button>
    `;
    modal.appendChild(modalContent);
}

function closeModal() {
    modal.style.display = 'none';
    modal.innerHTML = '';
}

if (window.location.href.includes('cart.html')) {
    const cartList = document.querySelector('.cart-items');
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartList.appendChild(listItem);
    });
}