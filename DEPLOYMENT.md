# Deployment Guide

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.ts:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

If you need environment variables, create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

- Images are lazy-loaded
- Code splitting is automatic with Vite
- Animations are optimized with Framer Motion
- Tailwind CSS is purged in production

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

## Build Optimization

The production build is automatically optimized:
- Minified JavaScript and CSS
- Tree-shaking unused code
- Optimized images
- Gzip compression

## Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics
- Sentry for error tracking

## SEO

The site includes:
- Meta tags for SEO
- Open Graph tags for social sharing
- Semantic HTML
- Fast loading times
- Mobile responsiveness

All these factors contribute to better search engine rankings.
