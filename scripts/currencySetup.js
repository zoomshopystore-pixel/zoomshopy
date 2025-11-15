// scripts/currencySetup.js
import { currencySymbols } from './currency.js';

export async function setupCurrency() {
  try {
    let localCurrency = 'USD';

    // ✅ Use a CORS-safe API for local development
    const locRes = await fetch('https://ipwho.is/');
    const locData = await locRes.json();

    if (locData && locData.currency && locData.currency.code) {
      localCurrency = locData.currency.code;
    }

    // ✅ If user manually selected a currency earlier, keep it
    const saved = localStorage.getItem('zoomshopy_currency');
    if (saved) localCurrency = saved;

    // ✅ Get live rates (USD base)
    const ratesRes = await fetch('https://open.er-api.com/v6/latest/USD');
    const ratesData = await ratesRes.json();
    const rates = ratesData?.rates || { USD: 1 };

    // ✅ Save in localStorage for reuse
    localStorage.setItem('zoomshopy_currency', localCurrency);
    localStorage.setItem('zoomshopy_rates', JSON.stringify(rates));

   
    return { rates, localCurrency };
  } catch (err) {
   
    const fallbackRates = { USD: 1 };
    const savedCurrency = localStorage.getItem('zoomshopy_currency') || 'USD';
    return { rates: fallbackRates, localCurrency: savedCurrency };
  }
}
