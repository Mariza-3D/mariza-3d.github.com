import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const FAQ = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const faqData = [
        {
            question: "Мен башталгычмын, курс мага туура келеби?",
            answer: "Ооба! Курс нөлдөн башталат. Эч кандай алдын ала билим талап кылынбайт."
        },
        {
            question: "3D үчүн компьютердик талаптар (2026)",
            answer: (
                <div className="space-y-3">
                    <p className="text-gray-300">3D анимация жана видео монтаж үчүн төмөнкү системалык талаптар:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left py-3 px-4 font-semibold text-teal-400">Компонент</th>
                                    <th className="text-left py-3 px-4 font-semibold text-yellow-400">Минималдуу (Minimal)</th>
                                    <th className="text-left py-3 px-4 font-semibold text-green-400">Жакшы/Орто (Recommended)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                <tr>
                                    <td className="py-3 px-4 font-medium text-gray-300">Процессор (CPU)</td>
                                    <td className="py-3 px-4 text-gray-400">Intel i5 же Ryzen 5 (6 өзөк)</td>
                                    <td className="py-3 px-4 text-gray-300">Intel i7 / i9 же Ryzen 7 / 9 (8-16 өзөк)</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium text-gray-300">Видеокарта (GPU)</td>
                                    <td className="py-3 px-4 text-gray-400">NVIDIA RTX 3050 (4GB VRAM)</td>
                                    <td className="py-3 px-4 text-gray-300">NVIDIA RTX 4070 / 5070 (12GB+ VRAM)</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium text-gray-300">Ыкчам эс (RAM)</td>
                                    <td className="py-3 px-4 text-gray-400">16 GB</td>
                                    <td className="py-3 px-4 text-gray-300">32 GB же 64 GB</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium text-gray-300">Диск (SSD)</td>
                                    <td className="py-3 px-4 text-gray-400">512 GB NVMe SSD</td>
                                    <td className="py-3 px-4 text-gray-300">1 TB же 2 TB NVMe M.2 SSD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            question: "Сабактар качан өтөт?",
            answer: "Онлайн форматта өзүңүздүн ыңгайлуу убактыңызда окуйсуз. Оффлайн үчүн жумасына 3 жолу, кечки 18:00-20:00."
        },
        {
            question: "Сертификат береби?",
            answer: "Курсту аяктагандан кийин расмий сертификат жана портфолио долбоорлору менен чыгасыз."
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent"
                >
                    Көп берилүүчү суроолор
                </motion.h2>

                <div className="space-y-4">
                    {faqData.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.05 }}
                            className="relative"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r from-teal-400/30 to-purple-400/30 rounded-2xl blur transition-opacity ${expandedFaq === i ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                                >
                                    <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-teal-400 flex-shrink-0" />
                                    </motion.div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: expandedFaq === i ? 'auto' : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                                        {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
