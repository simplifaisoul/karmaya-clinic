import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, FileText, ArrowRightLeft, LogOut, Save, Plus, X } from 'lucide-react';

const Dashboard = () => {
    const { user, profile, logout, refreshProfile, loading } = useAuth();
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState('');

    // Form state
    const [displayName, setDisplayName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [servicesOffered, setServicesOffered] = useState<string[]>([]);
    const [servicesNeeded, setServicesNeeded] = useState<string[]>([]);
    const [newOffered, setNewOffered] = useState('');
    const [newNeeded, setNewNeeded] = useState('');

    useEffect(() => {
        if (!loading && !user) navigate('/signin');
    }, [user, loading, navigate]);

    useEffect(() => {
        if (profile) {
            setDisplayName(profile.displayName || '');
            setPhone(profile.phone || '');
            setLocation(profile.location || '');
            setBio(profile.bio || '');
            setServicesOffered(profile.servicesOffered || []);
            setServicesNeeded(profile.servicesNeeded || []);
        }
    }, [profile]);

    const handleSave = async () => {
        if (!user) return;
        setSaving(true);
        try {
            await updateDoc(doc(db, 'users', user.uid), {
                displayName, phone, location, bio, servicesOffered, servicesNeeded,
            });
            await refreshProfile();
            setEditing(false);
            setSuccess('Profile updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error(err);
        }
        setSaving(false);
    };

    const addService = (type: 'offered' | 'needed') => {
        if (type === 'offered' && newOffered.trim()) {
            setServicesOffered([...servicesOffered, newOffered.trim()]);
            setNewOffered('');
        } else if (type === 'needed' && newNeeded.trim()) {
            setServicesNeeded([...servicesNeeded, newNeeded.trim()]);
            setNewNeeded('');
        }
    };

    const removeService = (type: 'offered' | 'needed', index: number) => {
        if (type === 'offered') setServicesOffered(servicesOffered.filter((_, i) => i !== index));
        else setServicesNeeded(servicesNeeded.filter((_, i) => i !== index));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="w-8 h-8 border-3 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!user || !profile) return null;

    return (
        <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                                {profile.photoURL ? (
                                    <img src={profile.photoURL} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    profile.displayName?.charAt(0)?.toUpperCase() || 'U'
                                )}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-neutral-900">{profile.displayName || 'Member'}</h1>
                                <p className="text-sm text-neutral-500">{profile.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {!editing ? (
                                <button onClick={() => setEditing(true)} className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                                    Edit Profile
                                </button>
                            ) : (
                                <button onClick={handleSave} disabled={saving} className="px-5 py-2 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50">
                                    <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
                                </button>
                            )}
                            <button onClick={async () => { await logout(); navigate('/'); }} className="px-5 py-2 bg-neutral-200 text-neutral-700 rounded-xl font-semibold text-sm hover:bg-neutral-300 transition-colors flex items-center gap-2">
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </div>
                    </div>

                    {success && (
                        <div className="mb-6 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-medium">
                            ✅ {success}
                        </div>
                    )}

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-6 mb-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold mb-1">Exchange Center</h2>
                                <p className="text-sm text-white/80">Post services, browse offers, and connect with community members</p>
                            </div>
                            <Link to="/exchange" className="px-5 py-2.5 bg-white text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2 whitespace-nowrap">
                                <ArrowRightLeft className="w-4 h-4" /> Go to Exchange
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Profile Info */}
                        <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                            <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-500" /> Profile Info
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider">Name</label>
                                    {editing ? (
                                        <input value={displayName} onChange={e => setDisplayName(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.displayName || '—'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><Mail className="w-3 h-3" /> Email</label>
                                    <p className="text-neutral-900 text-sm">{profile.email}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</label>
                                    {editing ? (
                                        <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your phone number" />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.phone || '—'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</label>
                                    {editing ? (
                                        <input value={location} onChange={e => setLocation(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="City, Province" />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.location || '—'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><FileText className="w-3 h-3" /> Bio</label>
                                    {editing ? (
                                        <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Tell us about yourself..." />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.bio || '—'}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            {/* Services Offered */}
                            <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                                <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-xs font-bold">+</span>
                                    Services I Can Offer
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {servicesOffered.map((s, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                                            {s}
                                            {editing && <button onClick={() => removeService('offered', i)}><X className="w-3 h-3" /></button>}
                                        </span>
                                    ))}
                                    {servicesOffered.length === 0 && <span className="text-sm text-neutral-400">No services listed yet</span>}
                                </div>
                                {editing && (
                                    <div className="flex gap-2">
                                        <input value={newOffered} onChange={e => setNewOffered(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addService('offered'))} className="flex-1 px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="e.g., Carpentry, Teaching..." />
                                        <button onClick={() => addService('offered')} className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors"><Plus className="w-4 h-4" /></button>
                                    </div>
                                )}
                            </div>

                            {/* Services Needed */}
                            <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                                <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xs font-bold">?</span>
                                    Services I Need
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {servicesNeeded.map((s, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                                            {s}
                                            {editing && <button onClick={() => removeService('needed', i)}><X className="w-3 h-3" /></button>}
                                        </span>
                                    ))}
                                    {servicesNeeded.length === 0 && <span className="text-sm text-neutral-400">No services listed yet</span>}
                                </div>
                                {editing && (
                                    <div className="flex gap-2">
                                        <input value={newNeeded} onChange={e => setNewNeeded(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addService('needed'))} className="flex-1 px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g., Medical, Dental..." />
                                        <button onClick={() => addService('needed')} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"><Plus className="w-4 h-4" /></button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
