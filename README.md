# Asper Beauty Shop

A modern e-commerce storefront for Asper Beauty Shop, built with Lovable, Next.js, and Shopify, configured for www.asperbeautyshop.com.

## Features

- 🛍️ Full Shopify integration with Storefront API
- 🎨 Modern, responsive design
- 🚀 Built with Next.js 14 and React
- 🌐 Configured for GoDaddy domain
- ⚡ Fast and optimized

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your Shopify credentials:

```bash
cp .env.example .env
```

Required variables:
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`: Your Shopify store domain (e.g., `your-store.myshopify.com`)
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Your Shopify Storefront API access token

### 3. Get Shopify Storefront API Token

1. Go to your Shopify Admin
2. Navigate to Settings > Apps and sales channels > Develop apps
3. Create a new app or use an existing one
4. Enable Storefront API access
5. Copy the Storefront API access token

### 4. Configure Domain (www.asperbeautyshop.com)

#### Option A: Automatic Connection (Recommended)
1. In your Shopify Admin, go to Settings > Domains
2. Click "Connect existing domain"
3. Enter `asperbeautyshop.com`
4. Follow the prompts to connect automatically

#### Option B: Manual DNS Configuration
1. Log in to your GoDaddy account
2. Go to DNS Management for `asperbeautyshop.com`
3. Update the following records:
   - **A Record (@)**: Point to `23.227.38.65`
   - **CNAME Record (www)**: Point to `shops.myshopify.com`
4. Wait up to 48 hours for DNS propagation

**See `DOMAIN_SETUP.md` for detailed domain configuration instructions.**

### 5. Deploy to Lovable

1. Push your code to your Lovable project
2. In Lovable dashboard, configure your deployment settings
3. Add custom domains:
   - `asperbeautyshop.com`
   - `www.asperbeautyshop.com`
4. Deploy!

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your store.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── products/          # Products pages
│   └── cart/              # Cart page
├── components/            # React components
│   └── AddToCartButton.tsx
├── lib/                   # Utilities and API clients
│   ├── shopify.ts        # Shopify API client
│   └── shopify-client.ts  # Shopify helper functions
└── public/                # Static assets
```

## Shopify Integration

This project uses the Shopify Storefront API to:
- Fetch products
- Display product details
- Create checkouts
- Handle cart functionality

## Domain Configuration

### Domain: www.asperbeautyshop.com

Your domain `asperbeautyshop.com` is configured for:
- **Primary URL**: www.asperbeautyshop.com
- **Root domain**: asperbeautyshop.com (redirects to www)
- **SSL**: Automatically provisioned by Shopify/Vercel
- **DNS**: Managed via GoDaddy

### GoDaddy to Shopify Connection

Your GoDaddy domain is connected to Shopify, which handles:
- SSL certificates
- Domain verification
- DNS management (if using automatic connection)

### Custom Domain in Lovable

After connecting your domain to Shopify, configure it in Lovable:
1. Go to your Lovable project settings
2. Add custom domains: `asperbeautyshop.com` and `www.asperbeautyshop.com`
3. Update DNS records if needed (Lovable will provide instructions)

**For detailed setup, see `DOMAIN_SETUP.md`**

## Publishing Checklist

- [ ] Environment variables configured
- [ ] Shopify Storefront API token added
- [ ] GoDaddy domain connected to Shopify
- [ ] Domain configured in Lovable
- [ ] Test all product pages
- [ ] Test checkout flow
- [ ] Verify SSL certificate
- [ ] Test on mobile devices

## Support

For issues or questions:
- Lovable Documentation: https://docs.lovable.dev
- Shopify Help Center: https://help.shopify.com
- GoDaddy Support: https://www.godaddy.com/help

## License

MIT
