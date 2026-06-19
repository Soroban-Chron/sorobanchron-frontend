/**
 * Validate contract address format (basic check)
 */
export function isValidContractAddress(address: string): boolean {
  if (!address) return false;
  // Stellar addresses start with 'C' and are 56 characters
  return address.startsWith('C') && address.length === 56;
}

/**
 * Validate interval is within acceptable range
 */
export function isValidInterval(interval: number): boolean {
  return interval >= 60 && interval <= 86400 * 365; // 1 minute to 1 year
}

/**
 * Validate deposit amount
 */
export function isValidDeposit(deposit: string): boolean {
  try {
    const amount = parseFloat(deposit);
    return !isNaN(amount) && amount >= 1 && amount <= 1000000;
  } catch {
    return false;
  }
}

/**
 * Sanitize contract address input
 */
export function sanitizeAddress(input: string): string {
  return input.trim().toUpperCase();
}
