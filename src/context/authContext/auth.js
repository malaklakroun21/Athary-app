import { createUser } from "@dataconnect/generated";
import { auth } from "../../main";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup} from "firebase/auth";


// function to register
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("error while registering :", error.message);
    throw error;
  }
};

// Fonction to login
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error while logging in :", error.message);
    throw error;
  }
};

// connecting with google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error) {
    console.error("Error while signing in with Google:", error.message);
    throw error;
  }
};

//  logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error while logging out:", error.message);
    throw error;
  }
};

/// save auth changes
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};