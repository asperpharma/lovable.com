# Asper Beauty Shop - Domain Configuration

This project is configured to use the custom domain **www.asperbeautyshop.com**.

## Domain Setup Instructions

### Step 1: Connect Domain in Lovable Platform

1. Go to your Lovable project dashboard
2. Navigate to **Project → Settings → Domains**
3. Click **Connect domain**
4. Enter: `www.asperbeautyshop.com`
5. Choose your setup method:
   - **Automatic setup**: Select your domain provider and authorize DNS updates
   - **Manual setup**: Follow the DNS records below

### Step 2: DNS Configuration

If using manual setup, add these DNS records to your domain registrar (asperbeautyshop.com):

#### For www.asperbeautyshop.com:
- **Type**: `A` Record
- **Name**: `www`
- **Value**: [Provided by Lovable - typically an IP address]
- **TTL**: 3600 (or default)

- **Type**: `TXT` Record  
- **Name**: `www`
- **Value**: [Provided by Lovable for verification]
- **TTL**: 3600 (or default)

#### For root domain (asperbeautyshop.com):
- **Type**: `A` Record
- **Name**: `@` (or root)
- **Value**: [Same IP as www record]
- **TTL**: 3600 (or default)

**Important Notes:**
- Remove any existing `AAAA` records before adding new ones
- DNS changes can take up to 72 hours to propagate (usually within hours)
- SSL certificate will be automatically issued after DNS verification

### Step 3: Environment Variables

Make sure your `.env` file includes:
```
NEXT_PUBLIC_SITE_URL=https://www.asperbeautyshop.com
NEXT_PUBLIC_DOMAIN=www.asperbeautyshop.com
```

### Step 4: Verify Connection

1. Wait for DNS propagation
2. Check SSL certificate status in Lovable dashboard
3. Visit https://www.asperbeautyshop.com to verify it's working

## Troubleshooting

- **Domain not resolving**: Check DNS propagation using tools like `nslookup` or `dig`
- **SSL certificate issues**: Wait 24-48 hours after DNS verification
- **404 errors**: Ensure your project is published in Lovable
- **CNAME conflicts**: Remove any existing CNAME records for www subdomain

## Support

For domain-related issues, contact Lovable support or refer to:
- [Lovable Custom Domain Documentation](https://docs.lovable.dev/features/custom-domain)
