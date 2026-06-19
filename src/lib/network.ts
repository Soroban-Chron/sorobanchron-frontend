/**
 * Network utilities for Soroban
 */

export const NETWORK_NAMES: Record<string, string> = {
  "https://horizon-testnet.stellar.org": "Testnet",
  "https://horizon.stellar.org": "Public",
  "https://soroban-testnet.stellar.org": "Soroban Testnet",
};

/**
 * Get human-readable network name
 */
export function getNetworkName(passphrase: string | null): string {
  if (!passphrase) return "Unknown";
  return NETWORK_NAMES[passphrase] || passphrase;
}

/**
 * Check if network is testnet
 */
export function isTestnet(passphrase: string | null): boolean {
  return passphrase?.includes("Test") ?? false;
}
