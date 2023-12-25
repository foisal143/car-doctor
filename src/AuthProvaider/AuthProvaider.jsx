import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import app from '../firebase/firebase';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvaider = new GoogleAuthProvider();

  const googlesignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setUser(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authIno = {
    user,
    googlesignIn,
    loading,
    createUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authIno}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
