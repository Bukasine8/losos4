# Vercel Deployment Guide

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to [Vercel](https://vercel.com)**
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New" → "Project"
   - Select your GitHub repository: `Bukasine8/Losos4`
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**
   Add these environment variables in the Vercel project settings:
   
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=your-ga-id
   NEXT_PUBLIC_GTM_ID=your-gtm-id
   RESEND_API_KEY=your-resend-api-key
   CONTACT_EMAIL=losos4consultants@gmail.com
   NEXT_PUBLIC_BASE_URL=https://your-project.vercel.app
   DEEPSEEK_API_KEY=your-deepseek-api-key
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your project automatically

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables Setup

After deployment, configure these environment variables in Vercel dashboard:

1. Go to your project in Vercel
2. Navigate to: **Settings** → **Environment Variables**
3. Add each variable from the list above
4. Redeploy if needed

## Automatic Deployments

Once connected to GitHub:
- **Production**: Every push to `main` branch triggers a production deployment
- **Preview**: Every pull request creates a preview deployment

## Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## Post-Deployment Checklist

- [ ] Verify all environment variables are set
- [ ] Test the deployed application
- [ ] Update `NEXT_PUBLIC_BASE_URL` to your Vercel domain
- [ ] Configure custom domain (if needed)
- [ ] Set up Google Analytics with your production domain
- [ ] Test contact form functionality
- [ ] Verify chatbot is working with DeepSeek API

## Troubleshooting

If build fails:
1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Ensure environment variables are correctly set
4. Make sure `next.config.ts` is properly configured

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
