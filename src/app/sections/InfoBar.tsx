import { Calendar, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const InfoBar = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { icon: Calendar, label: 'Башталышы', value: '1-март', color: 'from-teal-400 to-cyan-400' },
                        { icon: Clock, label: 'Узактыгы', value: '1,5 ай', color: 'from-purple-400 to-pink-400' },
                        { icon: MessageCircle, label: 'Кайтарым байланыш', value: '3 ай', color: 'from-orange-400 to-red-400' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl -z-10`} />

                            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{item.label}</p>
                                    <p className="font-bold text-xl text-white">{item.value}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoBar;
