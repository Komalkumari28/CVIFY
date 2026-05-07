// Firebase Production Setup Script
// Run this script to verify and configure Firebase for production

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8PumwVyhOg88My9xjWmBgaZqxxah0Q0k",
  authDomain: "ai-resume-builder-9a10f.firebaseapp.com",
  projectId: "ai-resume-builder-9a10f",
  storageBucket: "ai-resume-builder-9a10f.firebasestorage.app",
  messagingSenderId: "360125700709",
  appId: "1:360125700709:web:83ae482aff14f64b98048c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to check Firebase configuration
export async function checkFirebaseConfig() {
  const currentDomain = window.location.hostname;
  console.log('🔍 Checking Firebase configuration for domain:', currentDomain);
  
  // Test authentication configuration
  try {
    // Check if auth is properly initialized
    const currentUser = auth.currentUser;
    console.log('✅ Firebase Auth initialized successfully');
    
    // Check current domain configuration
    if (currentDomain === 'localhost' || currentDomain === '127.0.0.1') {
      console.log('🔧 Running in development mode');
    } else {
      console.log('🚀 Running in production mode');
      console.log('📋 Ensure this domain is added to Firebase authorized domains:');
      console.log(`   - ${currentDomain}`);
      console.log(`   - www.${currentDomain}`);
    }
    
    return {
      success: true,
      domain: currentDomain,
      authConfigured: true
    };
    
  } catch (error) {
    console.error('❌ Firebase configuration error:', error);
    return {
      success: false,
      error: error.message,
      domain: currentDomain,
      authConfigured: false
    };
  }
}

// Function to test authentication
export async function testAuth() {
  try {
    console.log('🧪 Testing Firebase authentication...');
    
    // Test auth state
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('✅ User is authenticated:', user.email);
      } else {
        console.log('ℹ️ No user currently authenticated');
      }
    });
    
    return { success: true };
  } catch (error) {
    console.error('❌ Authentication test failed:', error);
    return { success: false, error: error.message };
  }
}

// Auto-run configuration check
if (typeof window !== 'undefined') {
  checkFirebaseConfig();
  testAuth();
}

export { auth, app };
