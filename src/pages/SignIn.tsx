import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Heart, Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

const SignIn = () => {
    const { signInWithGoogle, signInWithEmail, signUpWithEmail, user } = useAuth();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Redirect if already logged in
    if (user) {
        navigate('/dashboard');
        return null;
    }

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (isSignUp) {
                if (!name.trim()) { setError('Please enter your name'); setLoading(false); return; }
                await signUpWithEmail(email, password, name);
            } else {
                await signInWithEmail(email, password);
            }
            navigate('/dashboard');
        } catch (err: any) {
            const code = err?.code || '';
            if (code === 'auth/user-not-found') setError('No account found with this email');
            else if (code === 'auth/wrong-password') setError('Incorrect password');
            else if (code === 'auth/email-already-in-use') setError('An account with this email already exists');
            else if (code === 'auth/weak-password') setError('Password must be at least 6 characters');
            else if (code === 'auth/invalid-email') setError('Invalid email address');
            else setError('Something went wrong. Please try again.');
        }
        setLoading(false);
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setLoading(true);
        try {
            await signInWithGoogle();
            navigate('/dashboard');
        } catch (err: any) {
            if (err?.code !== 'auth/popup-closed-by-user') {
                setError('Google sign-in failed. Please try again.');
            }
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 pt-20 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2">
                        <Heart className="h-8 w-8 text-blue-600 fill-current" />
                        <span className="font-bold text-2xl text-neutral-900 tracking-tight">
                            Karmaya<span className="text-blue-500">Clinics</span>
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold text-neutral-900 mt-6 mb-2">
                        {isSignUp ? 'Create Your Account' : 'Welcome Back'}
                    </h1>
                    <p className="text-neutral-500 text-sm">
                        {isSignUp
                            ? 'Join the community and start exchanging services'
                            : 'Sign in to access the Exchange Center'
                        }
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
                    {/* Google Sign-In */}
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-neutral-200 rounded-xl font-semibold text-sm text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-50"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-neutral-200" />
                        <span className="text-xs text-neutral-400 font-medium">OR</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>

                    {/* Email Form */}
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                        {isSignUp && (
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm"
                                        placeholder="Your full name"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={6}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm"
                                    placeholder="At least 6 characters"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    {isSignUp ? 'Create Account' : 'Sign In'}
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Toggle */}
                    <p className="text-center text-sm text-neutral-500 mt-6">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button
                            onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            {isSignUp ? 'Sign In' : 'Create One'}
                        </button>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SignIn;
