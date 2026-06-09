import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const StudentResults = () => {
  return (
    <section id="results" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 text-center">
          <p className="section-kicker justify-center">Жыйынтык</p>
          <h2 className="section-title mx-auto mt-3 max-w-4xl">Студенттердин жыйынтыктары</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#c4ccd8]">
            1-айдан кийин студентте биринчи 3D сцена, анимацияланган кадр жана YouTube үчүн даяр чыгарма пайда болот.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <motion.div
            initial={{ x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="result-panel"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-[#ef7f75]/12 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#ffc4bd]">Мурунку</span>
              <span className="text-sm text-[#8f9bad]">Башталыш деңгээл</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700"
              alt="Башталыш деңгээл"
              className="aspect-video w-full rounded-lg object-cover opacity-70 grayscale"
            />
            <p className="mt-5 text-sm leading-6 text-[#c4ccd8]">Программа, интерфейс жана workflow түшүнүксүз болуп турган учур.</p>
          </motion.div>

          <div className="hidden h-14 w-14 place-items-center rounded-full border border-white/10 bg-[#111827]/72 text-[#bffbf3] lg:grid">
            <ArrowRight className="h-6 w-6" />
          </div>

          <motion.div
            initial={{ x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="result-panel result-panel-active"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-[#60e6d2] px-3 py-1 text-xs font-black uppercase tracking-widest text-[#081016]">Кийинки</span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#bffbf3]">
                <TrendingUp className="h-4 w-4" />
                Практикалык деңгээл
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900"
              alt="3D анимация жыйынтыгы"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="mt-5 text-sm leading-6 text-[#d8deea]">Каарман, сцена, animation pass, монтаж жана YouTube жарыялоого даяр материал.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentResults;
