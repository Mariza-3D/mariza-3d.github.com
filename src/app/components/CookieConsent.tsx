import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setTimeout(() => setShowBanner(true), 2000); // Show after 2s
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
                >
                    <div className="max-w-6xl mx-auto glass border border-white/20 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-start gap-4">
                            <Cookie className="w-6 h-6 text-teal-400 flex-shrink-0" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-white mb-2">
                                    Биз cookie колдонобуз
                                </h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Биздин веб-сайт колдонуучу тажрыйбасын жакшыртуу жана аналитика үчүн cookie колдонот. Сайтты колдонууну улантуу менен, сиз cookie колдонууга макулдугуңузду бересиз.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={acceptCookies}
                                        className="px-6 py-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg font-medium hover:shadow-lg transition-all"
                                    >
                                        Макул
                                    </button>
                                    <button
                                        onClick={declineCookies}
                                        className="px-6 py-2 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all"
                                    >
                                        Жок
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={declineCookies}
                                className="p-2 hover:bg-white/10 rounded-lg transition-all"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
