import { Award, MessageCircle, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { contactLinks } from '../siteData';

const trustItems = [
  { icon: Shield, text: 'Коопсуз төлөм' },
  { icon: Users, text: '500+ студент' },
  { icon: Award, text: 'Сертификат' },
  { icon: MessageCircle, text: '24/7 колдоо' },
];

const FinalCTA = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden rounded-lg border border-white/10 bg-[#101722] p-7 shadow-[0_34px_130px_rgba(0,0,0,0.36)] sm:p-12 lg:p-16"
        >
          <div className="cta-lines" aria-hidden="true" />
          <div className="relative z-10 text-center">
            <p className="section-kicker justify-center">Старт</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight text-[#fff8ed] sm:text-6xl">
              Азыр эле 3D окууңузду баштагыла
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8deea]">
              Өзүңдүн 3D анимация жана YouTube окууңузду бүгүн баштагыла. Кеңеш алуу үчүн WhatsAppка жаз.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#f8c85f] px-8 py-4 text-base font-black text-[#11131a] transition-colors hover:bg-[#ffe08a]"
              >
                Азыр жазылуу
              </a>
              <a
                href={contactLinks.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-8 py-4 text-base font-black text-[#fff8ed] transition-colors hover:bg-white/[0.1]"
              >
                Консультация
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {trustItems.map((item) => (
                <div key={item.text} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-semibold text-[#d8deea]">
                  <item.icon className="h-4 w-4 text-[#bffbf3]" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
