# 🌱 Evergreen Landscaping OKC - Cloudflare Pages Deployment

> **Oklahoma City's Premier Year-Round Property Care Partner**

## 🚀 Quick Deploy Guide

This repository is configured for **automatic deployment** to Cloudflare Pages via GitHub Actions. Every push to `main` triggers a build and deployment.

### Prerequisites

- ✅ GitHub repository: `InnerAnimal/https-evergreenlandscapingokc.com`
- ✅ Cloudflare Account ID: `ede6590ac0d2fb7daf155b35653457b2`
- ⚠️ **Required**: Cloudflare API Token (see setup below)

---

## 📋 Initial Setup (One-Time)

### Step 1: Create Cloudflare API Token

1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Use template: **"Edit Cloudflare Workers"**
4. Click **"Continue to summary"** → **"Create Token"**
5. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Add GitHub Secrets

1. Go to: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions
2. Click **"New repository secret"** (add these two):

| Secret Name | Value |
|------------|-------|
| `CLOUDFLARE_API_TOKEN` | [Your API token from Step 1] |
| `CLOUDFLARE_ACCOUNT_ID` | `ede6590ac0d2fb7daf155b35653457b2` |

### Step 3: Push to GitHub

```bash
git add -A
git commit -m "Initial deploy: Evergreen Landscaping OKC"
git push origin main
```

**That's it!** GitHub Actions will automatically:
- Install dependencies
- Build the Next.js app
- Deploy to Cloudflare Pages
- Make it live in ~3-5 minutes

---

## 🌐 Live URLs

After deployment:

- **Production**: `https://evergreen-landscaping-okc.meauxbility.workers.dev`
- **Preview Deployments**: Auto-generated for each PR/branch

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3.4+
- **Language**: TypeScript 5.0+
- **Hosting**: Cloudflare Pages
- **Deployment**: GitHub Actions (automatic)
- **Build Output**: Static export (`.next` folder)

---

## 📁 Project Structure

```
evergreen-landscaping-okc/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx             # Homepage
│       └── globals.css          # Global styles + Tailwind
├── .github/
│   └── workflows/
│       └── deploy.yml           # Auto-deploy workflow
├── public/                      # Static assets
├── package.json                 # Dependencies
├── next.config.js              # Next.js config (static export)
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── wrangler.toml               # Cloudflare config
└── README.md                   # This file
```

---

## 🔧 Development

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

### Build Locally

```bash
# Create production build
npm run build

# Output: .next/ folder
```

---

## 📦 Deployment Details

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 20
- **Framework**: Next.js (static export)

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file handles:
1. ✅ Checkout code
2. ✅ Setup Node.js 20
3. ✅ Install dependencies
4. ✅ Build Next.js app
5. ✅ Deploy to Cloudflare Pages

### Cloudflare Configuration

- **Account ID**: `ede6590ac0d2fb7daf155b35653457b2`
- **Project Name**: `evergreen-landscaping-okc`
- **Compatibility Date**: `2024-11-21`

---

## 🎨 Brand Colors

Defined in `tailwind.config.ts`:

- **Deep Forest**: `#1B4332`
- **Vibrant Green**: `#52B788`
- **Earth Brown**: `#6C584C`
- **Sky Blue**: `#4A90A4`
- **Sunset Orange**: `#F77F00` (CTAs)

---

## 🔄 Workflow

### Making Changes

1. **Edit code** locally
2. **Test**: `npm run dev`
3. **Commit**: `git commit -m "Your message"`
4. **Push**: `git push origin main`
5. **Auto-deploy** happens in ~3-5 minutes

### Monitoring Deployments

- **GitHub Actions**: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/actions
- **Cloudflare Dashboard**: https://dash.cloudflare.com

---

## 🐛 Troubleshooting

### Build Fails

**Error**: "Module not found"
- **Fix**: Check `package.json` dependencies are installed
- **Action**: Verify `npm install` completed in build logs

**Error**: "No .next directory found"
- **Fix**: Build command must run first (automatic in GitHub Actions)
- **Action**: Check build logs in GitHub Actions

### Deployment Fails

**Error**: "Authentication failed"
- **Fix**: Verify `CLOUDFLARE_API_TOKEN` secret is set correctly
- **Action**: Recreate token and update GitHub secret

**Error**: "Account ID mismatch"
- **Fix**: Verify `CLOUDFLARE_ACCOUNT_ID` = `ede6590ac0d2fb7daf155b35653457b2`
- **Action**: Update GitHub secret

### Site Not Loading

**Issue**: 404 errors
- **Fix**: Verify `next.config.js` has `output: 'export'`
- **Action**: Check build output includes `.next` folder

---

## 📚 For AI Agents / Future Developers

### Deployment Checklist

When deploying this project for the first time:

1. ✅ Verify GitHub repository exists
2. ✅ Create Cloudflare API token
3. ✅ Add `CLOUDFLARE_API_TOKEN` to GitHub secrets
4. ✅ Add `CLOUDFLARE_ACCOUNT_ID` to GitHub secrets
5. ✅ Push code to `main` branch
6. ✅ Monitor GitHub Actions for build status
7. ✅ Verify live URL works

### Key Files to Understand

- **`.github/workflows/deploy.yml`**: Deployment automation
- **`next.config.js`**: Static export configuration
- **`wrangler.toml`**: Cloudflare Pages settings
- **`package.json`**: Dependencies and scripts

### Environment Variables

Currently none required. Future additions:
- `NEXT_PUBLIC_SITE_URL`: Production URL
- `SANITY_PROJECT_ID`: CMS integration
- `SUPABASE_URL`: Database integration

### Custom Domain Setup

After initial deployment:

1. Go to Cloudflare Pages dashboard
2. Select `evergreen-landscaping-okc` project
3. Click **"Custom domains"**
4. Add: `evergreenlandscapingokc.com`
5. Update DNS records (Cloudflare will guide you)
6. SSL auto-provisions (~5 minutes)

---

## 🎯 Next Steps

After successful deployment:

1. ✅ Verify site loads at live URL
2. ✅ Test mobile responsiveness
3. ✅ Add custom domain (evergreenlandscapingokc.com)
4. ✅ Set up analytics (Cloudflare Web Analytics)
5. ✅ Add more pages (Services, Contact, About)
6. ✅ Integrate CMS (Sanity.io or Payload)
7. ✅ Add form handling (quote requests)
8. ✅ Set up database (Cloudflare D1)

---

## 📞 Support

- **Repository**: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com
- **Cloudflare Account**: ede6590ac0d2fb7daf155b35653457b2
- **Project**: evergreen-landscaping-okc

---

## ✅ Deployment Status

- [x] Repository initialized
- [x] Next.js app structure created
- [x] GitHub Actions workflow configured
- [x] Cloudflare configuration ready
- [ ] Cloudflare API token added (user action required)
- [ ] GitHub secrets configured (user action required)
- [ ] First deployment successful
- [ ] Custom domain configured

---

**Built with ❤️ for Evergreen Landscaping OKC**

*Oklahoma City's Premier Year-Round Property Care Partner*

