/**
 * Local storage utilities with type safety
 */

/**
 * Safe get from localStorage
 */
export function getFromStorage<T>(key: string, fallback: T): T {
  try {
    if (typeof window === "undefined") return fallback;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Safe set to localStorage
 */
export function setToStorage<T>(key: string, value: T): boolean {
  try {
    if (typeof window === "undefined") return false;
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Remove from localStorage
 */
export function removeFromStorage(key: string): boolean {
  try {
    if (typeof window === "undefined") return false;
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

/**
 * Clear localStorage
 */
export function clearStorage(): boolean {
  try {
    if (typeof window === "undefined") return false;
    localStorage.clear();
    return true;
  } catch {
    return false;
  }
}
