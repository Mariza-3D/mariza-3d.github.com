import { CalendarClock, GraduationCap, MessageCircle, MonitorPlay } from 'lucide-react';
import { motion } from 'motion/react';

const items = [
  { icon: CalendarClock, label: 'Башталышы', value: 'Жаңы агым', note: 'алдын ала катталуу жүрүп жатат' },
  { icon: MonitorPlay, label: 'Формат', value: 'Онлайн / оффлайн', note: 'видео, практика жана класс' },
  { icon: GraduationCap, label: 'Узактыгы', value: '1,5 ай', note: 'нөлдөн портфолиого чейин' },
  { icon: MessageCircle, label: 'Колдоо', value: '3 ай', note: 'тапшырмаларга кайтарым байланыш' },
];

const InfoBar = () => {
  return (
    <section className="relative px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-4 rounded-lg border border-white/10 bg-[#111827]/72 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-white/[0.08] bg-[#182131]/72 p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#60e6d2]/12 text-[#bffbf3]">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f9bad]">{item.label}</span>
              </div>
              <p className="text-2xl font-black text-[#fff8ed]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#c4ccd8]">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
