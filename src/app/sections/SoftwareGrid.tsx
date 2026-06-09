import { motion } from 'motion/react';
import blenderIcon from '../../assets/icons/blender.png';
import icloneIcon from '../../assets/icons/Iclone-8.png';
import afterEffectsIcon from '../../assets/icons/after-effects.png';
import photoshopIcon from '../../assets/icons/photoshop.png';
import substanceIcon from '../../assets/icons/substanse.png';
import davinciIcon from '../../assets/icons/DaVinci.png';

const software = [
  { name: 'Blender', desc: '3D моделдөө', image: blenderIcon },
  { name: 'iClone 8', desc: 'Анимация', image: icloneIcon },
  { name: 'After Effects', desc: 'Видео эффекттер', image: afterEffectsIcon },
  { name: 'Photoshop', desc: 'Текстура жана cover', image: photoshopIcon },
  { name: 'Substance', desc: 'Материал', image: substanceIcon },
  { name: 'DaVinci', desc: 'Монтаж жана түс', image: davinciIcon },
];

const SoftwareGrid = () => {
  return (
    <section id="software" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Инструменттер</p>
            <h2 className="section-title mt-3">Программалар менен иштөө</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#c4ccd8] lg:justify-self-end">
            Курстун логикасы бир программаны жаттоо эмес, толук production pipeline түзүү: каарман, анимация, монтаж, thumbnail жана YouTube жарыялоо.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {software.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.045 }}
              whileHover={{ y: -6 }}
              className="group relative min-h-[190px] rounded-lg border border-white/10 bg-[#111827]/72 p-4 backdrop-blur-xl"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#60e6d2]/55 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-full flex-col justify-between">
                <div className="grid h-20 w-20 place-items-center rounded-lg border border-white/10 bg-[#182131] p-4 shadow-inner">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#fff8ed]">{item.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#aeb8c7]">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareGrid;
