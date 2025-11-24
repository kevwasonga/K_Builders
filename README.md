# Clause Interior Fits - Interior Design Portfolio Website

A modern, responsive portfolio website for an interior design and construction company, built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Auto-advancing project carousel with pause on hover, smooth scrolling navigation
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **TypeScript**: Full TypeScript support for better development experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## Project Structure

```
project/
├── public/                 # Static assets
│   ├── home_construction.jpg  # Hero background image
│   └── vite.svg           # Favicon
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── About.tsx      # About section component
│   │   ├── Contact.tsx    # Contact form and info
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── Projects.tsx   # Projects carousel
│   │   └── Services.tsx   # Services section with hover effects
│   ├── App.tsx           # Main app component with navigation
│   ├── index.css         # Global styles and Tailwind imports
│   └── main.tsx          # React app entry point
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript config for app
├── tsconfig.json         # Main TypeScript config
├── tsconfig.node.json    # TypeScript config for Node
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Customization

### Colors and Styling

The website uses Tailwind CSS with a slate color palette. To customize colors:

1. Edit `tailwind.config.js` to add custom colors
2. Update component classes in the respective `.tsx` files

### Content

Update the following files to customize content:

- **Company Information**: Edit `src/components/About.tsx`
- **Projects**: Modify the projects array in `src/components/Projects.tsx`
- **Contact Details**: Update `src/components/Contact.tsx` and `src/components/Footer.tsx`
- **Services**: Edit `src/components/Services.tsx`

### Images

Replace images in the `public/` directory:
- `kitchen_construction.jpg` - Hero background image
- `roofing_work.jpg` - Roofing project image
- `foundation_work.jpg` - Foundation work image
- `interior_work.jpg` - Interior finishing image
- `painting_work.jpg` - Painting services image
- `home_construction.jpg` - Complete home construction image
- `vite.svg` - Favicon

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Configuration Files

### Vite Configuration (`vite.config.ts`)
- React plugin setup
- Optimization settings for lucide-react

### Tailwind Configuration (`tailwind.config.js`)
- Content paths for purging unused CSS
- Custom theme extensions

### TypeScript Configuration
- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node.js specific settings

### ESLint Configuration (`eslint.config.js`)
- React hooks rules
- TypeScript integration
- React refresh plugin

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Options

1. **Netlify**
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**
   - Import your Git repository
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **GitHub Pages**
   - Build the project locally
   - Deploy the `dist/` folder to gh-pages branch

4. **Traditional Web Hosting**
   - Upload the contents of `dist/` folder to your web server

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Descriptive page titles

## Performance

- **Vite**: Fast development and optimized builds
- **Code Splitting**: Automatic code splitting for better loading
- **Image Optimization**: Properly sized images
- **CSS Purging**: Unused CSS removed in production

## Troubleshooting

### Common Issues

1. **Empty page on load**
   - Check if `index.html` exists and has proper structure
   - Verify `src/main.tsx` is correctly importing App component

2. **Styles not loading**
   - Ensure Tailwind CSS is properly configured
   - Check if `src/index.css` imports Tailwind directives

3. **TypeScript errors**
   - Run `npm run typecheck` to identify issues
   - Check `tsconfig.json` configuration

4. **Build failures**
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Check for TypeScript errors: `npm run typecheck`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support and questions:
- Email: info@buildkenya.co.ke
- Phone: +254 700 123 456

## Version History

- **v1.0.0** - Initial release with core features
  - Responsive design
  - Project carousel
  - Contact form
  - About section
  - Modern UI/UX

---

Built for Clause Interior Fits