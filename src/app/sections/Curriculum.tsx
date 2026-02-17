import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const Curriculum = () => {
    return (
        <section id="curriculum" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent"
                >
                    Окуу программасы
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        {
                            number: '01',
                            title: 'Программа орнотуу жана интерфейс',
                            desc: 'Blender, iClone жана башка программаларды орнотуу, негизги билимдер',
                            color: 'from-teal-400 to-cyan-400'
                        },
                        {
                            number: '02',
                            title: 'Персонаждар менен иштөө',
                            desc: '3D каармандарды түзүү, текстуралоо жана жандандыруу',
                            color: 'from-purple-400 to-pink-400'
                        },
                        {
                            number: '03',
                            title: 'Анимация техникасы',
                            desc: 'Кыймыл, жүз анимациясы жана табигый жүрүш-туруш',
                            color: 'from-orange-400 to-red-400'
                        },
                        {
                            number: '04',
                            title: 'Видео монтаж',
                            desc: 'After Effects жана DaVinci Resolve менен финалдык жыйынтык',
                            color: 'from-blue-400 to-indigo-400'
                        },
                        {
                            number: '05',
                            title: 'YouTube оптимизациясы',
                            desc: 'Түрткү сүрөт, баш ат жана SEO негиздери',
                            color: 'from-green-400 to-emerald-400'
                        },
                        {
                            number: '06',
                            title: 'Монетизация',
                            desc: 'YouTube дан акча табуу стратегиялары жана канал өстүрүү',
                            color: 'from-yellow-400 to-orange-400'
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="relative group"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity`} />

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg flex-shrink-0`}>
                                        {item.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors hidden sm:block" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
