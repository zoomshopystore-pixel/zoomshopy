// amazon.js
import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js'; // fallback
import { setupCurrency } from '../scripts/currencySetup.js';
import { currencySymbols } from '../scripts/currency.js';

/*
  Updated amazon.js
  - loads saved currency preference (localStorage) if present
  - saves new selection to localStorage when user changes currency
  - updates all product prices when currency changes
  - exposes window.currencyRates and window.detectedCurrency
*/

// ---------------------------
// Helpers
// ---------------------------
function centsToNumber(cents) {
  return Number(cents) / 100;
}

function formatPriceForCurrency(amountNumber, currencyCode) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(amountNumber);
  } catch (e) {
    const symbol = currencySymbols[currencyCode] || '$';
    return `${symbol}${amountNumber.toFixed(2)}`;
  }
}

// Convert product priceCents (base USD) -> formatted string in selected currency
function convertAndFormat(priceCents, rates, currencyCode, quantity = 1) {
  const usd = centsToNumber(priceCents); // e.g. 1090 -> 10.90
  const rate = (rates && rates[currencyCode]) ? rates[currencyCode] : 1;
  const converted = usd * rate * quantity; // amount in chosen currency units
  return formatPriceForCurrency(converted, currencyCode);
}

// Render currency dropdown options
function currencyOptionsHtml(selectedCurrency) {
  return Object.keys(currencySymbols)
    .map(code => `<option value="${code}" ${code === selectedCurrency ? 'selected' : ''}>${code}</option>`)
    .join('');
}

// Update all product price displays on the page (used when currency changes)
function updateAllProductPrices(rates, currencyCode) {
  document.querySelectorAll('.product-container').forEach(container => {
    const priceEl = container.querySelector('.js-product-price');
    if (!priceEl) return;
    const basePrice = Number(priceEl.dataset.basePrice);
    const qty = Number(container.querySelector('.js-quantity-selector')?.value) || 1;
    priceEl.textContent = convertAndFormat(basePrice, rates, currencyCode, qty);
    // also update the currency select UI if present
    const select = container.querySelector('.js-currency-select');
    if (select) select.value = currencyCode;
  });
}

// ---------------------------
// Add-to-Cart (login-check)
// ---------------------------
function handleAddToCart(productId, quantity = 1) {
  const currentUser = localStorage.getItem('zoomshopy_current_user');
  if (!currentUser) {
    localStorage.setItem('zoomshopy_pending_product', JSON.stringify({ productId, quantity }));
    window.location.href = 'signin.html';
    return;
  }
  addToCart(productId, quantity);
}

// ---------------------------
// Render products (main entry)
// ---------------------------
(async () => {
  // default fallback
  let rates = { USD: 1 };
  let detectedCurrency = 'USD';

  try {
    const result = await setupCurrency(); // { rates, localCurrency }
    rates = result.rates || rates;
    detectedCurrency = result.localCurrency || detectedCurrency;
  } catch (err) {
    console.warn('Currency setup failed, defaulting to USD', err);
  }

  // If user previously selected a currency, prefer that
  const savedCurrency = localStorage.getItem('zoomshopy_currency');
  if (savedCurrency) {
    detectedCurrency = savedCurrency;
  }

  // Expose for other modules (checkout etc.)
  window.currencyRates = rates;
  window.detectedCurrency = detectedCurrency;

  // build products HTML
  const productGrid = document.querySelector('.js-product-grid');
  if (!productGrid) return console.warn('Missing .js-product-grid element');

  let productsHTML = '';

  products.forEach(product => {
    const displayPrice = convertAndFormat(product.priceCents, rates, detectedCurrency, 1);

    productsHTML += `
      <div class="product-container" data-product-id="${product.id}">
        <div class="product-image-container">
          <img class="product-image" data-id="${product.id}" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-name limit-text-to-2-lines">${product.name}</div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarsUrl()}" alt="rating">
          <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>

        <div class="product-price js-product-price" data-base-price="${product.priceCents}">
          ${displayPrice}
        </div>

        <div class="product-action-row">
          <div class="product-quantity-container">
            <select class="js-quantity-selector" aria-label="Quantity">
              ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
            </select>
          </div>

          <select class="currency-select js-currency-select" aria-label="Currency">
            ${currencyOptionsHtml(detectedCurrency)}
          </select>

          <div class="added-to-cart" style="opacity:0; transition:opacity .2s;">
            <img src="images/icons/checkmark.png" alt="Added"> Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>

        ${product.extraInfoHTML ? product.extraInfoHTML() : ''}
        <div class="product-spacer"></div>
      </div>
    `;
  });

  productGrid.innerHTML = productsHTML;

  // Make sure all selects reflect the saved/detected currency (handles any leftover edge-cases)
  updateAllProductPrices(rates, detectedCurrency);

  // ---------------------------
  // Delegated listeners for dynamic elements
  // ---------------------------

  // Handle quantity & currency dropdown changes
  document.addEventListener('change', (ev) => {
    const t = ev.target;

    // Quantity change: update the single product's price (keep currency)
    if (t.classList && t.classList.contains('js-quantity-selector')) {
      const productContainer = t.closest('.product-container');
      if (!productContainer) return;
      const priceEl = productContainer.querySelector('.js-product-price');
      const basePrice = Number(priceEl.dataset.basePrice);
      const qty = Number(t.value) || 1;
      const currencySelect = productContainer.querySelector('.js-currency-select');
      const currency = currencySelect ? currencySelect.value : window.detectedCurrency;
      priceEl.textContent = convertAndFormat(basePrice, rates, currency, qty);
      return;
    }

    // Currency change: save the chosen currency and update all displayed prices
    if (t.classList && t.classList.contains('js-currency-select')) {
      const newCurrency = t.value;
      // persist selection for cross-page consistency
      localStorage.setItem('zoomshopy_currency', newCurrency);
      window.detectedCurrency = newCurrency;

      // Update all product price elements (so page looks consistent)
      updateAllProductPrices(rates, newCurrency);

      // Optional: update any other UI bits that depend on currency (like a header currency label)
      return;
    }
  });

  // Add-to-cart (delegated)
  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest && ev.target.closest('.js-add-to-cart');
    if (!btn) return;
    const productContainer = btn.closest('.product-container');
    if (!productContainer) return;
    const productId = btn.dataset.productId;
    const qty = Number(productContainer.querySelector('.js-quantity-selector')?.value) || 1;

    handleAddToCart(productId, qty);
    updateCartQuantity();

    // show "Added" briefly
    const addedMessage = productContainer.querySelector('.added-to-cart');
    if (addedMessage) {
      addedMessage.style.opacity = '1';
      setTimeout(() => { addedMessage.style.opacity = '0'; }, 4000);
    }
  });

  // after initial render ensure search/re-renders will use the same window values
})();

