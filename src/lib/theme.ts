/**
 * Color constants for consistent theming
 */

export const COLORS = {
  // Primary
  PRIMARY: "bg-indigo-600",
  PRIMARY_HOVER: "hover:bg-indigo-500",

  // Backgrounds
  BG_PRIMARY: "bg-gray-950",
  BG_SECONDARY: "bg-gray-800",
  BG_TERTIARY: "bg-gray-900",

  // Borders
  BORDER_PRIMARY: "border-gray-700",
  BORDER_ERROR: "border-red-500",

  // Text
  TEXT_PRIMARY: "text-white",
  TEXT_SECONDARY: "text-gray-300",
  TEXT_MUTED: "text-gray-500",
  TEXT_MUTED_LIGHT: "text-gray-400",

  // Status
  STATUS_ACTIVE: "text-green-400",
  STATUS_INACTIVE: "text-red-400",
  STATUS_WARNING: "text-yellow-400",

  // Alert backgrounds
  ALERT_ERROR_BG: "bg-red-900/20",
  ALERT_ERROR_BORDER: "border-red-700",
  ALERT_ERROR_TEXT: "text-red-200",

  ALERT_SUCCESS_BG: "bg-green-900/20",
  ALERT_SUCCESS_BORDER: "border-green-700",
  ALERT_SUCCESS_TEXT: "text-green-200",
};

/**
 * Tailwind class combinations
 */
export const COMBINATIONS = {
  BUTTON_PRIMARY: `${COLORS.PRIMARY} ${COLORS.PRIMARY_HOVER} px-4 py-1.5 text-sm font-semibold rounded`,
  BUTTON_DANGER: `bg-red-600 hover:bg-red-500 px-3 py-1.5 text-sm font-semibold rounded text-white`,
  INPUT_ERROR: `border-red-500 ${COLORS.BG_TERTIARY}`,
  CARD_BASE: `rounded-xl ${COLORS.BORDER_PRIMARY} ${COLORS.BG_SECONDARY} p-4`,
  ALERT_ERROR: `${COLORS.ALERT_ERROR_BG} ${COLORS.ALERT_ERROR_BORDER} rounded-lg p-3 text-sm ${COLORS.ALERT_ERROR_TEXT}`,
};
