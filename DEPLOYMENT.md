# 🚀 Yevacure Website Deployment Guide

This guide will walk you through deploying the Yevacure Pharmaceutical website to various free hosting platforms.

## 📋 Prerequisites

- GitHub account
- Node.js installed locally
- Git installed locally

## 🔧 Local Setup & Testing

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with optimized files

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Fastest & Easiest)

**Pros:** 
- Free tier with generous limits
- Automatic deployments from GitHub
- Excellent performance
- Built-in analytics

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Select "React" framework preset
6. Click "Deploy"

**Result:** Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Netlify

**Pros:**
- Free tier with good limits
- Easy GitHub integration
- Form handling capabilities

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy site"

**Result:** Your site will be live at `https://random-name.netlify.app`

### Option 3: GitHub Pages

**Pros:**
- Free hosting from GitHub
- Good for static sites
- Easy to manage

**Steps:**
1. Add to `package.json`:
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

4. Go to repository Settings > Pages
5. Select source: "Deploy from a branch"
6. Select branch: "gh-pages"

**Result:** Your site will be live at `https://username.github.io/repository-name`

## 📁 What Gets Deployed

The `dist/` folder contains:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript files
- All optimized assets for production

## 🔄 Continuous Deployment

### Vercel/Netlify
- Every push to main branch automatically deploys
- Preview deployments for pull requests
- Easy rollback to previous versions

### GitHub Pages
- Deploy manually with `npm run deploy`
- Or set up GitHub Actions for automatic deployment

## 🧪 Post-Deployment Testing

After deployment, test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images load properly
- [ ] Forms work (Contact page)
- [ ] Mobile responsiveness
- [ ] Performance (use Lighthouse)

## 📊 Performance Optimization

The build process automatically:
- Minifies CSS and JavaScript
- Optimizes images
- Creates efficient bundles
- Enables gzip compression

## 🚨 Common Issues & Solutions

### Build Fails
- Check Node.js version (use v18+)
- Clear `node_modules` and reinstall
- Verify all dependencies are installed

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check PostCSS configuration
- Verify CSS imports in `index.css`

### Routing Issues
- Ensure you're using `BrowserRouter` for client-side routing
- Check for 404 errors on direct page access
- Verify all routes are properly defined

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify the build output in `dist/` folder
3. Test locally first with `npm run dev`
4. Check hosting platform logs

## 🎯 Next Steps

After successful deployment:
1. Set up custom domain (if needed)
2. Configure analytics (Google Analytics, etc.)
3. Set up monitoring and error tracking
4. Plan content updates and maintenance

---

**Happy Deploying! 🚀**

Your Yevacure website will be live and accessible to customers worldwide.
