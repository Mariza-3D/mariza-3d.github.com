import { motion } from 'motion/react';

// Import Social Icons
import instagramIcon from '../../assets/icons/instagram.png';
import telegramIcon from '../../assets/icons/telegram.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

const Footer = () => {
    const socialLinks = [
        { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/mariza_online3d/' },
        { name: 'Telegram', icon: telegramIcon, url: 'https://t.me/+996508128008' },
        { name: 'WhatsApp', icon: whatsappIcon, url: 'https://wa.me/996508128008' },
    ];

    return (
        <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                        3D Анимация Курсу
                    </h3>
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    {socialLinks.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all p-3 group"
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md"
                            />
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-teal-400 transition-colors">Биз жөнүндө</a>
                    <a href="#" className="hover:text-teal-400 transition-colors">Байланыш</a>
                    <a href="#" className="hover:text-teal-400 transition-colors">Шарттар</a>
                    <a href="#" className="hover:text-teal-400 transition-colors">Купуялуулук</a>
                </div>

                <p className="text-center text-sm text-gray-500">
                    © 2025 Mariza 3D Animation Course. Бардык укуктар корголгон. • v0.0.2
                </p>
            </div>
        </footer>
    );
};

export default Footer;
