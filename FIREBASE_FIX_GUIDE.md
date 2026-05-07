# Firebase Authentication Fix for Live Website

## 🚨 Problem
Firebase authentication works on localhost but fails on the live website.

## 🔧 Solution Steps

### 1. Firebase Console Configuration
Go to Firebase Console → Authentication → Settings

#### Add Authorized Domains:
1. Click "Add domain"
2. Add your production domain (e.g., `yourdomain.com`)
3. Add `www.yourdomain.com` (if applicable)
4. Add any subdomains
5. Click Save

#### Check Email/Password Authentication:
1. Go to Authentication → Sign-in method
2. Ensure "Email/Password" is **Enabled**
3. Check that it's not in test mode

### 2. Environment Configuration
Create `.env.production` file:
```
VITE_FIREBASE_API_KEY=AIzaSyC8PumwVyhOg88My9xjWmBgaZqxxah0Q0k
VITE_FIREBASE_AUTH_DOMAIN=ai-resume-builder-9a10f.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ai-resume-builder-9a10f
VITE_FIREBASE_STORAGE_BUCKET=ai-resume-builder-9a10f.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=360125700709
VITE_FIREBASE_APP_ID=1:360125700709:web:83ae482aff14f64b98048c
```

### 3. Deployment Configuration
Ensure your hosting service supports Firebase Auth:
- Vercel: Add environment variables
- Netlify: Add environment variables
- GitHub Pages: May need additional configuration

### 4. Common Issues & Fixes

#### Issue: "auth/network-request-failed"
- Check internet connection
- Verify Firebase project is active
- Ensure API key is correct

#### Issue: "auth/too-many-requests"
- Enable higher rate limits in Firebase Console
- Implement rate limiting in your app

#### Issue: "auth/invalid-api-key"
- Verify API key matches Firebase project
- Check if API key is restricted

#### Issue: "auth/cors-error"
- Add domain to authorized domains list
- Check CORS settings in Firebase Console

### 5. Testing Checklist
- [ ] Test signup on production domain
- [ ] Test login on production domain
- [ ] Test logout functionality
- [ ] Test session persistence
- [ ] Test protected routes

### 6. Debug Mode
Add this to your auth config for debugging:
```javascript
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, "http://localhost:9099");
}
```

## 🚀 Quick Fix Steps
1. Add your domain to Firebase authorized domains
2. Ensure Email/Password auth is enabled
3. Deploy with correct environment variables
4. Test authentication flow

## 📞 Support
If issues persist:
1. Check Firebase Console logs
2. Verify browser console errors
3. Test with different browsers
4. Contact Firebase support if needed
