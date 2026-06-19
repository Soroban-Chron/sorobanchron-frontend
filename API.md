# API Documentation

## Freighter Wallet Integration

### useFreighter Hook

```typescript
import { useFreighter } from '@/hooks';

export function MyComponent() {
  const { address, connected, connect, sign, disconnect, error } = useFreighter();
  
  // Connect wallet
  const handleConnect = async () => {
    try {
      await connect();
    } catch (err) {
      console.error(err);
    }
  };
  
  // Sign transaction
  const handleSign = async (xdr: string) => {
    try {
      const signed = await sign(xdr);
      console.log('Signed:', signed);
    } catch (err) {
      console.error(err);
    }
  };
  
  // Disconnect
  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div>
      {connected ? (
        <>
          <p>Connected: {address}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
}
```

## Form Components

### RegisterForm

```typescript
import RegisterForm from '@/components/RegisterForm';
import type { RegisterJobParams } from '@/types';

export function Dashboard() {
  const handleRegister = async (params: RegisterJobParams) => {
    // params contains validated:
    // - contractAddress: string (56 chars, starts with C)
    // - interval: number (60 - 31536000 seconds)
    // - initialDeposit: string (1 - 1000000 XLM)
    
    // Build and submit Soroban transaction
    console.log('Registering job:', params);
  };

  return <RegisterForm onSubmit={handleRegister} />;
}
```

## Utility Functions

### Formatting

```typescript
import { formatUnixDate, formatDuration, formatAddress } from '@/lib';

formatUnixDate(1718814345);        // "6/19/2026, 10:45:45 AM"
formatDuration(3600);              // "1h"
formatAddress("CABC...XYZ", 6, 4); // "CABC…XYZ"
```

### Validation

```typescript
import { 
  isValidContractAddress, 
  isValidInterval, 
  isValidDeposit 
} from '@/lib';

isValidContractAddress("CABC...XYZ");  // true
isValidInterval(3600);                 // true
isValidDeposit("10.5");                // true
```

### Storage

```typescript
import { getFromStorage, setToStorage, removeFromStorage } from '@/lib';

// Save to localStorage
setToStorage('jobs', jobsData);

// Retrieve from localStorage
const jobs = getFromStorage<Job[]>('jobs', []);

// Remove from localStorage
removeFromStorage('jobs');
```

### Logging

```typescript
import { createLogger } from '@/lib';

const logger = createLogger('MyComponent');
logger.debug('Debug message', { data: true });
logger.info('Info message');
logger.warn('Warning message', data);
logger.error('Error message', error);
```

### Async Utilities

```typescript
import { delay, retryWithBackoff, withTimeout } from '@/lib';

// Delay execution
await delay(1000);

// Retry with exponential backoff
const result = await retryWithBackoff(() => fetchData(), 3, 100);

// Execute with timeout
const data = await withTimeout(() => fetchData(), 5000);
```

## Types

See [src/types/README.md](src/types/README.md) for complete type definitions.
