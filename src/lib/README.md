# Utility Libraries

This directory contains reusable utility functions and constants for the SorobanChron frontend.

## Files

- **async.ts** - Async utilities (retry, timeout, delay)
- **config.ts** - Application configuration and environment helpers
- **constants.ts** - UI, validation, and job default constants
- **errors.ts** - Error classes and error handling utilities
- **formatting.ts** - Date, address, and duration formatting functions
- **index.ts** - Barrel export for all utilities
- **logger.ts** - Simple logging utility with dev/prod modes
- **network.ts** - Stellar network detection and naming
- **storage.ts** - localStorage utilities with type safety
- **theme.ts** - Color and styling constants
- **validation.ts** - Input validation functions

## Usage

### Import specific utilities
```typescript
import { formatDate, isValidAddress } from '@/lib/formatting';
import { createLogger } from '@/lib/logger';
```

### Or use barrel export
```typescript
import { formatDate, isValidAddress, createLogger } from '@/lib';
```
