// Markup rate for each plan (0.10 = 10%)
export const markupRates = {
  3: 0.10,
  6: 0.15,
  9: 0.20,
  12: 0.25,
};

// Advance (down payment) as a percent of the cash price for each plan
export const advancePercents = {
  3: 40,
  6: 30,
  9: 25,
  12: 20,
};

export const plans = [3, 6, 9, 12];
export const CASH = 0; // 0 months = cash payment
export const planOptions = [CASH, ...plans];
export const DEFAULT_MONTHS = 12;

export function planLabel(months) {
  return months === CASH ? "Cash" : `${months} Months`;
}

// Ek hi jagah hisab: product page aur cart dono yahi use karte hain
export function calculatePlan(price, months) {
  if (months === CASH) {
    return { advance: price, monthly: 0, totalPrice: price };
  }

  // advance nazdeeki 500 tak round hota hai
  const advance = Math.round((price * advancePercents[months]) / 100 / 500) * 500;
  const balance = price - advance;
  const markupAmount = Math.round(balance * markupRates[months]);
  const remaining = balance + markupAmount;
  return {
    advance,
    monthly: Math.round(remaining / months),
    totalPrice: advance + remaining,
  };
}