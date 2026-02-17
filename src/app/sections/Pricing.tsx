import { Check, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Pricing = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2026-03-01T00:00:00');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
                setIsExpired(false);
            } else {
                setTimeLeft({ days: 0, hours: 0, mins: 0, seconds: 0 });
                setIsExpired(true);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent">
                        Баа
                    </h2>
                    <p className="text-xl text-gray-400 mb-6">Өзүңө ылайыктуу варианттты тандагыла</p>

                    {/* Countdown Timer */}
                    {!isExpired && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 rounded-2xl px-4 sm:px-6 py-3 max-w-full"
                        >
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                                <span className="text-white font-semibold text-sm sm:text-base text-center">1-мартка чейин арзандатуу:</span>
                            </div>
                            <div className="flex gap-1.5 sm:gap-2 font-mono font-bold text-sm sm:text-base">
                                <span className="bg-orange-500/30 px-2 py-1 rounded min-w-[45px] text-center">{timeLeft.days}д</span>
                                <span className="bg-orange-500/30 px-2 py-1 rounded min-w-[40px] text-center">{timeLeft.hours}с</span>
                                <span className="bg-orange-500/30 px-2 py-1 rounded min-w-[40px] text-center">{timeLeft.mins}м</span>
                                <span className="bg-orange-500/30 px-2 py-1 rounded min-w-[50px] text-center">{timeLeft.seconds}сек</span>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Online - Basic */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0 }}
                        whileHover={{ y: -10 }}
                        className="relative order-3 lg:order-1"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#5B4A9D] to-[#4a3d7e] rounded-[2.5rem] blur-lg opacity-30" />

                        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 h-full flex flex-col">
                            <h3 className="text-3xl font-bold text-white mb-2">Онлайн</h3>
                            <div className="mb-8">
                                <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">10 000</span>
                                <span className="text-xl text-gray-400 ml-2">сом</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    'Видео сабактар',
                                    'Өз темпиңде окуу',
                                    'Иштик материалдар',
                                    'Чектелбеген мөөнөт',
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#5B4A9D] flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                            >
                                Тандоо
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Premium - 40k (BEST CHOICE) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -15, scale: 1.03 }}
                        className="relative lg:-mt-8 order-1 lg:order-2"
                    >
                        {/* Premium badge */}
                        <motion.div
                            className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
                            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <div className="bg-gradient-to-r from-[#FF6B35] via-[#FF0000] to-[#FF6B35] text-white px-8 py-3 rounded-full font-bold text-base shadow-2xl flex items-center gap-2 border-2 border-white/30">
                                <Sparkles className="w-5 h-5 animate-pulse" /> PREMIUM
                            </div>
                        </motion.div>

                        <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B35] via-[#FF0000] to-[#5B4A9D] rounded-[3rem] blur-2xl opacity-60 animate-pulse" />

                        <div className="relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-2xl border-4 border-[#FF6B35]/60 rounded-[3rem] p-10 h-full flex flex-col shadow-2xl">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF0000] bg-clip-text text-transparent mb-3">Premium Оффлайн</h3>
                            <div className="mb-8">
                                <span className="text-6xl font-bold bg-gradient-to-r from-[#FF6B35] via-[#FF0000] to-[#FF6B35] bg-clip-text text-transparent">40 000</span>
                                <span className="text-2xl text-gray-300 ml-2">сом</span>
                                <div className="text-sm font-semibold text-[#FF6B35] mt-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4" /> Эң мыкты тандоо!
                                </div>
                            </div>

                            <ul className="space-y-5 mb-10 flex-1">
                                {[
                                    'Класста VIP сабак',
                                    'Тура аралашуу окутуучу менен',
                                    'Жеке консультациялар',
                                    'Бардык материалдар + Bonus',
                                    '6 ай жеке колдоо',
                                    'Сертификат жана портфолио',
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF0000] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-white font-semibold">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(255, 107, 53, 0.8)' }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF6B35] via-[#FF0000] to-[#FF6B35] text-white font-bold text-lg shadow-2xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">Азыр эле жазылуу!</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Online + Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="relative order-2 lg:order-3"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-[2.5rem] blur-lg opacity-30" />

                        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 h-full flex flex-col">
                            <h3 className="text-3xl font-bold text-white mb-2">Онлайн + Колдоо</h3>
                            <div className="mb-8">
                                <span className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">20 000</span>
                                <span className="text-xl text-gray-400 ml-2">сом</span>
                                <div className="text-sm text-teal-400 mt-1">Орундар чектелүү: 12 калды</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    'Онлайн сабактар',
                                    'Видео жазуулар',
                                    'Telegram колдоо',
                                    'Иштик материалдар',
                                    '3 ай колдоо',
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-900 font-semibold hover:shadow-lg transition-all"
                            >
                                Тандоо
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
