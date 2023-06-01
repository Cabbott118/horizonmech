// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCby3G-qXHgJSVIqK2u9CqSK6XMVwM1bgw',
  authDomain: 'horizon-mech.firebaseapp.com',
  projectId: 'horizon-mech',
  storageBucket: 'horizon-mech.appspot.com',
  messagingSenderId: '988665589986',
  appId: '1:988665589986:web:bf8895b70a011fd9e66ebb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
