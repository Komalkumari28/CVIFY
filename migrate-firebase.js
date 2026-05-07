// Firebase Migration Script
// Migrates from old project to new Firebase project

import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Old project info
const oldProjectId = 'ai-resume-builder-9a10f';
const newProjectId = 'cvify-d9717';

// New Firebase config
const newFirebaseConfig = {
  apiKey: "AIzaSyC8PumwVyhOg88My9xjWmBgaZqxxah0Q0k",
  authDomain: "cvify-d9717.firebaseapp.com",
  projectId: "cvify-d9717",
  storageBucket: "cvify-d9717.firebasestorage.app",
  messagingSenderId: "360125700709",
  appId: "1:360125700709:web:83ae482aff14f64b98048c"
};

export async function migrateFirebaseProject() {
  console.log('🔄 Starting Firebase migration...');
  console.log('📤 From:', oldProjectId);
  console.log('📥 To:', newProjectId);

  try {
    // Initialize new Firebase project
    const newApp = initializeApp(newFirebaseConfig);
    const newAuth = getAuth(newApp);
    const newDb = getFirestore(newApp);

    console.log('✅ New Firebase project initialized successfully');
    
    // Sign out from old project if needed
    const oldAuth = getAuth();
    if (oldAuth.currentUser) {
      await signOut(oldAuth);
      console.log('👋 Signed out from old project');
    }

    return {
      success: true,
      newApp,
      newAuth,
      newDb,
      message: 'Migration completed successfully'
    };

  } catch (error) {
    console.error('❌ Migration failed:', error);
    return {
      success: false,
      error: error.message,
      message: 'Migration failed'
    };
  }
}

export function verifyMigration() {
  const currentProject = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  const isMigrated = currentProject === newProjectId;
  
  console.log('🔍 Firebase Project Verification:');
  console.log('Current Project:', currentProject);
  console.log('Is Migrated:', isMigrated);
  
  return {
    currentProject,
    isMigrated,
    oldProjectId,
    newProjectId
  };
}

export { newFirebaseConfig, migrateFirebaseProject, verifyMigration };
