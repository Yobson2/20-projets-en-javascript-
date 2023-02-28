// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB03HwpAecBNy00fb1mcl6TNx9b6SPZsNA",
  authDomain: "systeme-authentification-1c3d7.firebaseapp.com",
  projectId: "systeme-authentification-1c3d7",
  storageBucket: "systeme-authentification-1c3d7.appspot.com",
  messagingSenderId: "372245260441",
  appId: "1:372245260441:web:16e738e87ce0ae4b9cb008",
  measurementId: "G-FH27PXEJ5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)
const auth=getAuth(app);