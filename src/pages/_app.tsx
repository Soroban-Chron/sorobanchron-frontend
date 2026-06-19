import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@/styles/globals.css";
import { createLogger } from "@/lib/logger";

const logger = createLogger("App");

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    logger.info("App initialized");

    // Set up global error handler
    const handleError = (event: ErrorEvent) => {
      logger.error("Global error", event.error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  return <Component {...pageProps} />;
}
