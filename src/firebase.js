import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZWYZxSqiw8gjIx1JhN-Wr0kZjX3lb9HM",
    authDomain: "netflix-build-yt-175cd.firebaseapp.com",
    projectId: "netflix-build-yt-175cd",
    storageBucket: "netflix-build-yt-175cd.appspot.com",
    messagingSenderId: "7951023223",
    appId: "1:7951023223:web:a3ff8cc703af736e619a72"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;