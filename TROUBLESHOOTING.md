# Troubleshooting

## Common Issues

### Freighter Connection Issues

**Problem**: "Freighter not installed" error
- **Solution**: Install [Freighter wallet extension](https://www.freighter.app/)

**Problem**: Connection fails after install
- **Solution**: 
  1. Refresh the page
  2. Check that Freighter is enabled in extensions
  3. Try connecting again

### Form Validation Errors

**Problem**: "Invalid contract address"
- **Solution**: Contract addresses must be 56 characters starting with 'C'
- Example: `CABC...XYZ`

**Problem**: "Interval must be between 60s and 1 year"
- **Solution**: Use an interval between 60 seconds and 31,536,000 seconds

**Problem**: "Deposit must be between 1 and 1,000,000 XLM"
- **Solution**: Enter a valid XLM amount within the range

### Network Issues

**Problem**: "Operation timed out"
- **Solution**: 
  1. Check your internet connection
  2. Verify Stellar network is accessible
  3. Try again in a moment (might be temporary)

**Problem**: Transaction submission fails
- **Solution**:
  1. Ensure your wallet has sufficient XLM for fees
  2. Check network is correct (testnet/mainnet)
  3. Verify contract address is correct
  4. Try again after a short delay

### Development Issues

**Problem**: `npm run dev` fails to start
- **Solution**: 
  ```bash
  rm -rf node_modules .next
  npm install
  npm run dev
  ```

**Problem**: TypeScript errors
- **Solution**: 
  1. Run `npx tsc --noEmit` to see all errors
  2. Update types if needed in `src/types/index.ts`
  3. Ensure imports use correct path aliases (`@/...`)

## Getting Help

1. Check [ARCHITECTURE.md](ARCHITECTURE.md) for system design
2. Review [src/lib/README.md](src/lib/README.md) for utility docs
3. See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup
4. Check Stellar documentation at https://developers.stellar.org
5. Visit Freighter docs at https://www.freighter.app/docs
