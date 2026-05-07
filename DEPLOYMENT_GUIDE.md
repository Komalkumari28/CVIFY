# Firebase Migration & Deployment Guide

## 🔄 Project Migration Complete

### ✅ Changes Made

#### 1. Firebase Configuration Updated
- **Old Project**: `ai-resume-builder-9a10f`
- **New Project**: `cvify-d9717`
- **Config File**: `src/firebase/firebaseConfig.js` updated with environment variables

#### 2. Environment Files Created
- `.env.production` - Production environment variables
- `.env.development` - Development environment variables
- Both files configured for new Firebase project

#### 3. Migration Scripts Created
- `migrate-firebase.js` - Automated migration script
- `firebase-hosting.json` - Production hosting configuration

#### 4. Enhanced Error Handling
- Updated Login.jsx with production-specific error codes
- Updated Signup.jsx with comprehensive error handling
- Added CORS, network, and configuration errors

## 🚀 Deployment Steps

### Step 1: Firebase Console Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `cvify-d9717`
3. Enable Authentication → Email/Password
4. Add authorized domains:
   - Your production domain
   - www.yourdomain.com
   - localhost (for development)

### Step 2: Build & Deploy
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to new Firebase project
firebase deploy --project cvify-d9717
```

### Step 3: Environment Variables
Set these in your hosting platform:
```
VITE_FIREBASE_API_KEY=AIzaSyC8PumwVyhOg88My9xjWmBgaZqxxah0Q0k
VITE_FIREBASE_AUTH_DOMAIN=cvify-d9717.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cvify-d9717
VITE_FIREBASE_STORAGE_BUCKET=cvify-d9717.firebasestorage.app
VITE_FIREBASE_APP_ID=1:360125700709:web:83ae482aff14f64b98048c
```

## 🔧 Verification Checklist

### Before Deployment:
- [ ] Environment variables set correctly
- [ ] Firebase project selected: `cvify-d9717`
- [ ] Authentication enabled in new project
- [ ] Firestore database created
- [ ] Hosting configured

### After Deployment:
- [ ] Test signup functionality
- [ ] Test login functionality
- [ ] Test database operations
- [ ] Test file uploads
- [ ] Verify user persistence

## 📊 Migration Benefits

### New Project Features:
- ✅ Updated Firebase configuration
- ✅ Better error handling
- ✅ Environment-based configuration
- ✅ Production-ready deployment
- ✅ Enhanced security headers

### URL Changes:
- **Old**: `https://ai-resume-builder-9a10f.web.app`
- **New**: `https://cvify-d9717.web.app`

## 🛠️ Troubleshooting

### Common Issues:
1. **Authentication fails**: Check authorized domains
2. **Database errors**: Verify Firestore rules
3. **Build fails**: Check environment variables
4. **Deploy fails**: Verify Firebase project ID

### Debug Commands:
```bash
# Check Firebase project
firebase projects:list

# Check deployment status
firebase hosting:sites:list

# View logs
firebase functions:log
```

## 🎯 Next Steps

1. **Test locally** with new configuration
2. **Build production** version
3. **Deploy to new Firebase project**
4. **Verify all functionality** works
5. **Update DNS** if using custom domain

The migration is complete and ready for deployment! 🚀
