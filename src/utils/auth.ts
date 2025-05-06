// src/utils/auth.ts
import { auth, db, doc, setDoc, serverTimestamp  } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  User,
  UserCredential,
} from "firebase/auth";

/**
 * Ensure that Firebase Auth uses localPersistence
 * (so the user stays signed in across tabs & reloads).
 */
async function ensurePersistence() {
  await setPersistence(auth, browserLocalPersistence);
}

/**
 * Register a new user with email & password.
 */
export async function registerUser(
  email: string,
  password: string,
  username: string,
  phrase: string
): Promise<UserCredential> {
  await ensurePersistence();

  // 1) create the Auth record
  const userCred = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  // 2) push the username into the Auth user.profile
  await updateProfile(userCred.user, {
    displayName: username,
  });

  // 3) write your Firestore stub as before
  await setDoc(doc(db, "users", userCred.user.uid), {
    username,
    email: userCred.user.email!,
    phrase,
    pushup_count: 0,
    streak: 0,
    max_streak: 0,
    last_clockin: null,
    pfp: "https://i.pravatar.cc/150?img=3",
  });

  return userCred;
}

/**
 * Sign in an existing user with email & password.
 */
export async function loginUser(email: string, password: string): Promise<UserCredential> {
  await ensurePersistence();
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Sign out the current user.
 */
export async function logoutUser(): Promise<void> {
  return signOut(auth);
}

/**
 * Subscribe to auth state changes.
 * Returns an unsubscribe function.
 */
export function onAuthStateChangedListener(
  callback: (user: User | null) => void
): () => void {
  return onAuthStateChanged(auth, callback);
}

/**
 * Helper to get current user once (and then auto-unsubscribe).
 */
export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
}
