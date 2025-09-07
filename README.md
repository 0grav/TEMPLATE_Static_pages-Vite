# 🚀 Static Pages Template - Vite + TypeScript + Tailwind CSS

Modern template for creating static websites like portfolios, landing pages, and business websites.

## 📦 Features

- ⚡️ **Vite** - Lightning fast HMR and build
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 📝 **TypeScript** - Type safety and better DX
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🪝 **Husky + Lint-staged** - Pre-commit hooks
- � **Path Aliases** - Clean imports with `@/` prefix

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the template
git clone https://github.com/0grav/TEMPLATE_Static_pages-Vite.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server on port 3000
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable components
│   ├── utils/       # Utility functions
│   ├── main.ts      # Application entry point
│   └── style.css    # Global CSS with Tailwind
├── .husky/          # Git hooks
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## 🎨 Customization

### Tailwind CSS

Customize your design system in `src/style.css`:

```css
@theme {
  --color-primary-50: #f0f2ff;
  --color-primary-100: #e0e5ff;
  --color-primary-200: #c1caff;
  --color-primary-300: #a2afff;
  --color-primary-400: #8394ff;
  --color-primary-500: #7980ff;
  --color-primary-600: #3942f1;
  --color-primary-700: #4f4d99;
  --color-primary-800: #3a3366;
  --color-primary-900: #251a33;

  /* Add more color scales as needed */
  --color-secondary-500: #your-color;
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📝 License

ISC License - feel free to use this template for any project!

## 🤝 Contributing

[If you found this helpful, you can buy me a coffee ☕](https://buymeacoffee.com/straynode)

---

Created with ❤️ by [@strayNode](https://x.com/strayNode)
