import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCcY1_R6fuf-8iXKOFMSWzsdVxxHFiynSU",
    authDomain: "whats-app-clone-468b9.firebaseapp.com",
    projectId: "whats-app-clone-468b9",
    storageBucket: "whats-app-clone-468b9.appspot.com",
    messagingSenderId: "629328675215",
    appId: "1:629328675215:web:e2489c7a7bac8f82ac4bfa",
    measurementId: "G-7MWC8GHXXW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;