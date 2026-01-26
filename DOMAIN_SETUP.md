# Domain Setup Guide for www.asperbeautyshop.com

This guide provides step-by-step instructions to connect your Lovable project to
www.asperbeautyshop.com.

## Domain Configuration Overview

Your domain **asperbeautyshop.com** needs to be configured in three places:

1. **GoDaddy** - DNS management
2. **Shopify** - Domain connection for checkout
3. **Lovable/Vercel** - Frontend hosting

## Step 1: GoDaddy DNS Configuration

### Option A: Automatic Connection (Recommended)

1. Log in to your **Shopify Admin**
2. Go to **Settings → Domains**
3. Click **"Connect existing domain"**
4. Enter: `asperbeautyshop.com`
5. Select **"Connect automatically"**
6. You'll be redirected to GoDaddy
7. Log in to GoDaddy and authorize the connection
8. Wait 5-15 minutes for verification

### Option B: Manual DNS Configuration

If automatic connection doesn't work, configure manually:

1. Log in to your **GoDaddy account**
2. Go to **My Products → Domains → asperbeautyshop.com → DNS**
3. Add/Edit the following DNS records:

   **A Record (Root Domain):**
   - Type: `A`
   - Name: `@`
   - Value: `23.227.38.65`
   - TTL: `600` (or default)

   **CNAME Record (WWW):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `shops.myshopify.com`
   - TTL: `600` (or default)

4. **Remove any conflicting records** (old A records pointing elsewhere)
5. Wait up to 48 hours for DNS propagation

## Step 2: Shopify Domain Connection

1. In **Shopify Admin → Settings → Domains**
2. Verify that `asperbeautyshop.com` is listed and verified
3. Set as **primary domain** if desired
4. Ensure SSL certificate is active (Shopify handles this automatically)

## Step 3: Lovable/Vercel Deployment Configuration

### In Lovable Dashboard:

1. Go to your **Lovable project settings**
2. Navigate to **Deployment** or **Domains** section
3. Add custom domains:
   - `asperbeautyshop.com`
   - `www.asperbeautyshop.com`
4. Follow Lovable's DNS instructions if additional records are needed

### Vercel Configuration (if using Vercel directly):

1. Go to your **Vercel project dashboard**
2. Navigate to **Settings → Domains**
3. Add domains:
   - `asperbeautyshop.com`
   - `www.asperbeautyshop.com`
4. Vercel will provide DNS records to add (if not using Shopify DNS)

## Step 4: DNS Record Priority

**Important:** If your domain is connected to Shopify, you have two options:

### Option 1: Shopify Hosting (Full E-commerce)

- Domain points directly to Shopify
- Shopify handles all hosting and checkout
- Frontend can be embedded via Shopify themes

### Option 2: Lovable/Vercel Hosting (Headless)

- Domain points to Lovable/Vercel for frontend
- Shopify Storefront API handles products/checkout
- Requires CNAME record pointing to Vercel/Lovable

**For www.asperbeautyshop.com, we recommend:**

- **Root domain (asperbeautyshop.com)** → Shopify (for checkout)
- **WWW (www.asperbeautyshop.com)** → Lovable/Vercel (for frontend)

OR

- Both point to Lovable/Vercel, with Shopify API integration

## Step 5: Environment Variables

Ensure these are set in your Lovable/Vercel deployment:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token-here
```

## Step 6: Verification Checklist

After configuration, verify:

- [ ] `www.asperbeautyshop.com` loads your Lovable site
- [ ] `asperbeautyshop.com` redirects to `www.asperbeautyshop.com` (or loads
      correctly)
- [ ] SSL certificate is active (HTTPS works)
- [ ] Products load from Shopify API
- [ ] Checkout redirects to Shopify correctly
- [ ] Mobile responsive design works

## Troubleshooting

### Domain Not Loading

- Wait 24-48 hours for DNS propagation
- Verify DNS records in GoDaddy match instructions
- Check domain status in Shopify Admin
- Verify domain in Lovable/Vercel dashboard

### SSL Certificate Issues

- Shopify automatically provisions SSL for connected domains
- Vercel/Lovable automatically provisions SSL
- Wait up to 24 hours for SSL activation

### Mixed Content Warnings

- Ensure all API calls use HTTPS
- Check that Shopify Storefront API uses HTTPS URLs

## Current Configuration

Based on your project files:

- **Domain**: www.asperbeautyshop.com
- **Platform**: Next.js on Vercel/Lovable
- **E-commerce**: Shopify Storefront API
- **DNS Provider**: GoDaddy

## Support Resources

- **GoDaddy DNS Help**: https://www.godaddy.com/help/manage-dns-records-680
- **Shopify Domain Setup**: https://help.shopify.com/en/manual/domains
- **Vercel Domain Docs**: https://vercel.com/docs/concepts/projects/domains
- **Lovable Support**: https://docs.lovable.dev
