# Yevacure Deployment Guide

## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages with automated CI/CD using GitHub Actions.

### Prerequisites

1. **GitHub Repository**: Ensure your project is pushed to a GitHub repository
2. **Repository Settings**: Configure GitHub Pages in your repository settings

### Setup Steps

#### 1. Repository Configuration

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Set **Source** to "Deploy from a branch"
4. Select **gh-pages** branch
5. Click **Save**

#### 2. Environment Variables

The following environment variables are automatically available:
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

#### 3. Manual Deployment

To deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

#### 4. Automated Deployment

The project includes a GitHub Actions workflow that automatically:
- Builds the project on every push to main/master branch
- Deploys to GitHub Pages
- Updates the gh-pages branch

### Configuration Files

#### package.json
- `homepage`: Set to your GitHub Pages URL
- `predeploy`: Builds the project before deployment
- `deploy`: Deploys to GitHub Pages using gh-pages

#### vite.config.js
- `base`: Set to your repository name for proper asset paths
- `build.outDir`: Output directory for build files

#### .github/workflows/deploy.yml
- GitHub Actions workflow for automated deployment
- Triggers on push to main/master branch
- Uses peaceiris/actions-gh-pages for deployment

### Custom Domain (Optional)

If you have a custom domain:

1. Add your domain to the CNAME file in the gh-pages branch
2. Update the GitHub Actions workflow with your domain
3. Configure DNS settings for your domain

### Troubleshooting

#### Common Issues

1. **404 Errors**: Ensure the base path in vite.config.js matches your repository name
2. **Asset Loading Issues**: Check that all assets use relative paths
3. **Build Failures**: Verify all dependencies are properly installed

#### Debugging

1. Check GitHub Actions logs for build errors
2. Verify repository settings for GitHub Pages
3. Ensure the gh-pages branch is created and updated

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment Commands

```bash
# Full deployment process
npm run deploy

# Build only
npm run build

# Clean and rebuild
rm -rf dist && npm run build
```

### Repository Structure

```
yevacure/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # Source code
├── dist/                       # Build output (generated)
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

### Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify repository settings
3. Review build output in the dist folder
4. Ensure all environment variables are set correctly
