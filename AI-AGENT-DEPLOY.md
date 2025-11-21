# 🤖 AI Agent Deployment Guide

This document provides complete instructions for any AI agent to deploy or update the Evergreen Landscaping OKC website to Cloudflare Pages.

---

## 📋 Project Overview

- **Repository**: `InnerAnimal/https-evergreenlandscapingokc.com`
- **Cloudflare Account ID**: `ede6590ac0d2fb7daf155b35653457b2`
- **Project Name**: `evergreen-landscaping-okc`
- **Framework**: Next.js 14 (Static Export)
- **Deployment**: Automatic via GitHub Actions

---

## 🚀 Deployment Process

### Prerequisites Check

Before deploying, verify:

1. ✅ Repository exists: `https://github.com/InnerAnimal/https-evergreenlandscapingokc.com`
2. ✅ Cloudflare Account ID: `ede6590ac0d2fb7daf155b35653457b2`
3. ⚠️ **Required Secret**: `CLOUDFLARE_API_TOKEN` must exist in GitHub Secrets

### Step 1: Verify GitHub Secrets

**Location**: `https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions`

**Required Secrets**:
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Workers edit permissions
- `CLOUDFLARE_ACCOUNT_ID` - Should be `ede6590ac0d2fb7daf155b35653457b2`

**If secrets are missing**:
1. User must create Cloudflare API token at: https://dash.cloudflare.com/profile/api-tokens
2. Use template: "Edit Cloudflare Workers"
3. Add token to GitHub Secrets

### Step 2: Verify Project Structure

Ensure these files exist:

```
evergreen-landscaping-okc/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── src/app/
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Homepage
│   └── globals.css                  # Global styles
├── package.json                     # Dependencies
├── next.config.js                   # Next.js config (output: 'export')
├── wrangler.toml                    # Cloudflare config
└── README.md                        # Main documentation
```

### Step 3: Deploy

**Automatic Deployment** (Recommended):
- Push to `main` branch
- GitHub Actions automatically builds and deploys
- Monitor at: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/actions

**Manual Deployment** (If needed):
```bash
# Install dependencies
npm install

# Build project
npm run build

# Deploy using Wrangler (requires local Cloudflare auth)
npx wrangler pages deploy .next --project-name=evergreen-landscaping-okc
```

---

## 🔧 Configuration Details

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 20
- **Framework**: Next.js (static export)

### Cloudflare Settings

- **Account ID**: `ede6590ac0d2fb7daf155b35653457b2`
- **Project Name**: `evergreen-landscaping-okc`
- **Compatibility Date**: `2024-11-21`
- **Build Output**: `.next` folder

### GitHub Actions Workflow

**File**: `.github/workflows/deploy.yml`

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Build Next.js app (`npm run build`)
5. Deploy to Cloudflare Pages

**Triggers**:
- Push to `main` branch
- Pull requests to `main` branch

---

## 📝 Making Updates

### Adding New Pages

1. Create file in `src/app/[page-name]/page.tsx`
2. Follow Next.js App Router conventions
3. Commit and push to `main`
4. Auto-deploys in ~3-5 minutes

### Updating Styles

1. Edit `src/app/globals.css` or component-level styles
2. Tailwind classes work automatically
3. Commit and push
4. Auto-deploys

### Adding Dependencies

1. Add to `package.json`
2. Run `npm install` locally (optional, GitHub Actions will install)
3. Commit `package.json` and `package-lock.json`
4. Push to `main`

---

## 🐛 Troubleshooting

### Build Fails

**Error**: "Module not found"
- **Cause**: Missing dependency
- **Fix**: Add to `package.json` and push

**Error**: "TypeScript errors"
- **Cause**: Type errors in code
- **Fix**: Fix TypeScript errors, ensure `tsconfig.json` is correct

**Error**: "Build output not found"
- **Cause**: Build didn't complete
- **Fix**: Check build logs in GitHub Actions

### Deployment Fails

**Error**: "Authentication failed"
- **Cause**: Invalid or missing `CLOUDFLARE_API_TOKEN`
- **Fix**: Verify secret exists and is valid

**Error**: "Account ID mismatch"
- **Cause**: Wrong `CLOUDFLARE_ACCOUNT_ID`
- **Fix**: Verify secret = `ede6590ac0d2fb7daf155b35653457b2`

**Error**: "Project not found"
- **Cause**: Project doesn't exist in Cloudflare
- **Fix**: First deployment creates project automatically

### Site Not Loading

**Issue**: 404 errors
- **Fix**: Verify `next.config.js` has `output: 'export'`
- **Fix**: Check build output includes `.next` folder

**Issue**: Styles not loading
- **Fix**: Verify `globals.css` imports Tailwind directives
- **Fix**: Check `tailwind.config.ts` content paths

---

## 📊 Monitoring

### Deployment Status

- **GitHub Actions**: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/actions
- **Cloudflare Dashboard**: https://dash.cloudflare.com

### Live URL

After successful deployment:
- **Production**: `https://evergreen-landscaping-okc.meauxbility.workers.dev`
- **Preview URLs**: Generated for each PR/branch

---

## 🔐 Security Notes

- Never commit `.env` files
- API tokens stored in GitHub Secrets only
- Cloudflare API token should have minimal required permissions
- All secrets are encrypted by GitHub

---

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | GitHub Actions deployment workflow |
| `next.config.js` | Next.js configuration (static export) |
| `wrangler.toml` | Cloudflare Pages configuration |
| `package.json` | Dependencies and scripts |
| `src/app/page.tsx` | Homepage component |
| `tailwind.config.ts` | Tailwind CSS configuration |

---

## ✅ Deployment Checklist

When deploying for first time:

- [ ] Verify repository exists
- [ ] Verify Cloudflare Account ID is correct
- [ ] Verify `CLOUDFLARE_API_TOKEN` secret exists
- [ ] Verify `CLOUDFLARE_ACCOUNT_ID` secret exists
- [ ] Verify project structure is correct
- [ ] Push code to `main` branch
- [ ] Monitor GitHub Actions for build status
- [ ] Verify live URL works
- [ ] Test mobile responsiveness
- [ ] Verify all pages load correctly

---

## 🎯 Success Criteria

Deployment is successful when:

1. ✅ GitHub Actions workflow completes without errors
2. ✅ Site loads at Cloudflare Pages URL
3. ✅ All pages render correctly
4. ✅ Styles load properly
5. ✅ No console errors
6. ✅ Mobile responsive

---

**Last Updated**: 2024-11-21
**Maintained By**: InnerAnimal Development Team

