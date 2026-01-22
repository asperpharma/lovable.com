# Deployment Guide

## Step-by-Step Publishing Instructions

### 1. Shopify Setup

1. **Create/Login to Shopify Account**
   - Go to https://www.shopify.com
   - Sign up for a 30-day free trial if needed
   - Complete store setup

2. **Get Storefront API Token**
   - In Shopify Admin: Settings → Apps and sales channels → Develop apps
   - Click "Create an app"
   - Name it "Lovable Storefront"
   - Go to "API credentials" tab
   - Under "Storefront API", click "Configure"
   - Enable required scopes:
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_product_inventory`
     - `unauthenticated_write_checkouts`
   - Save and copy the "Storefront API access token"

3. **Add Products**
   - Go to Products in Shopify Admin
   - Add your products
   - Ensure products are published and available

### 2. Environment Configuration

1. **Create `.env` file** (copy from `.env.example`)
2. **Add your credentials:**
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token-here
   ```

### 3. GoDaddy Domain Connection (asperbeautyshop.com)

#### Automatic Connection (Easiest)

1. In Shopify Admin: Settings → Domains
2. Click "Connect existing domain"
3. Enter `asperbeautyshop.com`
4. Click "Next"
5. Select "Connect automatically"
6. You'll be redirected to GoDaddy
7. Log in and authorize the connection
8. Wait for verification (usually 5-15 minutes)

#### Manual Connection

1. In Shopify Admin: Settings → Domains → Connect existing domain
2. Enter your domain and select "Set it up yourself"
3. Shopify will show you DNS records to add
4. In GoDaddy:
   - Go to DNS Management
   - Add/Edit A record: `@` → `23.227.38.65`
   - Add/Edit CNAME record: `www` → `shops.myshopify.com`
5. Wait up to 48 hours for DNS propagation

### 4. Lovable Deployment

1. **Push Code to Lovable**
   - Ensure all files are committed
   - Push to your Lovable project repository

2. **Configure Deployment**
   - In Lovable dashboard, go to Deployment settings
   - Connect your repository
   - Set build command: `npm run build`
   - Set output directory: `.next`

3. **Add Custom Domain**
   - In Lovable deployment settings, add:
     - `asperbeautyshop.com`
     - `www.asperbeautyshop.com`
   - Follow Lovable's DNS instructions if needed
   - Note: If domain is already connected to Shopify, you may need to use
     Shopify's hosting or configure subdomain routing

### 5. Domain Routing Options

**Option A: Shopify Hosting (Recommended for E-commerce)**

- Use Shopify's checkout and hosting
- Domain points directly to Shopify
- Frontend can be hosted separately and embedded

**Option B: Lovable Hosting with Shopify API**

- Host frontend on Lovable
- Use Shopify Storefront API for products
- Use Shopify checkout URLs
- Configure CNAME for subdomain (e.g., `store.yourdomain.com`)

**Option C: Hybrid Approach**

- Main site on Lovable (www.yourdomain.com)
- Store subdomain on Shopify (shop.yourdomain.com)
- Or reverse: store on Shopify, blog/docs on Lovable

### 6. Final Verification

1. **Test Store Functionality**
   - [ ] Products load correctly
   - [ ] Product pages display properly
   - [ ] Add to cart works
   - [ ] Checkout redirects to Shopify
   - [ ] Mobile responsive

2. **Test Domain**
   - [ ] Domain loads correctly
   - [ ] SSL certificate is active (HTTPS)
   - [ ] www and non-www redirect properly

3. **Performance Check**
   - [ ] Page load times are acceptable
   - [ ] Images are optimized
   - [ ] API calls are working

## Troubleshooting

### Products Not Showing

- Verify Storefront API token is correct
- Check that products are published in Shopify
- Verify API scopes are enabled

### Domain Not Connecting

- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain status in Shopify Admin

### Checkout Issues

- Ensure checkout scopes are enabled in API settings
- Verify Storefront API token has write permissions
- Test with a simple product first

## Next Steps After Deployment

1. Set up Google Analytics
2. Configure SEO settings
3. Add custom branding
4. Set up email notifications
5. Configure payment methods in Shopify
6. Test complete purchase flow
7. Set up inventory management
