import { cart, removeFromCart, updateDeliveryOption, updateQuantity } from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';
import dayjs from 'https://www.unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { setupCurrency } from '../currencySetup.js';
import { currencySymbols } from '../currency.js';


// ---------------------------
// 🧾 Render Order Summary (with currency support)
// ---------------------------
export async function renderOrderSummary() {
  const { rates, localCurrency } = await setupCurrency();
  const symbol = currencySymbols[localCurrency] || '$';

  let cartSummaryHTML = '';

  // ✅ Empty cart message
  if (cart.length === 0) {
    document.querySelector('.js-order-summary').innerHTML = `
      <div style="text-align: center; padding: 60px;">
        <p style="font-size: 18px; font-weight: 500;">Your cart is empty.</p>
        <button id="viewProductsBtn"
          style="background-color: #00bfff; color: white; border: none;
                 padding: 12px 22px; border-radius: 8px; cursor: pointer;
                 font-size: 16px; font-weight: 600; margin-top: 15px;
                 transition: background-color 0.3s ease;">
          View Products
        </button>
      </div>
    `;

    document.getElementById('viewProductsBtn').addEventListener('click', () => {
      window.location.href = 'zoomshopy.html';
    });
    return;
  }

 // ✅ Render cart items
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  const matchingProduct = getProduct(productId);

  // ✅ Prevent crash if bad item is in cart
  if (!matchingProduct) return;

  const deliveryOptionId = cartItem.deliveryOptionId;
  const deliveryOption = getDeliveryOption(deliveryOptionId);


    // 🕒 Delivery date
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    localStorage.setItem('zoomshopy_delivery_date', dateString);

    // 💰 Price conversion
    const rate = rates[localCurrency] || 1;
    const convertedProductPrice = ((matchingProduct.priceCents / 100) * rate).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});


    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">${symbol}${convertedProductPrice}</div>
            <div class="product-quantity">
              <span>Quantity: <span class="quantity-label">${cartItem.quantity}</span></span>
              <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">Update</span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>
            ${deliveryOptionsHTML(matchingProduct, cartItem, rates, localCurrency, symbol)}
          </div>
        </div>
      </div>
    `;
  });

  // ✅ Insert cart summary
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

  // ✅ Delete buttons
  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });

  document.querySelectorAll('.js-delivery-option').forEach((radio) => {
  radio.addEventListener('change', () => {
    const productId = radio.dataset.productId;
    const deliveryOptionId = radio.dataset.deliveryOptionId;

    updateDeliveryOption(productId, deliveryOptionId);
    renderOrderSummary();
    renderPaymentSummary();
  });
});


  // ✅ Quantity Update Buttons
  document.querySelectorAll('.js-update-link').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      const quantityLabel = container.querySelector('.quantity-label');
      const currentQuantity = quantityLabel.textContent.trim();

      container.querySelector('.product-quantity').innerHTML = `
        <span>Quantity:
          <input type="number" min="1" value="${currentQuantity}" class="quantity-input" style="width:50px;">
        </span>
        <span class="save-quantity-link link-primary js-save-link" data-product-id="${productId}">Save</span>
        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${productId}">Delete</span>
      `;

      container.querySelector('.js-delete-link').addEventListener('click', () => {
        removeFromCart(productId);
        renderOrderSummary();
        renderPaymentSummary();
      });

      container.querySelector('.js-save-link').addEventListener('click', () => {
        const newQuantity = parseInt(container.querySelector('.quantity-input').value);
        if (isNaN(newQuantity) || newQuantity < 1) return;
        updateQuantity(productId, newQuantity);
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
  });
}

// ---------------------------
// 🚚 Helper for Delivery Options
// ---------------------------
function deliveryOptionsHTML(matchingProduct, cartItem, rates, localCurrency, symbol) {
  let html = '';
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    const rate = rates[localCurrency] || 1;
    const deliveryPrice =
      deliveryOption.priceCents === 0
        ? 'FREE'
        : `${symbol}${((deliveryOption.priceCents / 100) * rate).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} -`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html += `
      <label class="delivery-option">
        <input 
          type="radio" 
          class="js-delivery-option"
          name="delivery-option-${matchingProduct.id}"
          value="${deliveryOption.id}"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}"
          ${isChecked ? 'checked' : ''}
        >
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${deliveryPrice} Shipping</div>
        </div>
      </label>
    `;
  });
  return html;
}
