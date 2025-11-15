import {renderOrderSummary} from './Checkout/orderSummary.js';
import {renderPaymentSummary} from './Checkout/paymentSummary.js';
// import '../data/cart-class.js';
import { loadFromStorage } from '../data/cart.js';  // ✅ Add this line
loadFromStorage();
renderOrderSummary();
renderPaymentSummary();