import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.inti";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    console.log(user);

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)

            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleSignOut = () => {
        signOut(auth, googleProvider)
            .then(() => {

            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    return {
        handleSignOut,
        user,
        signInWithGoogle
    }
}
export default useFirebase;
