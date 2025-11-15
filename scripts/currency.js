// ---------------------------
// 🌍 Global Currency Conversion Utility (zoomshopy)
// ---------------------------

// ✅ Currency symbols
export const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  NGN: '₦',
  CAD: 'CA$',
  AUD: 'A$',
  NZD: 'NZ$',
  JPY: '¥',
  CNY: '¥',
  INR: '₹',
  ZAR: 'R',
  BRL: 'R$',
  MXN: 'MX$',
  CHF: 'CHF',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  AED: 'د.إ',
  SAR: '﷼',
  KES: 'KSh',
  EGP: 'E£',
  GHS: '₵',
  PKR: '₨',
  SGD: 'S$',
  HKD: 'HK$',
  KRW: '₩',
  TRY: '₺',
  TWD: 'NT$',
  THB: '฿',
  IDR: 'Rp',
  MYR: 'RM',
  PHP: '₱',
  COP: 'COL$',
  ARS: 'AR$',
  CLP: 'CL$',
  VND: '₫',
  PLN: 'zł',
  CZK: 'Kč',
  HUF: 'Ft',
  RON: 'lei',
  BDT: '৳',
  LKR: 'Rs',
  IQD: 'د.ع',
  MAD: 'DH',
  UGX: 'USh',
  TZS: 'TSh'
};

// ✅ Country → Currency mapping
export const countryToCurrency = {
  US: 'USD', CA: 'CAD', MX: 'MXN',
  GB: 'GBP', IE: 'EUR', FR: 'EUR', DE: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR',
  BE: 'EUR', PT: 'EUR', GR: 'EUR', FI: 'EUR', SE: 'SEK', NO: 'NOK', DK: 'DKK',
  CH: 'CHF', PL: 'PLN', CZ: 'CZK', HU: 'HUF', RO: 'RON',
  RU: 'RUB', UA: 'UAH', TR: 'TRY',
  SA: 'SAR', AE: 'AED', KW: 'KWD', QA: 'QAR', BH: 'BHD', OM: 'OMR',
  IN: 'INR', PK: 'PKR', BD: 'BDT', LK: 'LKR', NP: 'NPR',
  CN: 'CNY', JP: 'JPY', KR: 'KRW', HK: 'HKD', SG: 'SGD', MY: 'MYR', ID: 'IDR', TH: 'THB', PH: 'PHP', VN: 'VND', TW: 'TWD',
  AU: 'AUD', NZ: 'NZD',
  NG: 'NGN', GH: 'GHS', ZA: 'ZAR', KE: 'KES', TZ: 'TZS', UG: 'UGX', EG: 'EGP', MA: 'MAD',
  BR: 'BRL', AR: 'ARS', CL: 'CLP', CO: 'COP', PE: 'PEN', VE: 'VES',
  IL: 'ILS'
};

// ✅ Fetch & cache exchange rates using your live API
export async function getCurrencyRates(base = 'USD') {
  const cacheKey = 'zoomshopy_currency_rates';
  const cacheTTL = 1000 * 60 * 30; // 30 min cache
  const now = Date.now();

  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
    if (cached && cached.rates && now - cached.timestamp < cacheTTL) {
      return cached.rates;
    }

    const res = await fetch(`https://v6.exchangerate-api.com/v6/4b21f8213baf4ca90deb6dca/latest/${base}`);
    const data = await res.json();

    if (!data || !data.conversion_rates) throw new Error('Invalid API response');
    const rates = data.conversion_rates;

    // ✅ Ensure USD is exactly 1.0
    rates.USD = 1;

    // Save to cache
    localStorage.setItem(cacheKey, JSON.stringify({ rates, timestamp: now }));
    return rates;
  } catch (err) {
    console.warn('⚠️ Currency API failed. Using fallback rates.', err);
    // Fallback approximate values
    return {
      USD: 1, EUR: 0.93, GBP: 0.79, NGN: 1750, CAD: 1.37, AUD: 1.56, JPY: 150,
      CNY: 7.2, INR: 84, BRL: 5.6, ZAR: 18.9, KES: 130, AED: 3.67
    };
  }
}

// ✅ Detect user location → currency
export async function detectUserCurrency() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const country = data.country_code?.toUpperCase() || 'US';
    const currency = countryToCurrency[country] || 'USD';
    return currency;
  } catch {
    return 'USD';
  }
}

// ✅ Convert priceCents (USD base) → converted amount & symbol
export function convertPrice(priceCents, rates, selectedCurrency = 'USD') {
  const rate = rates?.[selectedCurrency] || 1;
  const usdAmount = priceCents / 100;
  const converted = usdAmount * rate;
  const symbol = currencySymbols[selectedCurrency] || '$';
  return {
    symbol,
    converted: converted.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };
}
