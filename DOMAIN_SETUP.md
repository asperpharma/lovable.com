# Complete Domain Setup Guide for www.asperbeautyshop.com

## Overview
This guide will help you connect your Lovable project to the custom domain www.asperbeautyshop.com.

## Prerequisites
- ✅ Paid Lovable plan (required for custom domains)
- ✅ Project published in Lovable
- ✅ Access to domain registrar DNS settings
- ✅ Domain: asperbeautyshop.com registered

## Step-by-Step Setup

### Part 1: Lovable Platform Configuration

1. **Access Domain Settings**
   - Log into your Lovable account
   - Open your project
   - Go to **Project → Settings → Domains**
   - Or use the **Publish modal**

2. **Add Custom Domain**
   - Click **"Connect domain"** button
   - Enter: `www.asperbeautyshop.com`
   - Click **Continue**

3. **Choose Setup Method**

   **Option A: Automatic Setup (Recommended)**
   - Select your domain provider from the list
   - Authorize Lovable to make DNS changes
   - Lovable will automatically configure DNS records
   - Click **Done**

   **Option B: Manual Setup**
   - Copy the DNS records provided by Lovable
   - Follow Part 2 below to add them manually

### Part 2: Manual DNS Configuration

If you chose manual setup, add these records to your domain registrar:

#### DNS Records Needed:

**For www.asperbeautyshop.com:**
```
Type: A
Name: www
Value: [IP address from Lovable]
TTL: 3600

Type: TXT
Name: www
Value: [Verification string from Lovable]
TTL: 3600
```

**For root domain (asperbeautyshop.com):**
```
Type: A
Name: @ (or leave blank for root)
Value: [Same IP as www record]
TTL: 3600
```

#### Common Domain Registrar Instructions:

**GoDaddy:**
1. Log in → My Products → DNS
2. Click "Add" to create new records
3. Enter the A and TXT records above

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add new record for each A and TXT record

**Cloudflare:**
1. Select domain → DNS → Records
2. Add A and TXT records
3. Ensure proxy is OFF (gray cloud) for A records

**Google Domains:**
1. My domains → DNS → Custom records
2. Add A and TXT records

### Part 3: Verification & SSL

1. **Wait for DNS Propagation**
   - Usually takes 1-24 hours
   - Can take up to 72 hours maximum
   - Check status in Lovable dashboard

2. **SSL Certificate**
   - Automatically issued by Lovable after DNS verification
   - Usually takes 24-48 hours after DNS is verified
   - Your site will be accessible via HTTPS

3. **Verify Connection**
   - Check Lovable dashboard for "Connected" status
   - Visit https://www.asperbeautyshop.com
   - Ensure SSL certificate is active (green lock icon)

### Part 4: Project Configuration

Update your project files to use the custom domain:

1. **Environment Variables** (`.env` or `.env.local`):
   ```
   NEXT_PUBLIC_SITE_URL=https://www.asperbeautyshop.com
   NEXT_PUBLIC_DOMAIN=www.asperbeautyshop.com
   ```

2. **Update any hardcoded URLs** in your code to use environment variables

3. **Rebuild/Republish** your project after making changes

## Troubleshooting

### Domain Not Resolving
- **Check DNS propagation**: Use `nslookup www.asperbeautyshop.com` or online tools
- **Verify records**: Ensure A records point to correct IP
- **Wait longer**: DNS can take up to 72 hours

### SSL Certificate Issues
- **Wait 24-48 hours** after DNS verification
- **Check certificate status** in Lovable dashboard
- **Clear browser cache** and try again

### 404 Errors
- **Ensure project is published** in Lovable
- **Check build status** - project must be successfully built
- **Verify domain is connected** in Lovable settings

### CNAME Conflicts
- **Remove existing CNAME records** for www subdomain
- **Use A records only** as recommended by Lovable
- **Remove AAAA records** if they exist

### Redirect Issues
- **Check redirect rules** in your project
- **Verify both www and non-www** are configured
- **Test with and without www** prefix

## Testing Your Setup

1. **DNS Check:**
   ```bash
   nslookup www.asperbeautyshop.com
   ```

2. **SSL Check:**
   - Visit https://www.ssllabs.com/ssltest/
   - Enter your domain

3. **Accessibility:**
   - Visit https://www.asperbeautyshop.com
   - Check browser console for errors
   - Test all pages and functionality

## Next Steps

After domain is connected:
- ✅ Update all internal links to use the custom domain
- ✅ Update social media profiles with new URL
- ✅ Submit sitemap to search engines
- ✅ Set up Google Analytics with new domain
- ✅ Update any external services with new domain

## Support Resources

- [Lovable Custom Domain Docs](https://docs.lovable.dev/features/custom-domain)
- Lovable Support: Available in your dashboard
- Domain Registrar Support: Contact your registrar for DNS help

---

**Status**: Ready for domain connection
**Domain**: www.asperbeautyshop.com
**Last Updated**: [Current Date]
