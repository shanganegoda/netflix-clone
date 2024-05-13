import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCx5XDYTJplXujdzFV6G9zfM_7_sZbwaz8",
  authDomain: "netflix-clone-sg-5e865.firebaseapp.com",
  projectId: "netflix-clone-sg-5e865",
  storageBucket: "netflix-clone-sg-5e865.appspot.com",
  messagingSenderId: "593419726858",
  appId: "1:593419726858:web:95d2632681d62b3943aff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider : "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = async () => {
    try {
        signOut(auth)
    } catch (error) {
        console.log(error)
    }
}

export {auth, db, login, signUp , logout};