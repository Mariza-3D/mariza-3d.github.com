import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const Testimonials = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent"
                >
                    Студенттердин пикири
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: 'Айжан К.',
                            role: 'YouTube автор',
                            text: 'Бир айда эле YouTube каналымды ачып, биринчи видеону жарыялап койдум. Окутуучу абдан түшүнүктүү айтат!',
                            rating: 5,
                            avatar: 'https://images.unsplash.com/photo-1656769539033-b811e27691ee?w=100'
                        },
                        {
                            name: 'Бекжан Т.',
                            role: '3D Artist',
                            text: 'Иштеген программалар тууралуу толук билим алдым. Азыр фрилансерде иштейм.',
                            rating: 5,
                            avatar: 'https://images.unsplash.com/photo-1589442694956-9eaf242dd1fe?w=100'
                        },
                        {
                            name: 'Нуржан А.',
                            role: 'Студент',
                            text: 'Нөлдөн башталып, 6 жумада профессионал деңгээлге жеттим. Укмуштай!',
                            rating: 5,
                            avatar: 'https://images.unsplash.com/photo-1555728750-9c6ad51b968d?w=100'
                        },
                    ].map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-400 rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity" />

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-400/50">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
