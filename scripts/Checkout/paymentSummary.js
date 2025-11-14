import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { setupCurrency } from '../currencySetup.js';
import { currencySymbols, detectUserCurrency } from '../currency.js';

// ✅ Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  serverTimestamp,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDiidI7VfMw5fN0SfKDeQwrLK4HAFfhg78",
  authDomain: "zoom-shopy.firebaseapp.com",
  projectId: "zoom-shopy",
  storageBucket: "zoom-shopy.appspot.com",
  messagingSenderId: "521524635595",
  appId: "1:521524635595:web:c93b6caf4d77ec8525b84e",
  measurementId: "G-86JY1J7HSV"
};

// ✅ Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export async function renderPaymentSummary() {
  const { rates, localCurrency } = await setupCurrency(); // 🌍 Get live rates & currency
  const symbol = currencySymbols[localCurrency] || '$';

  let productPriceCents = 0;
  let shippingPriceCents = 0;

  // ✅ Calculate totals
    cart.forEach((cartItem) => {
      const product = getProduct(cartItem.productId);  // ✅ FIXED

      if (!product) return; // ✅ Prevent crashes if product not found

      productPriceCents += product.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;
    });


  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const totalCents = totalBeforeTaxCents;

  // ✅ Convert from USD → local currency
  const usdToLocal = rates[localCurrency] || 1;
  const convert = (usdCents) => (usdCents / 100) * usdToLocal;

  const itemsPrice = convert(productPriceCents);
  const shippingPrice = convert(shippingPriceCents);
  const totalBeforeTax = convert(totalBeforeTaxCents);
  const orderTotal = convert(totalCents);

  // ✅ Render order summary
  const paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div>
    <div class="payment-summary-row">
      <div>Items (${getTotalQuantity()}):</div>
      <div class="payment-summary-money">${formatCurrency(itemsPrice * 100, localCurrency)}</div>
    </div>
    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">${formatCurrency(shippingPrice * 100, localCurrency)}</div>
    </div>
    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">${formatCurrency(totalBeforeTax * 100, localCurrency)}</div>
    </div>
    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">${formatCurrency(orderTotal * 100, localCurrency)}</div>
    </div>
    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

 document.querySelector('.js-place-order').addEventListener('click', async () => {
  if (!cart || cart.length === 0) {
    alert("⚠️ Your cart is empty.");
    return;
  }

  const totalAmount = orderTotal.toFixed(2);
  const user = JSON.parse(localStorage.getItem('zoomshopy_current_user')) || {};

  const pendingOrder = {
    cartItems: cart.map(item => {
      const product = getProduct(item.productId);
      const deliveryOption = getDeliveryOption(item.deliveryOptionId);
      const deliveryDate = dayjs()
        .add(deliveryOption?.deliveryDays || 0, 'days')
        .toDate()
        .toDateString();

      return {
        productId: item.productId,
        name: product?.name || "Unknown Product",
        image: product?.image || "",
        price: convert(product?.priceCents || 0),
        quantity: item.quantity,
        deliveryOption: {
          id: item.deliveryOptionId,
          name: deliveryOption?.name || "Standard Shipping",
          price: convert(deliveryOption?.priceCents || 0),
          deliveryDate
        }
      };
    }),
    totalAmount,
    currency: localCurrency, // user's currency
    user,
    timestamp: serverTimestamp()
  };

  // ✅ Save only locally, not Firestore
  localStorage.setItem('pendingOrder', JSON.stringify(pendingOrder));

  // ✅ Redirect to checkout-info page
  window.location.href = 'checkout-info.html';
});

  };