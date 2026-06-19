# React Hooks

Custom React hooks for SorobanChron frontend.

## Available Hooks

### useFreighter
Manages Freighter wallet connection and transaction signing.

```typescript
import { useFreighter } from '@/hooks';

export function MyComponent() {
  const { address, connected, connect, sign, disconnect, error } = useFreighter();

  return (
    <button onClick={connect}>
      {connected ? `Connected: ${address}` : 'Connect Wallet'}
    </button>
  );
}
```

**Properties:**
- `address` - Connected wallet address or null
- `connected` - Connection status
- `network` - Stellar network passphrase
- `error` - Last error message if any
- `connect()` - Initiate wallet connection
- `sign(xdr)` - Sign transaction XDR
- `disconnect()` - Disconnect wallet
