
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyD9W6WVxVG6GrxRuQ0ymsVvLkGMDxWWQV8",
    authDomain: "gym-freak-143c4.firebaseapp.com",
    projectId: "gym-freak-143c4",
    storageBucket: "gym-freak-143c4.appspot.com",
    messagingSenderId: "273314972883",
    appId: "1:273314972883:web:25f18e8bb532e0ac580026",
    measurementId: "G-LF9QPWPP56"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
