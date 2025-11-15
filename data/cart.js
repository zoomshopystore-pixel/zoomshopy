export let cart;

      loadFromStorage();

      export function loadFromStorage() {
        cart = JSON.parse(localStorage.getItem('cart'));

        // Start with an empty cart if nothing saved yet
        if (!cart) {
          cart = [];
        }
      }

      function saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      // ✅ Supports quantity parameter from dropdown
      export function addToCart(productId, quantity = 1) {
        let matchingItem;

        cart.forEach((cartItem) => {
          if (String(productId) === String(cartItem.productId)) {

            matchingItem = cartItem;
          }
        });

        if (matchingItem) {
          matchingItem.quantity += quantity;
        } else {
          cart.push({
           productId: String(productId),
            quantity: quantity,
            deliveryOptionId: '1'
          });
        }

        saveToStorage();

         updateCartBadge();

        
      }

      export function removeFromCart(productId) {
        const newCart = [];

        cart.forEach((cartItem) => {
          if (cartItem.productId !== productId) {
            newCart.push(cartItem);
          }
        });

        cart = newCart;
        saveToStorage();
      }

            export function updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem = cart.find(item => item.productId === productId); // ✅ CORRECT

        if (!matchingItem) return;

        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();
      }



      // ✅ Still useful for manual edits on checkout page
      export function updateQuantity(productId, newQuantity) {
        let matchingItem;

        cart.forEach((cartItem) => {
          if (cartItem.productId === productId) {
            matchingItem = cartItem;
          }
        });

        if (matchingItem) {
          matchingItem.quantity = newQuantity;
          saveToStorage();
        }
}

export function clearCart() {
  localStorage.removeItem('cart');
  cart = [];
}

export function updateCartBadge() {
  const cartQuantityElements = document.querySelectorAll('.js-cart-quantity');

  let totalQuantity = 0;
  cart.forEach(item => {
    totalQuantity += item.quantity;
  });

  cartQuantityElements.forEach(el => {
    el.textContent = totalQuantity;
  });
}


