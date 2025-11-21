# 🔐 GitHub Secrets Setup for Cloudflare Integration

## ✅ Required GitHub Secrets

Go to: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions

### Add These Secrets:

| Secret Name | Value | Where to Get It |
|------------|-------|----------------|
| `CLOUDFLARE_API_TOKEN` | `hIrgc-R7kkcruTSSvmdhwNVY7UEWPugrSyeX3EJ1` | ✅ Already provided |
| `CLOUDFLARE_ACCOUNT_ID` | `ede6590ac0d2fb7daf155b35653457b2` | ✅ Already provided |

---

## 🔧 Cloudflare Pages Dashboard Configuration

### Step 1: Fix Build Settings

**Go to**: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds

**Update Configuration:**

| Setting | Current (Wrong) | Correct Value |
|---------|----------------|---------------|
| **Build command** | `None` | `npm run build` |
| **Deploy command** | `npx wrangler deploy` | **REMOVE** (leave blank) |
| **Version command** | `npx wrangler versions upload` | **REMOVE** (leave blank) |
| **Build output directory** | (not set) | `out` |
| **Root directory** | `/` | `/` ✅ |
| **Framework preset** | (auto-detect) | `Next.js` |
| **Production branch** | `main` | `main` ✅ |

### Step 2: Add Environment Variables

**In the same settings page, scroll to "Environment variables":**

Click **"Add variable"** and add:

- **Variable name**: `NODE_VERSION`
- **Value**: `20`

### Step 3: Save and Redeploy

1. Click **"Save"** at the bottom
2. Go to **"Deployments"** tab
3. Click **"Retry deployment"** on the latest failed build

---

## 🚀 Cloudflare Services Configuration

### D1 Database (Optional - for future use)

If you want to set up D1 database:

```bash
# Create D1 database
npx wrangler d1 create evergreen-db

# This will output a database_id - add it to wrangler.toml
```

Then update `wrangler.toml`:
```toml
[[d1_databases]]
binding = "DB"
database_name = "evergreen-db"
database_id = "your-database-id-here"
```

### R2 Storage (Optional - for future use)

```bash
# Create R2 bucket
npx wrangler r2 bucket create evergreen-assets
```

Update `wrangler.toml`:
```toml
[[r2_buckets]]
binding = "ASSETS"
bucket_name = "evergreen-assets"
```

---

## ✅ Verification Checklist

- [ ] GitHub secrets added (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`)
- [ ] Cloudflare Pages build command set to `npm run build`
- [ ] Deploy command removed (blank)
- [ ] Version command removed (blank)
- [ ] Build output directory set to `out`
- [ ] Environment variable `NODE_VERSION=20` added
- [ ] Settings saved
- [ ] Deployment retried

---

## 🎯 After Configuration

Once configured correctly:

1. **GitHub Actions** will automatically deploy on every push to `main`
2. **Cloudflare Pages** will build and deploy automatically
3. **Site will be live** at: https://evergreen-landscaping-okc.meauxbility.workers.dev

---

## 📞 Quick Reference

**GitHub Secrets**: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions

**Cloudflare Pages Settings**: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds

**Cloudflare Account ID**: `ede6590ac0d2fb7daf155b35653457b2`

**Project Name**: `evergreen-landscaping-okc`

---

**All configuration files are ready in the repo. Just update the Cloudflare dashboard settings!**

