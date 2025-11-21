# 🚀 Auto-Fix Configuration Guide

## ⚡ Quick Fix (5 Minutes)

### Step 1: Fix Cloudflare Pages Dashboard

**Go to**: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds

**Change these settings:**

1. **Build command**: 
   - Current: `None`
   - Change to: `npm run build`

2. **Deploy command**: 
   - Current: `npx wrangler deploy`
   - Change to: **DELETE IT** (leave blank)

3. **Version command**: 
   - Current: `npx wrangler versions upload`
   - Change to: **DELETE IT** (leave blank)

4. **Build output directory**: 
   - Current: (not set or `.next`)
   - Change to: `out`

5. **Root directory**: 
   - Keep as: `/`

6. **Framework preset**: 
   - Set to: `Next.js`

7. **Environment Variables** (click "Add variable"):
   - Name: `NODE_VERSION`
   - Value: `20`

8. **Click "Save"**

9. **Go to "Deployments" tab** → Click "Retry deployment"

---

### Step 2: Verify GitHub Secrets

**Go to**: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions

**Verify these secrets exist:**

- ✅ `CLOUDFLARE_API_TOKEN` = `hIrgc-R7kkcruTSSvmdhwNVY7UEWPugrSyeX3EJ1`
- ✅ `CLOUDFLARE_ACCOUNT_ID` = `ede6590ac0d2fb7daf155b35653457b2`

**If missing, add them:**
1. Click "New repository secret"
2. Add each secret with the values above

---

## ✅ What This Fixes

### Before (Broken):
- ❌ Build command: None
- ❌ Deploy command: `npx wrangler deploy` (wrong - this is for Workers)
- ❌ Build output: `.next` (wrong - should be `out`)
- ❌ Deployment fails with "Workers-specific command" error

### After (Fixed):
- ✅ Build command: `npm run build`
- ✅ Deploy command: (blank - Cloudflare handles automatically)
- ✅ Build output: `out` (correct for Next.js static export)
- ✅ Deployment succeeds automatically

---

## 🎯 Expected Result

After fixing:

1. **Next push to GitHub** → Automatic deployment via GitHub Actions
2. **Cloudflare Pages** → Builds and deploys automatically
3. **Live site**: https://evergreen-landscaping-okc.meauxbility.workers.dev

---

## 📋 Configuration Files (Already Updated)

✅ `wrangler.toml` - Correct output directory
✅ `.github/workflows/deploy.yml` - Correct deployment config
✅ `next.config.js` - Static export configured
✅ `package.json` - Build scripts ready

**All you need to do is update the Cloudflare dashboard settings!**

---

## 🔍 Verification

After fixing, check:

1. **Build logs** should show:
   - ✅ `npm run build` running
   - ✅ Files output to `out/` directory
   - ✅ No `wrangler deploy` command

2. **Deployment** should show:
   - ✅ Build succeeded
   - ✅ Deployment successful
   - ✅ Site accessible

---

## 🚨 Common Issues

**Issue**: "Workers-specific command" error
- **Fix**: Remove deploy command (leave blank)

**Issue**: "No build output detected"
- **Fix**: Set build output directory to `out`

**Issue**: Build fails with module errors
- **Fix**: Ensure `NODE_VERSION=20` environment variable is set

---

**Once you update the Cloudflare dashboard, everything will work automatically!**

