import { Award, Layers3, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: Award, value: '5+', label: 'Жыл тажрыйба' },
  { icon: Users, value: '300+', label: 'Студент' },
  { icon: TrendingUp, value: '92%', label: 'Ийгилик' },
];

const Instructor = () => {
  return (
    <section id="instructor" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="grid overflow-hidden rounded-lg border border-white/10 bg-[#111827]/72 shadow-[0_28px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="relative min-h-[420px] overflow-hidden bg-[#101722]">
            <div className="instructor-lines" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1589442694956-9eaf242dd1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900"
              alt="Мариза Мырзабаева"
              className="h-full min-h-[420px] w-full object-cover opacity-80"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/10 bg-black/45 p-5 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#60e6d2] text-[#081016]">
                  <Layers3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-[#d8deea]">3D Моделлөөчү & Анимация эксперти</p>
                  <p className="text-lg font-black text-[#fff8ed]">Мариза Мырзабаева</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="section-kicker">Устат</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#fff8ed] sm:text-5xl">Практикадан чыккан окуу</h2>
            <p className="mt-6 text-lg leading-8 text-[#d8deea]">
              2020-жылдан бери 3D моделлөө менен алектенүүдө, 5+ жылдык тажрыйба. 300+ студентти окутуп, алардын көпчүлүгү азыр фриланс жана YouTube боюнча ийгиликтүү иштешет. Blender, iClone 8 жана After Effects боюнча сертификатталган тренер.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-[#182131]/72 p-4 text-center">
                  <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-lg bg-[#60e6d2]/12 text-[#bffbf3]">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-black text-[#fff8ed]">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#aeb8c7]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructor;
