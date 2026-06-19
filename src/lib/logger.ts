/**
 * Simple logger utility for development and production
 */

type LogLevel = "debug" | "info" | "warn" | "error";

const isDev = process.env.NODE_ENV === "development";

class Logger {
  private prefix: string;

  constructor(module: string) {
    this.prefix = `[${module}]`;
  }

  debug(message: string, data?: any) {
    if (isDev) {
      console.debug(`${this.prefix} ${message}`, data);
    }
  }

  info(message: string, data?: any) {
    console.info(`${this.prefix} ${message}`, data);
  }

  warn(message: string, data?: any) {
    console.warn(`${this.prefix} ${message}`, data);
  }

  error(message: string, error?: any) {
    console.error(`${this.prefix} ${message}`, error);
  }
}

export function createLogger(module: string): Logger {
  return new Logger(module);
}
