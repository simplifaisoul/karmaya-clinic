import { useState, useRef } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { X, Plus, Image, Loader2 } from 'lucide-react';

const CATEGORIES = [
    'Healthcare', 'Construction', 'Teaching', 'Agriculture', 'Cooking',
    'Transportation', 'Technology', 'Childcare', 'Arts & Crafts', 'Community'
];

interface PostServiceFormProps {
    onClose: () => void;
    onPosted: () => void;
}

const PostServiceForm = ({ onClose, onPosted }: PostServiceFormProps) => {
    const { user, profile } = useAuth();
    const [type, setType] = useState<'offer' | 'request'>('offer');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState(profile?.location || '');
    const [phone, setPhone] = useState(profile?.phone || '');
    const [email] = useState(profile?.email || '');
    const [photos, setPhotos] = useState<File[]>([]);
    const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const fileRef = useRef<HTMLInputElement>(null);

    const handlePhotoAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (photos.length + files.length > 3) {
            setError('Maximum 3 photos allowed');
            return;
        }
        const newPhotos = [...photos, ...files].slice(0, 3);
        setPhotos(newPhotos);
        setPhotoPreviews(newPhotos.map(f => URL.createObjectURL(f)));
        setError('');
    };

    const removePhoto = (index: number) => {
        const next = photos.filter((_, i) => i !== index);
        setPhotos(next);
        setPhotoPreviews(next.map(f => URL.createObjectURL(f)));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !profile) return;
        if (!title.trim() || !description.trim()) {
            setError('Title and description are required');
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            // Upload photos
            const photoUrls: string[] = [];
            for (const photo of photos) {
                const storageRef = ref(storage, `exchange/${user.uid}/${Date.now()}_${photo.name}`);
                const snap = await uploadBytes(storageRef, photo);
                const url = await getDownloadURL(snap.ref);
                photoUrls.push(url);
            }

            // Create post
            await addDoc(collection(db, 'exchangePosts'), {
                userId: user.uid,
                userName: profile.displayName || user.displayName || 'Anonymous',
                userPhoto: profile.photoURL || user.photoURL || '',
                type,
                category,
                title: title.trim(),
                description: description.trim(),
                city: city.trim(),
                phone: phone.trim(),
                email: email.trim(),
                photos: photoUrls,
                status: 'open',
                createdAt: serverTimestamp(),
            });

            onPosted();
            onClose();
        } catch (err: any) {
            console.error('Error creating post:', err);
            setError(err.message || 'Failed to create post');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between p-5 border-b border-neutral-100">
                    <h2 className="text-xl font-bold text-neutral-900">Post a Service</h2>
                    <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                        <X className="w-5 h-5 text-neutral-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    {/* Type Toggle */}
                    <div className="flex gap-2">
                        {(['offer', 'request'] as const).map(t => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setType(t)}
                                className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${type === t
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                    }`}
                            >
                                {t === 'offer' ? '🤲 I Can Offer' : '🔍 I Need'}
                            </button>
                        ))}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Category</label>
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50"
                        >
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="e.g. Carpentry services available"
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Describe what you're offering or what you need..."
                            rows={3}
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50 resize-none"
                            required
                        />
                    </div>

                    {/* Photos */}
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Photos (up to 3)</label>
                        <div className="flex gap-2 flex-wrap">
                            {photoPreviews.map((url, i) => (
                                <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-neutral-200">
                                    <img src={url} alt="" className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => removePhoto(i)}
                                        className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                            {photos.length < 3 && (
                                <button
                                    type="button"
                                    onClick={() => fileRef.current?.click()}
                                    className="w-20 h-20 rounded-lg border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center gap-1 text-neutral-400 hover:border-blue-400 hover:text-blue-500 transition-colors"
                                >
                                    <Image className="w-5 h-5" />
                                    <span className="text-[10px] font-medium">Add</span>
                                </button>
                            )}
                        </div>
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoAdd}
                            className="hidden"
                        />
                    </div>

                    {/* Location & Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                placeholder="Your city"
                                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Phone</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Optional"
                                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-sm text-red-500 font-medium">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {submitting ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Posting...</>
                        ) : (
                            <><Plus className="w-4 h-4" /> Post Service</>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostServiceForm;
