/**
 * Application configuration
 */

export const CONFIG = {
  // API
  API_TIMEOUT_MS: 30000,
  RETRY_MAX_ATTEMPTS: 3,
  RETRY_INITIAL_DELAY_MS: 100,

  // UI
  TOAST_DURATION_MS: 5000,
  DEBOUNCE_DELAY_MS: 300,

  // Validation
  ADDRESS_MIN_LENGTH: 56,
  ADDRESS_MAX_LENGTH: 56,
  MAX_DEPOSIT: 1000000,
  MIN_DEPOSIT: 1,

  // Feature flags
  ENABLE_DEVTOOLS: process.env.NODE_ENV === "development",
  ENABLE_LOGGING: true,
};

/**
 * Get environment variable with type safety
 */
export function getEnv(key: string, fallback: string = ""): string {
  if (typeof process !== "undefined" && process.env) {
    return process.env[key] ?? fallback;
  }
  return fallback;
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return getEnv("NODE_ENV") === "production";
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return getEnv("NODE_ENV") === "development";
}
