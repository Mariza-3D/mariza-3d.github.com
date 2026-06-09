import { Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { contactLinks, pricingPlans } from '../siteData';

const toneClasses: Record<string, string> = {
  neutral: 'border-white/15 bg-white/[0.07] text-[#d8deea]',
  teal: 'border-[#60e6d2]/35 bg-[#60e6d2]/[0.10] text-[#dffff9]',
  orange: 'border-[#f8c85f]/40 bg-[#f8c85f]/[0.10] text-[#fff1bd]',
};

const buttonClasses: Record<string, string> = {
  neutral: 'border-white/15 bg-white/[0.07] text-[#fff8ed] hover:bg-white/[0.11]',
  teal: 'bg-[#60e6d2] text-[#081016] hover:bg-[#9afff1]',
  orange: 'bg-[#f8c85f] text-[#11131a] hover:bg-[#ffe08a]',
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 text-center">
          <p className="section-kicker justify-center">Баалар</p>
          <h2 className="section-title mx-auto mt-3">Өзүңө ылайыктуу форматты танда</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#c4ccd8]">
            Үч формат: өз алдынча онлайн, кайтарым байланыш менен онлайн жана оффлайн premium окуу.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const isPremium = plan.tone === 'orange';
            return (
              <motion.article
                key={plan.name}
                initial={{ y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ delay: index * 0.07 }}
                className={`relative flex min-h-[560px] flex-col rounded-lg border p-6 backdrop-blur-2xl ${
                  isPremium
                    ? 'border-[#f8c85f]/35 bg-gradient-to-b from-[#f8c85f]/16 to-[#111827]/70 shadow-[0_30px_110px_rgba(248,200,95,0.13)] lg:-mt-8'
                    : 'border-white/10 bg-[#111827]/72'
                }`}
              >
                {plan.badge && (
                  <div className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-widest ${toneClasses[plan.tone]}`}>
                    <Sparkles className="h-3.5 w-3.5" />
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-3xl font-black text-[#fff8ed]">{plan.name}</h3>
                <p className="mt-4 min-h-[56px] text-sm leading-7 text-[#c4ccd8]">{plan.description}</p>

                <div className="my-8">
                  <span className="text-5xl font-black text-[#fff8ed]">{plan.price}</span>
                  <span className="ml-2 text-lg font-bold text-[#aeb8c7]">сом</span>
                </div>

                <ul className="mb-8 grid flex-1 gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-base leading-7 text-[#d8deea]">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#60e6d2]/14 text-[#bffbf3]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-14 items-center justify-center rounded-lg px-5 py-4 text-base font-black transition-colors ${buttonClasses[plan.tone]}`}
                >
                  Тандоо
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
