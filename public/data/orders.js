export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(newOrder) {
  orders.unshift(newOrder); // ✅ Add to the beginning of the array
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}
