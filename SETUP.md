# JBIL Website - Setup & Configuration Guide

## 🎯 Recent Fixes & Improvements

This guide covers all the security fixes, new features, and improvements made to the JBIL website.

### ✅ Security Fixes Implemented

#### 1. **Secure EmailJS Configuration**
- **Issue**: EmailJS credentials were hardcoded in the component
- **Fix**: Moved to environment variables
- **Files Changed**: `src/components/Contact/ContactForm.jsx`

#### 2. **Enhanced Form Validation**
- **Improvements**:
  - Email format validation
  - Phone number validation
  - Message length validation
  - Real-time error clearing
  - User-friendly error messages (no more browser alerts)
- **Security**: Prevents spam and malicious input

#### 3. **Error Boundary Component**
- **Purpose**: Catches React component errors before they crash the app
- **Location**: `src/components/ErrorBoundary.jsx`
- **Benefit**: Better error handling and user experience

---

## 🚀 Setup Instructions

### Step 1: Install EmailJS
EmailJS is already in your `package.json`, but verify it's installed:

```bash
npm install
```

### Step 2: Get EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up or log in with your account
3. Navigate to **Account** settings
4. Copy these three values:
   - **Service ID** (from Services section)
   - **Public Key** (from Account > API Keys)
   - **Template ID** (from Email Templates section)

### Step 3: Configure Environment Variables

1. Open `.env.local` in your project root
2. Fill in your actual EmailJS credentials and company info:

```env
# EmailJS Configuration (from your EmailJS dashboard)
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here

# Contact Information
VITE_COMPANY_EMAIL=info@jbil.net
VITE_COMPANY_PHONE=+92-XXX-XXXXXXX
VITE_COMPANY_ADDRESS=Your Company Address Here
VITE_COMPANY_HOURS=Monday - Friday: 9:00 AM - 5:00 PM PST
```

### Step 4: Create EmailJS Template

In your EmailJS dashboard:

1. Go to **Email Templates**
2. Create a new template with these variables:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email
   - `{{phone}}` - User's phone
   - `{{company_name}}` - User's company
   - `{{subject}}` - Subject line
   - `{{message}}` - Message body
   - `{{to_email}}` - Your email address

3. Set the recipient email and subject line
4. Copy the **Template ID** and paste into `.env.local`

### Step 5: Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

---

## 📁 Files Changed/Created

### New Files
- `.env.example` - Template for environment variables
- `.env.local` - Your actual configuration (DO NOT COMMIT)
- `.gitignore` - Prevents secrets from being committed
- `src/components/ErrorBoundary.jsx` - Error handling component
- `src/pages/NotFound.jsx` - 404 error page

### Modified Files
- `src/App.jsx` - Added ErrorBoundary and 404 route
- `src/components/Contact/ContactForm.jsx` - Security fixes and validation
- `src/components/Layout/Footer.jsx` - Dynamic year and environment variables
- `src/pages/Contact.jsx` - Environment variable integration

---

## 🔒 Security Best Practices

### ✅ Do's
- ✅ Keep `.env.local` out of version control
- ✅ Use `.env.example` to document all required variables
- ✅ Never commit real credentials
- ✅ Validate form input on client-side
- ✅ Use HTTPS in production
- ✅ Add CAPTCHA for additional spam protection

### ❌ Don'ts
- ❌ Don't hardcode credentials in components
- ❌ Don't use `alert()` for errors
- ❌ Don't trust client-side validation alone
- ❌ Don't commit `.env.local` or `.env` files
- ❌ Don't expose API keys in the browser console logs

---

## 🧪 Testing the Contact Form

1. Fill in the form with test data:
   - Name: John Doe
   - Email: john@example.com
   - Subject: Test Message
   - Message: This is a test message

2. Click "Send Message"

3. Check your email (the one configured in EmailJS) for the submission

4. Verify the success message appears

---

## 🐛 Troubleshooting

### "Failed to send message" Error
- **Cause**: EmailJS credentials not configured correctly
- **Fix**: Double-check all values in `.env.local` match your EmailJS dashboard

### Form Won't Submit
- **Cause**: Validation errors
- **Check**: Look for the error message displayed in the form
- **Fix**: Ensure email is valid, message is at least 10 characters

### Environment Variables Not Loading
- **Cause**: `.env.local` not created or incorrectly named
- **Fix**: Ensure the file is named `.env.local` (not `.env` or other variation)
- **Note**: Restart dev server after creating `.env.local`

### 404 Page Not Showing
- **Check**: Navigate to `http://localhost:5173/invalid-page`
- **Should**: Show a custom 404 page with home button
- **Fix**: Ensure App.jsx has the catch-all route: `<Route path="*" element={<NotFound />} />`

---

## 📋 Recommended Next Steps

### Medium Priority
1. **Add CAPTCHA Protection**
   - Use reCAPTCHA v3 from Google
   - Prevents automated spam submissions

2. **Email Confirmation**
   - Send automated confirmation email to users
   - Email template in EmailJS dashboard

3. **Admin Notifications**
   - Set up email alerts for new form submissions
   - Can integrate with Slack if desired

### Low Priority  
1. **Analytics Integration** - Track form submissions and page views
2. **Toast Notifications** - Replace simple success message with better UX
3. **Breadcrumb Navigation** - Help users navigate the site
4. **SEO Improvements** - Add meta tags and structured data
5. **Image Optimization** - Lazy loading and responsive images

---

## 📚 Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Form Validation Best Practices](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)

---

## ⚠️ Important Notes

1. **Never commit `.env.local`** - It contains your credentials
2. **Use `.env.example`** for documentation of what variables are needed
3. **Keep credentials secure** - Don't share them in emails, chats, or public repos
4. **Test in staging** - Before deploying to production, test with real credentials
5. **Monitor submissions** - Set up email notifications or check your inbox regularly

---

## 🤝 Support

If you encounter issues:
1. Check the error message displayed in the form
2. Verify `.env.local` has the correct values
3. Check browser console for errors (F12)
4. Restart the development server (`npm run dev`)
5. Clear browser cache if needed

---

**Last Updated**: April 4, 2026
