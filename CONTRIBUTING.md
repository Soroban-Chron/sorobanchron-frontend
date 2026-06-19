# Contributing to SorobanChron

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Add JSDoc comments to public functions and components
- Keep components focused and single-responsibility

## Commit Messages

Use conventional commits format:
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `style:` - Styling changes
- `util:` - Utility function additions
- `config:` - Configuration changes

Example: `feat: add job filtering to dashboard`

## Testing

- Write unit tests for utility functions
- Test components with React Testing Library
- Ensure validation functions cover edge cases

## Wallet Integration

- Always use the `useFreighter` hook for wallet operations
- Handle connection errors gracefully
- Validate user inputs before submission
- Show clear error messages to users
