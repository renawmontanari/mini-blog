
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQBX0Hhe9bITpyEqrlWTM74tTSBF9ZOls",
  authDomain: "miniblog-710f1.firebaseapp.com",
  projectId: "miniblog-710f1",
  storageBucket: "miniblog-710f1.appspot.com",
  messagingSenderId: "340516867234",
  appId: "1:340516867234:web:41c08f58a3c9aea88b5bfb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };