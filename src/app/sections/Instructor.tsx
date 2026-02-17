import { Award, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

const Instructor = () => {
    return (
        <section id="instructor" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 rounded-[3rem] blur-2xl opacity-30" />

                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-8 sm:p-12 overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Instructor Image */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                                className="relative"
                                style={{ perspective: 1000 }}
                            >
                                <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-teal-400/30 shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1589442694956-9eaf242dd1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                                        alt="Instructor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.div
                                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-purple-400 rounded-3xl flex items-center justify-center shadow-2xl"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Award className="w-12 h-12 text-white" />
                                </motion.div>
                            </motion.div>

                            {/* Instructor Info */}
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                                    Мариза Мырзабаева
                                </h2>
                                <p className="text-teal-400 text-xl mb-6">3D Моделлөөчү & Анимация эксперти</p>

                                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                    2020-жылдан бери 3D моделлөө менен алектенүүдө, 5+ жылдык тажрыйба. 300+ студентти окутуп, алардын көпчүлүгү азыр фриланс жана YouTube боюнча ийгиликтүү иштешет. Blender, iClone 8 жана After Effects боюнча сертификатталган тренер.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6">
                                    {[
                                        { icon: Award, value: '5+', label: 'Жыл тажрыйба' },
                                        { icon: Users, value: '300+', label: 'Студент' },
                                        { icon: TrendingUp, value: '92%', label: 'Ийгилик' },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="text-center"
                                        >
                                            <div className="w-14 h-14 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-2xl mx-auto mb-2 flex items-center justify-center border border-teal-400/30">
                                                <stat.icon className="w-7 h-7 text-teal-400" />
                                            </div>
                                            <motion.p
                                                className="text-2xl font-bold text-white mb-1"
                                                initial={{ scale: 1 }}
                                                whileInView={{ scale: [1, 1.2, 1] }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 + 0.5 }}
                                            >
                                                {stat.value}
                                            </motion.p>
                                            <p className="text-xs text-gray-400">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Instructor;
