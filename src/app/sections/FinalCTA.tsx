import { Award, MessageCircle, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

const FinalCTA = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="max-w-[1000px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 rounded-[3rem] blur-2xl opacity-40" />

                    <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-12 sm:p-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent"
                        >
                            Азыр эле баштагыла!
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            Өзүңдүн 3D анимация жана YouTube окууңузду бүгүн баштагыла. Биринчи 50 студентке 20% арзандатуу!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(45, 212, 191, 0.6)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 rounded-3xl bg-gradient-to-r from-teal-400 to-purple-400 text-gray-900 font-bold text-xl shadow-2xl"
                            >
                                Азыр жазылуу
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 rounded-3xl border-2 border-white/30 text-white font-semibold text-xl hover:bg-white/10 transition-all"
                            >
                                Консультация
                            </motion.button>
                        </motion.div>

                        {/* Trust elements */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                            {[
                                { icon: Shield, text: 'Коопсуз төлөм' },
                                { icon: Users, text: '500+ студент' },
                                { icon: Award, text: 'Сертификат' },
                                { icon: MessageCircle, text: '24/7 колдоо' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <item.icon className="w-5 h-5 text-teal-400" />
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
