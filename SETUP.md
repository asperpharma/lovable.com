# Quick Setup Guide

## 🚀 Getting Started in 5 Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Shopify

1. Go to your Shopify Admin → Settings → Apps and sales channels → Develop apps
2. Create a new app (or use existing)
3. Enable Storefront API with these scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_write_checkouts`
4. Copy the Storefront API access token

### Step 3: Set Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token-here
```

### Step 4: Connect GoDaddy Domain to Shopify (asperbeautyshop.com)

**Automatic (Recommended):**

- Shopify Admin → Settings → Domains → Connect existing domain
- Enter `asperbeautyshop.com`
- Select "Connect automatically"
- Authorize in GoDaddy

**Manual:**

- Add A record: `@` → `23.227.38.65`
- Add CNAME: `www` → `shops.myshopify.com`

**See `DOMAIN_SETUP.md` for detailed instructions.**

### Step 5: Deploy to Lovable

1. Push code to your Lovable project
2. Configure deployment settings
3. Add your custom domain
4. Deploy!

## ✅ Test Your Store

```bash
npm run dev
```

Visit http://localhost:3000

## 📋 Pre-Launch Checklist

- [ ] Products added in Shopify
- [ ] Environment variables set
- [ ] Domain connected
- [ ] Test checkout flow
- [ ] Mobile responsive check
- [ ] SSL certificate active

## 🆘 Need Help?

- See `DEPLOYMENT.md` for detailed instructions
- See `README.md` for full documentation
