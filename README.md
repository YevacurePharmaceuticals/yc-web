# Yevacure Pharmaceutical Website 

A modern, responsive website for Yevacure Pharmaceutical Pvt Ltd, showcasing their pharmaceutical and personal care products with enhanced UI/UX, animations, and compliance-focused features.

## 🚀 Features

- **Modern Design**: Built with React 19, Tailwind CSS, and Framer Motion
- **Responsive Layout**: Mobile-first design that works on all devices
- **Enhanced UX**: Smooth animations, lazy-loaded images, and interactive elements
- **Compliance Focus**: ISO approvals, certifications, and safety information
- **Performance Optimized**: Lazy loading, debounced search, and optimized images
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Loading**: React Lazy Load Image Component
- **Utilities**: Lodash Debounce
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   └── ProductCard.jsx          # Product card component
├── data/
│   └── products.js              # Product data with certifications
├── pages/
│   ├── Home.jsx                 # Homepage with hero and sections
│   ├── About.jsx                # Company information
│   ├── Products.jsx             # Product catalog with search/filter
│   ├── Contact.jsx              # Contact form and information
│   └── ProductDetails.jsx       # Detailed product view with accordion
├── App.jsx                      # Main app with navigation
├── main.jsx                     # Entry point
└── index.css                    # Global styles with Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd yevacure
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Select the React framework preset
5. Click "Deploy"

Your site will be available at `https://your-project-name.vercel.app`

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git" and connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages

1. Add this to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Customization

### Colors
The primary color scheme uses blue tones for trust and professionalism:
- Primary Blue: `#2196f3`
- Dark Blue: `#1769aa`
- Light Blue: `#eff6ff`

### Company Information
Update the following files with your company details:
- `src/data/products.js` - Product information
- `src/pages/About.jsx` - Company details
- `src/pages/Contact.jsx` - Contact information
- `src/App.jsx` - Footer information

### Images
Replace placeholder images in:
- Product images in `src/data/products.js`
- Hero images in `src/pages/Home.jsx`
- About page images

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layouts, stacked navigation
- **Tablet**: Two-column grids, expanded navigation
- **Desktop**: Multi-column layouts, full navigation

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios
- Alt text for all images
- Screen reader friendly

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags (add to index.html)
- Structured data for products
- Fast loading times
- Mobile-friendly design

## 📊 Performance

- Lazy-loaded images
- Debounced search (300ms delay)
- Optimized animations
- Minimal bundle size
- Lighthouse score target: 90+

## 🧪 Testing

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

For technical support or questions about the website:
- **Email**: yevacurepharmaceutical123@gmail.com
- **Phone**: +91-8047785182

## 📄 License

This project is proprietary software owned by Yevacure Pharmaceutical Pvt Ltd.

## 🔄 Updates

To update the website:
1. Make changes in the development environment
2. Test thoroughly
3. Build and deploy to production
4. Verify all functionality works correctly

---

**Built with ❤️ for Yevacure Pharmaceutical Pvt Ltd**
