# sorobanchron-frontend

A user-facing decentralized application (dApp) UI built with React/Next.js allowing protocol operators to fund or register automation jobs.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Connect wallet:**
   Install [Freighter wallet](https://www.freighter.app/) and click "Connect Freighter"

## Documentation

- **[Architecture](ARCHITECTURE.md)** - System design, data flow, and component structure
- **[Contributing](CONTRIBUTING.md)** - Development setup and contribution guidelines
- **[Troubleshooting](TROUBLESHOOTING.md)** - Common issues and solutions
- **[src/lib/README.md](src/lib/README.md)** - Utility functions and constants
- **[src/components/README.md](src/components/README.md)** - Component documentation
- **[src/hooks/README.md](src/hooks/README.md)** - Custom React hooks

## Project Structure

```
src/
├── components/        # Reusable React components
├── hooks/            # Custom React hooks (useFreighter, etc.)
├── lib/              # Utility functions, constants, and helpers
├── pages/            # Next.js pages and routes
├── styles/           # Global CSS and Tailwind configuration
└── types/            # TypeScript type definitions
```

## Tech Stack

- **Framework:** Next.js 14.2.3
- **Language:** TypeScript 5.4.5
- **Styling:** Tailwind CSS 3.4.4
- **Blockchain:** Stellar SDK & Freighter API
- **Runtime:** Node.js with React 18.3.1

## Key Features

- ✅ Freighter wallet integration
- ✅ Job registration and management
- ✅ Real-time status display
- ✅ Input validation with error feedback
- ✅ Responsive design
- ✅ Error handling and logging
- ✅ Type-safe development with TypeScript

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Environment Setup

See [.env.example](.env.example) for environment variable configuration.

## License

Proprietary - SorobanChron Protocol
