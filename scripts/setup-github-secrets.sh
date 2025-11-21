#!/bin/bash

# Setup GitHub Secrets for Cloudflare Integration
# Note: This requires GitHub CLI (gh) to be installed and authenticated

echo "🔐 Setting up GitHub Secrets for Cloudflare Integration"
echo "========================================================"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Install it from: https://cli.github.com/"
    echo ""
    echo "Or manually add secrets at:"
    echo "https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI."
    echo "Run: gh auth login"
    exit 1
fi

# Set secrets
echo "Setting CLOUDFLARE_API_TOKEN..."
gh secret set CLOUDFLARE_API_TOKEN --repo InnerAnimal/https-evergreenlandscapingokc.com --body "hIrgc-R7kkcruTSSvmdhwNVY7UEWPugrSyeX3EJ1"

echo "Setting CLOUDFLARE_ACCOUNT_ID..."
gh secret set CLOUDFLARE_ACCOUNT_ID --repo InnerAnimal/https-evergreenlandscapingokc.com --body "ede6590ac0d2fb7daf155b35653457b2"

echo ""
echo "✅ GitHub secrets configured successfully!"
echo ""
echo "Verify at: https://github.com/InnerAnimal/https-evergreenlandscapingokc.com/settings/secrets/actions"

