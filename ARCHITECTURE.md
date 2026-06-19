# Architecture

## Project Structure

```
src/
├── components/        # Reusable React components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and constants
├── pages/            # Next.js pages (route handlers)
├── styles/           # Global CSS and Tailwind config
└── types/            # TypeScript type definitions
```

## Technology Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.4
- **Blockchain**: Stellar SDK & Freighter API
- **Runtime**: Node.js with React 18.3.1

## Data Flow

```
User Interaction
    ↓
React Component
    ↓
Hook (useFreighter)
    ↓
Freighter API / Stellar SDK
    ↓
Soroban Smart Contract
    ↓
Response
    ↓
UI Update
```

## Key Components

### Dashboard (pages/index.tsx)
- Entry point for the application
- Manages wallet connection state
- Displays list of jobs
- Shows registration form when connected

### JobCard (components/JobCard.tsx)
- Displays individual job information
- Shows job status (active/paused)
- Formats interval and fee information

### RegisterForm (components/RegisterForm.tsx)
- Collects job registration parameters
- Validates user input
- Handles form submission errors

### useFreighter (hooks/useFreighter.ts)
- Manages Freighter wallet connection
- Handles transaction signing
- Provides error state management

## Utility Libraries

See [src/lib/README.md](src/lib/README.md) for detailed information about:
- Formatting utilities
- Validation functions
- Logger and error handling
- Async utilities (retry, timeout)
- Local storage helpers
- Configuration management

## Error Handling

- Global error handler in _app.tsx
- Component-level error states
- Form validation with user feedback
- Graceful Freighter API error handling
- Network error detection and retry logic
