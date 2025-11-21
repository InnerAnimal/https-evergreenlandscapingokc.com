# 🔧 Cloudflare Pages Configuration Fix

## ❌ Current Problem

The Cloudflare Pages dashboard is configured with:
- **Deploy Command**: `npx wrangler deploy` ❌ (This is for Workers, not Pages!)

**Error**: "It looks like you've run a Workers-specific command in a Pages project. For Pages, please run `wrangler pages deploy` instead."

---

## ✅ Solution: Fix Cloudflare Pages Dashboard Settings

### Step 1: Go to Cloudflare Pages Dashboard

1. Navigate to: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages
2. Click on project: **`evergreen-landscaping-okc`**
3. Go to **Settings** → **Builds & deployments**

### Step 2: Update Build Configuration

**Change these settings:**

| Setting | Current (Wrong) | Correct Value |
|---------|----------------|---------------|
| **Build command** | `npm run build` | `npm run build` ✅ (Keep this) |
| **Deploy command** | `npx wrangler deploy` ❌ | **REMOVE THIS** (leave blank) |
| **Build output directory** | `.next` | `out` ✅ |
| **Root directory** | `/` | `/` ✅ |
| **Framework preset** | Next.js | Next.js ✅ |

### Step 3: Environment Variables

Add/Verify these environment variables:

- `NODE_VERSION` = `20`

### Step 4: Save and Redeploy

1. Click **"Save"**
2. Go to **Deployments** tab
3. Click **"Retry deployment"** on the latest failed deployment
   - OR
4. Make a small commit and push to trigger new deployment

---

## 🎯 Correct Configuration Summary

**Build Settings:**
- ✅ **Build command**: `npm run build`
- ✅ **Build output directory**: `out` (Next.js static export outputs here)
- ✅ **Deploy command**: **LEAVE BLANK** (Cloudflare Pages handles deployment automatically)
- ✅ **Framework preset**: Next.js

**Why `out` directory?**
- Next.js with `output: 'export'` creates static files in `out/` directory
- `.next/` is for development builds only
- Cloudflare Pages needs the `out/` directory

---

## 🚀 Alternative: Use GitHub Actions (Already Configured)

The GitHub Actions workflow is already set up correctly and will deploy automatically on every push to `main`.

**To trigger deployment:**
```bash
git add -A
git commit -m "Trigger deployment"
git push origin main
```

GitHub Actions will:
1. Build the project
2. Deploy to Cloudflare Pages automatically
3. Use correct settings (no manual dashboard config needed)

---

## ✅ Files Updated

- ✅ `wrangler.toml` - Updated output directory to `out`
- ✅ `.github/workflows/deploy.yml` - Updated directory to `out`
- ✅ `next.config.js` - Already configured for static export

---

## 🔍 Verification

After fixing the dashboard settings:

1. **Check build logs** - Should show:
   - ✅ `npm run build` running successfully
   - ✅ Files output to `out/` directory
   - ✅ No `wrangler deploy` command

2. **Check deployment** - Should show:
   - ✅ Build succeeded
   - ✅ Deployment successful
   - ✅ Site accessible at: https://evergreen-landscaping-okc.meauxbility.workers.dev

---

## 📞 Quick Fix Steps

1. **Go to**: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds
2. **Remove** the "Deploy command" field (leave it blank)
3. **Change** "Build output directory" from `.next` to `out`
4. **Save**
5. **Redeploy** (or push a new commit)

---

**The site will deploy successfully once these settings are corrected!**

