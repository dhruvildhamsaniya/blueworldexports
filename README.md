# BLUE WORLD EXPORTS - Corporate Website

A premium, fully responsive, multi-language corporate website for Blue World Exports.

## Tech Stack
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: react-i18next
- **Routing**: react-router-dom

## Features
- **Multi-language Support**: English and Hindi support (extendable via JSON).
- **Dark/Light Mode**: User preference persisted in localStorage.
- **SOLID Principles**: Modular component structure and clear data separation.
- **SEO Ready**: Semantic HTML, meta tags, and structured data headings.
- **Performance**: Minimal bundle size, optimized animations, and responsive layouts.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

### Updating Content
- **Products**: Edit `src/data/products.json` to add/remove products or subcategories.
- **Industries**: Edit `src/data/industries.json`.
- **Text/Locales**: Update strings in `src/locales/en.json` (English) and `src/locales/hi.json` (Hindi).

### Adding Images
Place high-resolution images in the `public/assets/images/` folder and update the paths in the respective data files or components.

## Deployment
The project is ready for deployment on **Vercel** or **Netlify**.
- **Vercel**: Import the repository and it will auto-detect Vite.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.

## SOLID Principles Implementation
- **S**: Each component (Navbar, ProductCard, etc.) has a single responsibility.
- **O**: UI components are designed to be extensible via props.
- **L**: Consistent use of shared interfaces for data mapping.
- **I**: Smaller, focused components instead of monolithic ones.
- **D**: Using React Context and Hooks for state management without tight coupling.
