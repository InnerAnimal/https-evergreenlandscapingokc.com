#!/bin/bash

# Fix Cloudflare Pages Configuration
# This script provides the exact configuration needed

echo "🔧 Cloudflare Pages Configuration Fix"
echo "======================================"
echo ""
echo "Go to: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds"
echo ""
echo "Update these settings:"
echo ""
echo "✅ Build command: npm run build"
echo "❌ Deploy command: (REMOVE - leave blank)"
echo "❌ Version command: (REMOVE - leave blank)"
echo "✅ Build output directory: out"
echo "✅ Root directory: /"
echo "✅ Framework preset: Next.js"
echo "✅ Production branch: main"
echo ""
echo "Environment Variables to Add:"
echo "  NODE_VERSION = 20"
echo ""
echo "After saving, go to Deployments tab and click 'Retry deployment'"
echo ""

