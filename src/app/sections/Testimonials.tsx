import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Айжан К.',
    role: 'YouTube автор',
    text: 'Бир айда эле YouTube каналымды ачып, биринчи видеону жарыялап койдум. Окутуучу абдан түшүнүктүү айтат!',
    avatar: 'https://images.unsplash.com/photo-1656769539033-b811e27691ee?w=160',
  },
  {
    name: 'Бекжан Т.',
    role: '3D Artist',
    text: 'Иштеген программалар тууралуу толук билим алдым. Азыр фрилансерде иштейм.',
    avatar: 'https://images.unsplash.com/photo-1589442694956-9eaf242dd1fe?w=160',
  },
  {
    name: 'Нуржан А.',
    role: 'Студент',
    text: 'Нөлдөн башталып, 6 жумада профессионал деңгээлге жеттим. Укмуштай!',
    avatar: 'https://images.unsplash.com/photo-1555728750-9c6ad51b968d?w=160',
  },
];

const Testimonials = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="section-kicker">Пикирлер</p>
            <h2 className="section-title mt-3">Студенттердин пикири</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#c4ccd8] lg:justify-self-end">
            Окуу кыска, бирок практика көп: студент ар бир модулда иштеп, акырында жарыялоого даяр материал менен чыгат.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-lg border border-white/10 bg-[#111827]/72 p-6 backdrop-blur-xl"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-black text-[#fff8ed]">{testimonial.name}</h3>
                    <p className="text-sm text-[#aeb8c7]">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="h-7 w-7 text-[#bffbf3]/70" />
              </div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-[#f8c85f] text-[#f8c85f]" />
                ))}
              </div>
              <p className="text-base leading-7 text-[#d8deea]">{testimonial.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
