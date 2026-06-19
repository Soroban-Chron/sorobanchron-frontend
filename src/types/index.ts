/**
 * Automation job configuration and state
 */
export interface Job {
  /** Unique job identifier */
  id: string;
  /** Soroban contract address managing this job */
  contractAddress: string;
  /** Execution interval in seconds */
  interval: number;
  /** XLM amount available for fees as string (decimal) */
  feePool: string;
  /** Unix timestamp of last execution, 0 if never run */
  lastRun: number;
  /** Whether job is currently active */
  active: boolean;
}

/**
 * Parameters for registering a new job
 */
export interface RegisterJobParams {
  /** Soroban contract address to bind to */
  contractAddress: string;
  /** Execution interval in seconds (60 - 31536000) */
  interval: number;
  /** Initial deposit in XLM as string (1 - 1000000) */
  initialDeposit: string;
}

/**
 * Freighter wallet connection state
 */
export interface FreighterState {
  /** Connected wallet address or null if not connected */
  address: string | null;
  /** Whether wallet is connected */
  connected: boolean;
  /** Stellar network passphrase or null if unknown */
  network: string | null;
  /** Last error message if any */
  error?: string | null;
}
