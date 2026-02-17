import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            return;
        }

        // Simulate API call (replace with actual implementation)
        console.log('Newsletter signup:', email);
        setStatus('success');
        setEmail('');

        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="glass border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-teal-400" />
                <h3 className="text-xl font-bold">Жаңылыктарга жазылыңыз</h3>
            </div>
            <p className="text-gray-400 mb-6">
                Жаңы курстар жана акциялар жөнүндө биринчи болуп билиңиз
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-400 transition-all"
                />
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                >
                    <span className="hidden sm:inline">Жазылуу</span>
                    <ArrowRight className="w-5 h-5" />
                </motion.button>
            </form>

            {status === 'success' && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-green-400 text-sm"
                >
                    ✓ Ийгиликтүү жазылдыңыз!
                </motion.p>
            )}
            {status === 'error' && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-red-400 text-sm"
                >
                    Туура email дарегин киргизиңиз
                </motion.p>
            )}
        </div>
    );
};

export default Newsletter;
