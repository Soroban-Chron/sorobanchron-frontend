// UI Constants
export const UI = {
  BUTTON_CLASS: "rounded bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 text-sm font-semibold",
  BUTTON_CLASS_FULL: "w-full rounded bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 py-2 text-sm font-semibold text-white",
  INPUT_CLASS: "mt-1 w-full rounded bg-gray-900 border border-gray-600 px-3 py-1.5 text-sm text-white",
  CARD_CLASS: "rounded-xl border border-gray-700 bg-gray-800 p-4",
  LABEL_CLASS: "block text-sm text-gray-300",
};

// Validation Constants
export const VALIDATION = {
  MIN_INTERVAL: 60,
  MIN_DEPOSIT: 1,
  DEPOSIT_STEP: 0.01,
  ADDRESS_TRUNCATE_START: 6,
  ADDRESS_TRUNCATE_END: 4,
};

// Job Defaults
export const JOB_DEFAULTS = {
  INITIAL_INTERVAL: 3600,
  INITIAL_DEPOSIT: "10",
};

// Error Messages
export const ERRORS = {
  FREIGHTER_NOT_INSTALLED: "Freighter wallet is not installed",
  NOT_CONNECTED: "Wallet not connected",
  INVALID_CONTRACT_ADDRESS: "Invalid contract address",
  TRANSACTION_FAILED: "Transaction submission failed",
};
