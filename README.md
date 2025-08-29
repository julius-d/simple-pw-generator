# Simple Password Generator

A lightweight password generator that creates memorable German passwords using adjectives,
nouns, numbers, and special characters.

🔗 **Live**: https://julius-d.github.io/simple-pw-generator/

## Features

- **Memorable passwords**: Combines German adjectives and nouns for easy recall
- **Secure format**: Includes 4-digit numbers and special characters
- **Responsive design**: Works on desktop and mobile devices
- **Animated background**: Beautiful(?) gradient animation
- **Single-click generation**: Fresh password on every page load

## Password Format

Generated passwords follow the pattern: `[adjective][noun][4-digit-number][special-char]`

Example: `mutigerDrache7204!`

## Development

Built with:

- React
- TypeScript
- Vite
- ESLint + Prettier

### Getting Started

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Deployment

The project is automatically deployed to GitHub Pages. Any push to the main branch triggers a new deployment.
