import { CAPITAL_STEPS } from '../constants/businessData';

/**
 * Linearly interpolates between two numbers.
 */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Given a slider value (in 万元), compute nests, cages, and revenue
 * by linearly interpolating between the two nearest CAPITAL_STEPS entries.
 *
 * @param {number} sliderValue - capital amount in 万元, clamped to [5000, 50000]
 * @returns {{ nests: number, cages: number, revenue: number }}
 */
export function calcCapital(sliderValue) {
  const value = Math.max(5000, Math.min(50000, sliderValue));

  // Exact match
  const exact = CAPITAL_STEPS.find((s) => s.capital === value);
  if (exact) {
    return { nests: exact.nests, cages: exact.cages, revenue: exact.revenue };
  }

  // Find surrounding steps
  let lower = CAPITAL_STEPS[0];
  let upper = CAPITAL_STEPS[CAPITAL_STEPS.length - 1];

  for (let i = 0; i < CAPITAL_STEPS.length - 1; i++) {
    if (CAPITAL_STEPS[i].capital <= value && value <= CAPITAL_STEPS[i + 1].capital) {
      lower = CAPITAL_STEPS[i];
      upper = CAPITAL_STEPS[i + 1];
      break;
    }
  }

  const t = (value - lower.capital) / (upper.capital - lower.capital);

  return {
    nests: Math.round(lerp(lower.nests, upper.nests, t)),
    cages: Math.round(lerp(lower.cages, upper.cages, t)),
    revenue: Math.round(lerp(lower.revenue, upper.revenue, t)),
  };
}
