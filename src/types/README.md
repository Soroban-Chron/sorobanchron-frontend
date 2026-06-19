# Type Definitions

TypeScript interfaces and types for SorobanChron.

## Core Types

### Job
Represents an automation job on the Soroban blockchain.

```typescript
interface Job {
  id: string;                    // Unique identifier
  contractAddress: string;       // Soroban contract address
  interval: number;              // Execution interval in seconds
  feePool: string;              // XLM balance for fees
  lastRun: number;              // Unix timestamp of last execution
  active: boolean;              // Current status
}
```

### RegisterJobParams
Parameters required to register a new job.

```typescript
interface RegisterJobParams {
  contractAddress: string;       // Soroban contract (56 chars, starts with C)
  interval: number;              // Seconds (60 - 31536000)
  initialDeposit: string;        // XLM amount (1 - 1000000)
}
```

### FreighterState
Freighter wallet connection state.

```typescript
interface FreighterState {
  address: string | null;       // Connected wallet address
  connected: boolean;           // Connection status
  network: string | null;       // Stellar network passphrase
  error?: string | null;        // Last error message
}
```