// ---------------------------
// Cart helpers (global)
// ---------------------------
function updateCartQuantity() {
  const cartArr = Array.isArray(cart) ? cart : (JSON.parse(localStorage.getItem('cart')) || []);
  const total = cartArr.reduce((sum, it) => sum + (it.quantity || 0), 0);
  document.querySelectorAll('.js-cart-quantity').forEach(el => { el.textContent = total; });
}

// ensure badge updated on load
document.addEventListener('DOMContentLoaded', updateCartQuantity);

// ---------------------------
// Search & renderFilteredProducts (keeps currency behavior)
// ---------------------------
const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const productGrid = document.querySelector('.js-product-grid');

function renderFilteredProducts(list) {
  // use currently known rates/detectedCurrency (these are on window if setupCurrency succeeded)
  const rates = window.currencyRates || { USD: 1 };
  const detectedCurrency = window.detectedCurrency || localStorage.getItem('zoomshopy_currency') || 'USD';

  let html = '';
  if (!list || list.length === 0) {
    html = `
      <div style="text-align:center; padding:40px; color:gray; font-size:18px;">
        ❌ No results found.
        <br><br>
        <button class="button-primary js-show-all" style="padding:10px 25px; background:skyblue; border:none; border-radius:5px; cursor:pointer;">
          Show All Products
        </button>
      </div>
    `;
    productGrid.innerHTML = html;
    return;
  }
  

  list.forEach(product => {
    const displayPrice = convertAndFormat(product.priceCents, rates, detectedCurrency, 1);
    html += `
      <div class="product-container" data-product-id="${product.id}">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-name limit-text-to-2-lines">${product.name}</div>
        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarsUrl()}" alt="rating">
          <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>
        <div class="product-price js-product-price" data-base-price="${product.priceCents}">
          ${displayPrice}
        </div>
        <div class="product-quantity-container">
          <select class="js-quantity-selector" aria-label="Quantity">
            ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
          </select>
        </div>
        <div class="product-action-row">
          <select class="currency-select js-currency-select" aria-label="Currency">
            ${currencyOptionsHtml(detectedCurrency)}
          </select>
          <div class="added-to-cart" style="opacity:0; transition:opacity .2s;"><img src="images/icons/checkmark.png" alt="Added"> Added</div>
          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        </div>
        ${product.extraInfoHTML ? product.extraInfoHTML() : ''}
        <div class="product-spacer"></div>
      </div>
    `;
  });

  productGrid.innerHTML = html;

  const showAllBtn = productGrid.querySelector('.js-show-all');
  if (showAllBtn) showAllBtn.addEventListener('click', () => renderFilteredProducts(products));
}



function handleSearch() {
  const term = (searchInput?.value || '').trim().toLowerCase();
  const matched = term
    ? products.filter(p =>
        [p.name, p.category, p.description].some(f => f && f.toLowerCase().includes(term))
      )
    : products;
  renderFilteredProducts(matched);
  document.querySelector('.main')?.scrollIntoView({ behavior: 'smooth' });
}

if (searchButton) searchButton.addEventListener('click', handleSearch);
if (searchInput) searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); handleSearch(); }
});

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("js-show-all")) {

    // Show all products again
    renderFilteredProducts(products);

    // Clear search input (optional)
    if (searchInput) searchInput.value = "";
  }
});


