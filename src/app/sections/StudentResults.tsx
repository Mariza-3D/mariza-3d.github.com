import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const StudentResults = () => {
    return (
        <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6"
                >
                    <span className="bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent">
                        Студенттердин жыйынтыктары
                    </span>
                </motion.h2>
                <p className="text-center text-gray-400 mb-16 text-lg">1-айдан кийин</p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Before */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/50 to-orange-500/50 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden">
                            <div className="absolute top-4 left-4 px-4 py-1 bg-red-500/90 rounded-full text-xs font-bold">Мурунку</div>
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 flex items-center justify-center">
                                <img src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" alt="Before" className="w-full h-full object-cover rounded-2xl opacity-60" />
                            </div>
                            <p className="text-gray-400 text-sm">Башталыш деңгээл</p>
                        </div>
                    </motion.div>

                    {/* After */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden">
                            <div className="absolute top-4 left-4 px-4 py-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full text-xs font-bold text-gray-900">Кийинки</div>
                            <div className="aspect-video bg-gradient-to-br from-teal-900 to-purple-900 rounded-2xl mb-4 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" alt="After" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-white font-semibold text-sm flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-teal-400" /> Профессионалдык деңгээл
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StudentResults;
