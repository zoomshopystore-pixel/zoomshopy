// ✅ Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔹 Your Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyDiidI7VfMw5fN0SfKDeQwrLK4HAFfhg78",
  authDomain: "zoom-shopy.firebaseapp.com",
  projectId: "zoom-shopy",
  storageBucket: "zoom-shopy.firebasestorage.app",
  messagingSenderId: "521524635595",
  appId: "1:521524635595:web:c93b6caf4d77ec8525b84e",
  measurementId: "G-86JY1J7HSV"
};

// ✅ Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Import getProduct so we can fetch real product info
import { getProduct } from "../data/products.js";

// ✅ Get raw cart data from localStorage
const rawCart = JSON.parse(localStorage.getItem('cart')) || [];

// ✅ Enrich cart with full product details (name, price, image, etc.)
const cart = rawCart.map(item => {
  const product = getProduct(item.productId);
  return {
    productId: item.productId,
    name: product?.name || "Unknown Product",
    image: product?.image || "",
    price: (product?.priceCents || 0) / 100,
    quantity: item.quantity || 1,
    deliveryOptionId: item.deliveryOptionId || "1"
  };
});

// 🧾 Log the final cart for debugging

// ✅ Build order summary for display
const summaryDiv = document.getElementById('order-summary');
let total = 0;
let summaryHTML = '<ul>';

cart.forEach(item => {
  const price = item.price || (item.priceCents ? item.priceCents / 100 : 0);
  total += price * (item.quantity || 1);
  summaryHTML += `
    <li>${item.name || 'Unknown Product'} — ${item.quantity || 1} × $${price.toFixed(2)}</li>
  `;
});

summaryHTML += `</ul><strong>Total: $${total.toFixed(2)}</strong>`;
summaryDiv.innerHTML = summaryHTML;

// ✅ Handle "Submit Order" button click
document.getElementById('submitOrder').addEventListener('click', async () => {
  const submitBtn = document.getElementById('submitOrder');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting Order...';

  // ✅ Collect user input
  const userData = {
    orderId: 'ORD-' + Math.random().toString(36).substr(2, 16).toUpperCase(),
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    whatsapp: document.getElementById('whatsapp').value.trim(),
    email: document.getElementById('email').value.trim(),
    country: document.getElementById('country').value.trim(),
    state: document.getElementById('state').value.trim(),
    zipcode: document.getElementById('zipcode').value.trim(),
    address: document.getElementById('address').value.trim(),
    cartItems: cart,
    totalAmount: total.toFixed(2),
    timestamp: serverTimestamp()
  };

  // ✅ Validate required fields
  const required = ['name', 'phone', 'email', 'country', 'state', 'zipcode', 'address'];
  const missing = required.filter(key => !userData[key]);

  if (missing.length > 0) {
    alert("⚠️ Please fill out all required fields before submitting.");
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Order';
    return;
  }

  try {
    // ✅ Save order to Firestore
    await addDoc(collection(db, "orders"), userData);

    // ✅ Clear cart after order is saved
    localStorage.removeItem('cart');

    // ✅ Redirect to order success page
    window.location.href = 'order-success.html';

  } catch (error) {
    console.error('❌ Firebase Error:', error);
    alert('⚠️ Error submitting your order. Please try again.');

    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Order';
  }
});
