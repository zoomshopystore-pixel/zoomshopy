// scripts/utils/money.js
export function formatCurrency(priceCents, currencyCode = 'USD', locale = navigator.language) {
  const amount = Math.round(priceCents) / 100;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export default formatCurrency;

// ✅ Added safely — no conflict, no rewrite
export function convertCurrency(priceCents, currencyCode = 'USD') {
  return formatCurrency(priceCents, currencyCode);
}
