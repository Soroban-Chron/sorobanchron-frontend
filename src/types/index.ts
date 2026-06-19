export interface Job {
  id: string;
  contractAddress: string;
  interval: number; // seconds
  feePool: string;  // XLM amount as string
  lastRun: number;  // unix timestamp
  active: boolean;
}

export interface RegisterJobParams {
  contractAddress: string;
  interval: number;
  initialDeposit: string;
}

export interface FreighterState {
  address: string | null;
  connected: boolean;
  network: string | null;
}
