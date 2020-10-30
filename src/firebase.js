import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNTkD-n9J5nwwKmQ69sQvrI7YO4waSVUg",
  authDomain: "whats-app-clone-857e6.firebaseapp.com",
  databaseURL: "https://whats-app-clone-857e6.firebaseio.com",
  projectId: "whats-app-clone-857e6",
  storageBucket: "whats-app-clone-857e6.appspot.com",
  messagingSenderId: "1099499374017",
  appId: "1:1099499374017:web:b5e3c5951743953007db40",
  measurementId: "G-9D36CNB1BS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;