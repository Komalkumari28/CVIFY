

# CVIFY 

## 📝 Project Description

CVIFY is a modern,resume builder that helps job seekers create professional, ATS-friendly resumes in minutes. Built with React and Firebase, it provides an intuitive interface for building, customizing, and exporting resumes without any design or technical skills required.

### 🎯 What It Does
- **Simplifies Resume Creation**: Transform complex resume building into user-friendly experience
- **Professional Templates**: Industry-tested templates for different career levels
- **Cloud Storage**: Save and access resumes anywhere, anytime
- **Instant Export**: High-quality PDF download with one click

### 👥 Target Users
- Job seekers (fresh graduates to experienced professionals)
- Career changers transitioning between industries
- Freelancers needing regular resume updates
- Students preparing for internships and first jobs

## 🌟 Live Demo

👉 **Live URL**: [https://cvify-d9717.web.app](https://cvify-d9717.web.app)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - Responsive CSS framework
- **Framer Motion** - Animation library
- **React Toastify** - Notification system
- **HTML2PDF.js** - PDF generation and export

### Backend & Services
- **Firebase Authentication** - User authentication and authorization
- **Firestore Database** - NoSQL document database
- **Firebase Hosting** - Static website hosting
- **Firebase Storage** - Cloud storage for files

## 🚀 How to Run This Project

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- Firebase account (for deployment)

### Step 1: Clone the Repository
```bash
git clone https://github.com/Komalkumari28/CVIFY.git
cd CVIFY
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=cvify-d9717.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cvify-d9717
VITE_FIREBASE_STORAGE_BUCKET=cvify-d9717.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=360125700709
VITE_FIREBASE_APP_ID=1:360125700709:web:83ae482aff14f64b98048c
```

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Open Your Browser
Navigate to `http://localhost:5173`

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to Firebase
npm run deploy
```

## 📱 How to Use the Application

### For Users
1. **Sign Up / Login** - Create an account or sign in to your existing account
2. **Choose Template** - Select from professional resume templates
3. **Fill Information** - Add your personal details, experience, education, and skills
4. **Preview & Edit** - See real-time preview and make adjustments
5. **Save & Export** - Save your resume to your account and download as PDF

### For Developers
1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## 🔐 Firebase Setup for Deployment

### 1. Create Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project or use existing `cvify-d9717`

### 2. Enable Authentication
- Go to Authentication → Sign-in method
- Enable Email/Password authentication
- Add your domain to authorized domains

### 3. Set Up Firestore
- Create Firestore database
- Configure security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /resumes/{resumeId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

### 4. Deploy
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init

# Deploy to production
firebase deploy --project cvify-d9717
```

## 📁 Project Structure

```
ai-resume-builder/
├── public/                     # Static assets
│   ├── favicon.png            # Website favicon
│   └── index.html            # Main HTML file
├── src/                       # Source code
│   ├── assets/               # Images and static files
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── ProtectedRoute.jsx # Route protection
│   │   └── PublicRoute.jsx   # Public route wrapper
│   ├── context/              # React Context
│   │   └── AuthContext.jsx   # Authentication context
│   ├── firebase/             # Firebase configuration
│   │   └── firebaseConfig.js # Firebase setup
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── Login.jsx         # Login page
│   │   ├── Signup.jsx        # Registration page
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── Account.jsx       # User account page
│   │   ├── Features.jsx      # Features page
│   │   └── Templates.jsx     # Templates page
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── .env.production           # Production environment variables
├── .env.development          # Development environment variables
├── package.json              # Dependencies and scripts
└── vite.config.js            # Vite configuration

## ✨ Key Features

- 🎨 **Professional Templates** - Multiple industry-tested, ATS-friendly templates
- 👤 **Secure Authentication** - Firebase-based user authentication and session management
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 👁️ **Real-time Preview** - See changes instantly as you type
- 📄 **PDF Export** - High-quality PDF download with one click
- 💾 **Cloud Storage** - Save and access resumes anywhere, anytime
- 🎯 **User Dashboard** - Manage multiple resumes and profile settings
- 🔐 **Data Security** - End-to-end encryption and secure data handling

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clean, commented code
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have any questions or feedback:

- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/Komalkumari28/CVIFY/issues)
- 📖 Documentation: [Project Documentation](https://github.com/Komalkumari28/CVIFY/blob/main/PROJECT_DOCUMENTATION.md)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - For the amazing UI library
- [Firebase](https://firebase.google.com/) - For backend services
- [Bootstrap](https://getbootstrap.com/) - For the responsive framework
- [Vite](https://vitejs.dev/) - For the build tool
- [HTML2PDF](https://html2pdf.com/) - For PDF export functionality

---

<div align="center">








  <strong>⭐ Star this repository if it helped you! ⭐</strong>
</div>




<img width="1904" height="1011" alt="{40C6F105-5B5F-4E23-B35C-C027195D0A4B}" src="https://github.com/user-attachments/assets/419d2167-5da9-4924-9d32-d4ac2f221f29" />

<img width="1920" height="1013" alt="{D9E8F313-5758-4FB8-9712-065DCC0B919F}" src="https://github.com/user-attachments/assets/c04892ea-74ca-4822-906a-7b251bb023d0" />
