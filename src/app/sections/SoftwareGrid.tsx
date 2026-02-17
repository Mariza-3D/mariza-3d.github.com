import { motion } from 'motion/react';

// Import Icons
import blenderIcon from '../../assets/icons/blender.png';
import icloneIcon from '../../assets/icons/Iclone-8.png';
import afterEffectsIcon from '../../assets/icons/after-effects.png';
import photoshopIcon from '../../assets/icons/photoshop.png';
import substanceIcon from '../../assets/icons/substanse.png';
import davinciIcon from '../../assets/icons/DaVinci.png';

const SoftwareGrid = () => {
    return (
        <section id="software" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent"
                >
                    Программалар менен иштөө
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {[
                        { name: 'Blender', desc: '3D моделдөө', bgColor: 'from-[#EA7600] to-[#FF9500]', image: blenderIcon },
                        { name: 'iClone 8', desc: 'Анимация', bgColor: 'from-[#00A8E1] to-[#00D4FF]', image: icloneIcon },
                        { name: 'After Effects', desc: 'Видео монтаж', bgColor: 'from-[#9999FF] to-[#6666CC]', image: afterEffectsIcon },
                        { name: 'Photoshop', desc: 'Текстура', bgColor: 'from-[#001E36] to-[#31A8FF]', image: photoshopIcon },
                        { name: 'Substance', desc: 'Материал', bgColor: 'from-[#F16830] to-[#FF8C3A]', image: substanceIcon },
                        { name: 'DaVinci', desc: 'Түзөтүү', bgColor: 'from-[#DE3B3B] to-[#FF5555]', image: davinciIcon },
                    ].map((software, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${software.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity -z-10`} />

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer h-full flex flex-col items-center justify-center">
                                {/* Standardized Icon Container */}
                                <div className={`w-20 h-20 ${software.name === 'Blender' ? 'bg-white' : 'bg-[#1A1F2E]'} border border-white/5 rounded-2xl mb-4 flex items-center justify-center shadow-inner p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                                    {/* Subtle gradient overlay based on brand color */}
                                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${software.bgColor}`} />

                                    {/* Support for Images (Logos) */}
                                    <img
                                        src={software.image}
                                        alt={software.name}
                                        className="w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-10"
                                    />
                                </div>
                                <h3 className="font-bold text-white mb-1">{software.name}</h3>
                                <p className="text-xs text-gray-400">{software.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftwareGrid;
