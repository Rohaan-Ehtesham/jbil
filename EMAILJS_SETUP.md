# EmailJS Free Setup Guide for JBIL Contact Form

## Overview
EmailJS is a free email service that allows you to send emails directly from your website contact form. The free tier includes:
- ✅ **200 emails per month** (≈6-7 emails/day)
- ✅ No backend server required
- ✅ Multiple email recipients
- ✅ Email templates
- ✅ Form validation
- ✅ Always free (no credit card required)

---

## Step 1: Create Free EmailJS Account

1. Go to **[emailjs.com](https://www.emailjs.com/)**
2. Click **Sign Up** button (top right)
3. Choose **Sign Up with Email**
4. Fill in:
   - Email: Your email address
   - Password: Create a strong password
   - Username: Your choice
5. Click **Create Account**
6. Verify your email (check inbox)

---

## Step 2: Connect Your Gmail Account

EmailJS uses Gmail to send emails. This is the easiest free method.

### 2.1: Start Email Service Setup
1. Log in to your EmailJS account
2. In the left menu, click **Email Services**
3. Click **Add Service** button
4. Select **Gmail** from the list
5. Click **Connect with Gmail**

### 2.2: Authorize Gmail
1. A popup will open asking to authorize EmailJS
2. Sign in with your Gmail account (the one you want to send emails from)
3. Click **Allow** to grant permissions
4. After authorization, you'll see a **Service ID** like:
   ```
   service_abc123xyz
   ```
5. **Copy and save this Service ID** - you'll need it later

### 2.3: Save the Service
1. Click **Save** button
2. Your Gmail service is now connected ✓

---

## Step 3: Create Email Template

The email template defines what the email looks like when sent to you.

### 3.1: Create New Template
1. In the left menu, click **Email Templates**
2. Click **Create New Template** button
3. Name it: `Contact_Form_Template`
4. Click **Create**

### 3.2: Set Up Email Structure

You'll see a form with these sections. Fill them out:

#### **To Email**
```
info@jbil.net
```
(This is where the contact form emails will be sent)

#### **Subject**
```
New Contact Form Submission: {{subject}}
```
(The {{subject}} will be replaced with user's subject automatically)

#### **Email Body (HTML)**
Replace the content with:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; }
        .header { border-bottom: 2px solid #1e3a5f; padding-bottom: 10px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e3a5f; }
        .value { color: #333; margin-top: 5px; }
        .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1e3a5f; margin-top: 10px; }
        .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        
        <div class="field">
            <div class="label">From:</div>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="label">Email:</div>
            <div class="value">{{from_email}}</div>
        </div>
        
        <div class="field">
            <div class="label">Phone:</div>
            <div class="value">{{phone}}</div>
        </div>
        
        <div class="field">
            <div class="label">Company:</div>
            <div class="value">{{company_name}}</div>
        </div>
        
        <div class="field">
            <div class="label">Subject:</div>
            <div class="value">{{subject}}</div>
        </div>
        
        <div class="message-box">
            <div class="label">Message:</div>
            <div class="value" style="margin-top: 10px; white-space: pre-wrap;">{{message}}</div>
        </div>
        
        <div class="footer">
            <p>This email was sent from your JBIL website contact form.</p>
        </div>
    </div>
</body>
</html>
```

#### **Verify Variables**
Make sure you have these variables in your template (they appear as {{variable_name}}):
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{phone}}` - Visitor's phone
- `{{company_name}}` - Visitor's company
- `{{subject}}` - Subject message
- `{{message}}` - Message body

### 3.3: Save Template
1. Scroll to the bottom and click **Save**
2. You'll see a **Template ID** like:
   ```
   template_abc123xyz
   ```
3. **Copy and save this Template ID** - you'll need it

---

## Step 4: Get Your Public Key

1. In the left menu, click **Account** (top left, your profile icon)
2. Click **API Keys** tab
3. You'll see your **Public Key** like:
   ```
   abc123xyz_public_key
   ```
4. **Copy and save this Public Key**

---

## Step 5: Add Credentials to Your Website

### 5.1: Update .env.local File
1. Open your project: `c:\Users\FBC\Desktop\WORK\jbil\jbil-main`
2. Open `.env.local` file in VS Code
3. Replace the placeholder values:

**From:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**To (with your actual values):**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz
VITE_EMAILJS_PUBLIC_KEY=abc123xyz_public_key
```

4. **Save the file** (Ctrl+S)

### 5.2: Restart Development Server
1. Stop the dev server if it's running (Ctrl+C in terminal)
2. Run:
   ```bash
   npm run dev
   ```
3. Your website will reload with the new configuration

---

## Step 6: Test Your Contact Form

1. Open your website: `http://localhost:5173`
2. Go to **Contact** page
3. Fill in the contact form:
   ```
   Name: John Doe
   Email: john@example.com
   Phone: +92-21-12345678
   Company: ABC Industries
   Subject: Test Message
   Message: This is a test message from the contact form.
   ```
4. Click **Send Message**
5. You should see: **"Message Sent!"** ✓

### Check Your Email
1. Check the inbox of the Gmail account you used
2. You should receive an email with the subject: **"New Contact Form Submission: Test Message"**
3. The email will contain all the form details formatted nicely

---

## Troubleshooting

### "Failed to send message" Error

**Problem**: The form shows an error after clicking send

**Solutions**:
1. **Check credentials in `.env.local`**
   - Make sure all 3 values are correct
   - No extra spaces or quotes
   - Restart dev server after changes

2. **Check Gmail connection**
   - Go to emailjs.com → Email Services
   - Make sure Gmail service shows as "Connected"
   - If not connected, reconnect it

3. **Check browser console**
   - Open DevTools (F12)
   - Look for error messages in Console tab
   - Screenshot the error and share it

4. **Monthly limit reached**
   - The free tier has 200 emails/month
   - If you've sent 200 emails this month, wait until next month
   - Or upgrade to a paid plan

### Email Not Arriving

**Problem**: Form says "Message Sent" but email doesn't arrive

1. Check **Spam/Junk folder** in Gmail
2. Wait 1-2 minutes (sometimes delayed)
3. Check the **To Email** in your EmailJS template is correct
4. Verify Gmail account is still connected to EmailJS

### Variables Not Working (Still Shows {{variable}})

**Problem**: Email shows `{{from_name}}` instead of actual name

1. Go to EmailJS → Email Templates
2. Check all variables are spelled exactly like this:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company_name}}`
   - `{{subject}}`
   - `{{message}}`
3. Click **Save** after fixing

---

## Important Security Notes

⚠️ **DO NOT:**
- Share your `.env.local` file with anyone
- Commit `.env.local` to GitHub
- Put credentials in public repositories
- Use someone else's EmailJS account

✅ **DO:**
- Keep `.env.local` in `.gitignore` (already done)
- Use `.env.example` to document what's needed
- Regenerate Public Key if you suspect it's compromised
- Monitor your 200 emails/month limit

---

## Upgrade Options

If you need more than 200 emails/month:

1. **EmailJS Pro Plans** ($12-99/month)
   - 1,000 - 100,000 emails/month
   - Priority support
   - Advanced features

2. **Alternative Services**
   - SendGrid (300 free emails/day)
   - Formspree ($25/month)
   - Custom backend with nodemailer

---

## Reference

| Item | Example |
|------|---------|
| Service ID | `service_abc123xyz` |
| Template ID | `template_abc123xyz` |
| Public Key | `abc123xyz_public_key` |
| Free Tier Limit | 200 emails/month |
| Email Recipient | info@jbil.net |

---

## Next Steps

1. ✅ Create EmailJS account
2. ✅ Connect Gmail
3. ✅ Create email template
4. ✅ Get Public Key
5. ✅ Update `.env.local`
6. ✅ Test contact form
7. ✅ You're done!

**Questions?** Check [EmailJS Documentation](https://www.emailjs.com/docs/)

---

**Last Updated**: April 4, 2026
