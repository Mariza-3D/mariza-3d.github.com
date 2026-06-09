import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { curriculumItems } from '../siteData';

const Curriculum = () => {
  return (
    <section id="curriculum" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <p className="section-kicker justify-center">Окуу жолу</p>
          <h2 className="section-title mx-auto mt-3 max-w-3xl">Окуу программасы</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#60e6d2] via-white/15 to-[#f8c85f]/80 sm:block" />
          <div className="grid gap-4">
            {curriculumItems.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ delay: index * 0.045 }}
                className="group relative grid gap-4 rounded-lg border border-white/10 bg-[#111827]/72 p-5 backdrop-blur-xl sm:grid-cols-[72px_1fr_auto] sm:items-center sm:p-6"
              >
                <div className="grid h-14 w-14 place-items-center rounded-lg border border-[#60e6d2]/30 bg-[#60e6d2]/12 text-lg font-black text-[#dffff9]">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#fff8ed] sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#c4ccd8]">{item.desc}</p>
                </div>
                <div className="hidden h-11 w-11 place-items-center rounded-lg border border-white/10 text-[#aeb8c7] transition-colors group-hover:border-[#60e6d2]/40 group-hover:text-[#bffbf3] sm:grid">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
