import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from 'firebase/auth';
import {
    onAuthStateChanged,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

interface UserProfile {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    phone: string;
    location: string;
    bio: string;
    servicesOffered: string[];
    servicesNeeded: string[];
    createdAt: any;
}

interface AuthContextType {
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<void>;
    signUpWithEmail: (email: string, password: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

// Create or update user profile in Firestore
const ensureUserProfile = async (user: User): Promise<UserProfile> => {
    const ref = doc(db, 'users', user.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
        return snap.data() as UserProfile;
    }

    const newProfile: UserProfile = {
        uid: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        phone: '',
        location: '',
        bio: '',
        servicesOffered: [],
        servicesNeeded: [],
        createdAt: serverTimestamp(),
    };

    await setDoc(ref, newProfile);
    return newProfile;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for redirect result on page load (from signInWithRedirect)
        getRedirectResult(auth).then(async (result) => {
            if (result?.user) {
                await ensureUserProfile(result.user);
            }
        }).catch((err) => {
            console.error('Redirect sign-in error:', err);
        });

        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                try {
                    const userProfile = await ensureUserProfile(firebaseUser);
                    setProfile(userProfile);
                } catch (err) {
                    console.error('Error loading profile:', err);
                }
            } else {
                setProfile(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const refreshProfile = async () => {
        if (!user) return;
        const ref = doc(db, 'users', user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setProfile(snap.data() as UserProfile);
    };

    const signInWithGoogle = async () => {
        try {
            // Try popup first
            const result = await signInWithPopup(auth, googleProvider);
            await ensureUserProfile(result.user);
        } catch (err: any) {
            // If popup is blocked or fails, fall back to redirect
            if (
                err?.code === 'auth/popup-blocked' ||
                err?.code === 'auth/popup-closed-by-user' ||
                err?.code === 'auth/cancelled-popup-request'
            ) {
                // For popup-closed, just re-throw so SignIn page ignores it
                if (err?.code === 'auth/popup-closed-by-user') throw err;
                await signInWithRedirect(auth, googleProvider);
            } else {
                throw err;
            }
        }
    };

    const signInWithEmail = async (email: string, password: string) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        await ensureUserProfile(result.user);
    };

    const signUpWithEmail = async (email: string, password: string, name: string) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: name });
        await ensureUserProfile(result.user);
    };

    const logout = async () => {
        await signOut(auth);
        setProfile(null);
    };

    return (
        <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, signInWithEmail, signUpWithEmail, logout, refreshProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
