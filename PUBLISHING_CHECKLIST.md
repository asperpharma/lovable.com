# Publishing Checklist - Asper Beauty Shop (www.asperbeautyshop.com)

## ✅ Pre-Deployment Checklist

### 1. Shopify Configuration

- [ ] Shopify account created/activated
- [ ] Store setup completed
- [ ] Products added and published
- [ ] Storefront API app created
- [ ] Storefront API access token obtained
- [ ] Required API scopes enabled:
  - [ ] `unauthenticated_read_product_listings`
  - [ ] `unauthenticated_read_product_inventory`
  - [ ] `unauthenticated_write_checkouts`

### 2. Environment Variables

- [ ] `.env` file created (copy from `.env.example`)
- [ ] `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` set
- [ ] `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` set
- [ ] Variables tested locally

### 3. GoDaddy Domain Setup (asperbeautyshop.com)

- [ ] Domain `asperbeautyshop.com` purchased/owned in GoDaddy
- [ ] Domain connected to Shopify (automatic or manual)
- [ ] DNS records verified:
  - [ ] A record: `@` → `23.227.38.65`
  - [ ] CNAME: `www` → `shops.myshopify.com`
- [ ] Domain verification completed (wait 24-48 hours if manual)
- [ ] Both `asperbeautyshop.com` and `www.asperbeautyshop.com` configured

### 4. Code Preparation

- [ ] All code committed to repository
- [ ] Dependencies installed (`npm install`)
- [ ] Local testing completed:
  - [ ] `npm run dev` works
  - [ ] Products display correctly
  - [ ] Product pages load
  - [ ] Add to cart functionality works
  - [ ] Checkout redirects properly

### 5. Lovable Deployment

- [ ] Code pushed to Lovable project
- [ ] Deployment settings configured:
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `.next`
  - [ ] Environment variables added
- [ ] Custom domains configured:
  - [ ] `asperbeautyshop.com`
  - [ ] `www.asperbeautyshop.com`
- [ ] Initial deployment successful

### 6. Post-Deployment Testing

- [ ] Website loads at www.asperbeautyshop.com
- [ ] Root domain (asperbeautyshop.com) redirects to www
- [ ] SSL certificate active (HTTPS)
- [ ] Products display correctly
- [ ] Product detail pages work
- [ ] Add to cart button functions
- [ ] Checkout redirects to Shopify
- [ ] Mobile responsive design verified
- [ ] Cross-browser testing completed

### 7. Final Verification

- [ ] Complete purchase flow tested
- [ ] Email notifications working (if configured)
- [ ] Analytics tracking (if added)
- [ ] SEO meta tags verified
- [ ] Performance check passed

## 🚨 Common Issues & Solutions

### Products Not Showing

**Solution:**

- Verify Storefront API token is correct
- Check products are published in Shopify
- Verify API scopes are enabled

### Domain Not Connecting

**Solution:**

- Wait 24-48 hours for DNS propagation
- Double-check DNS records in GoDaddy
- Verify domain status in Shopify Admin

### Checkout Not Working

**Solution:**

- Ensure checkout scopes enabled
- Verify Storefront API token has write permissions
- Test with a simple product first

### Build Errors

**Solution:**

- Check environment variables are set in Lovable
- Verify all dependencies in package.json
- Check build logs for specific errors

## 📞 Support Resources

- **Lovable Docs:** https://docs.lovable.dev
- **Shopify Help:** https://help.shopify.com
- **GoDaddy Support:** https://www.godaddy.com/help
- **Shopify Storefront API:** https://shopify.dev/docs/api/storefront

## 🎉 Ready to Launch!

Once all items are checked, your store is ready to go live!
