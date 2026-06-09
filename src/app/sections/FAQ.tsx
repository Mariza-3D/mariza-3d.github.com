import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { ReactNode } from 'react';

const faqData: { question: string; answer: ReactNode }[] = [
  {
    question: 'Мен башталгычмын, курс мага туура келеби?',
    answer: 'Ооба! Курс нөлдөн башталат. Эч кандай алдын ала билим талап кылынбайт.',
  },
  {
    question: '3D үчүн компьютердик талаптар (2026)',
    answer: (
      <div className="space-y-4">
        <p>3D анимация жана видео монтаж үчүн төмөнкү системалык талаптар:</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/15">
                <th className="px-4 py-3 text-left font-black text-[#bffbf3]">Компонент</th>
                <th className="px-4 py-3 text-left font-black text-[#fff1bd]">Минималдуу</th>
                <th className="px-4 py-3 text-left font-black text-emerald-200">Жакшы/Орто</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-semibold text-[#fff8ed]">Процессор (CPU)</td>
                <td className="px-4 py-3 text-[#c4ccd8]">Intel i5 же Ryzen 5 (6 өзөк)</td>
                <td className="px-4 py-3 text-[#d8deea]">Intel i7 / i9 же Ryzen 7 / 9 (8-16 өзөк)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-[#fff8ed]">Видеокарта (GPU)</td>
                <td className="px-4 py-3 text-[#c4ccd8]">NVIDIA RTX 3050 (4GB VRAM)</td>
                <td className="px-4 py-3 text-[#d8deea]">NVIDIA RTX 4070 / 5070 (12GB+ VRAM)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-[#fff8ed]">Ыкчам эс (RAM)</td>
                <td className="px-4 py-3 text-[#c4ccd8]">16 GB</td>
                <td className="px-4 py-3 text-[#d8deea]">32 GB же 64 GB</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-[#fff8ed]">Диск (SSD)</td>
                <td className="px-4 py-3 text-[#c4ccd8]">512 GB NVMe SSD</td>
                <td className="px-4 py-3 text-[#d8deea]">1 TB же 2 TB NVMe M.2 SSD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    question: 'Сабактар качан өтөт?',
    answer: 'Онлайн форматта өзүңүздүн ыңгайлуу убактыңызда окуйсуз. Оффлайн үчүн жумасына 3 жолу, кечки 18:00-20:00.',
  },
  {
    question: 'Сертификат береби?',
    answer: 'Курсту аяктагандан кийин расмий сертификат жана портфолио долбоорлору менен чыгасыз.',
  },
];

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-12 text-center">
          <p className="section-kicker justify-center">FAQ</p>
          <h2 className="section-title mx-auto mt-3">Көп берилүүчү суроолор</h2>
        </div>

        <div className="grid gap-4">
          {faqData.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#111827]/72 backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-black text-[#fff8ed] transition-colors hover:bg-white/[0.045] sm:px-6"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[#bffbf3]">
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0 }} className="overflow-hidden">
                  <div className="border-t border-white/10 px-5 pb-6 pt-5 text-base leading-7 text-[#d8deea] sm:px-6">{faq.answer}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
