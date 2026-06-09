export const contactLinks = {
  phone: '+996 508 128 008',
  instagram: 'https://www.instagram.com/mariza_online3d/',
  telegram: 'https://t.me/+996508128008',
  whatsapp: `https://wa.me/996508128008?text=${encodeURIComponent(
    'Салам! Mariza 3D курсу боюнча маалымат алгым келет.'
  )}`,
};

export const quickFacts = [
  { label: 'Башталышы', value: 'Жаңы агым' },
  { label: 'Узактыгы', value: '1,5 ай' },
  { label: 'Колдоо', value: '3 ай' },
  { label: 'Формат', value: 'Онлайн / оффлайн' },
];

export const curriculumItems = [
  {
    number: '01',
    title: 'Программа орнотуу жана интерфейс',
    desc: 'Blender, iClone жана башка программаларды орнотуу, негизги билимдер',
  },
  {
    number: '02',
    title: 'Персонаждар менен иштөө',
    desc: '3D каармандарды түзүү, текстуралоо жана жандандыруу',
  },
  {
    number: '03',
    title: 'Анимация техникасы',
    desc: 'Кыймыл, жүз анимациясы жана табигый жүрүш-туруш',
  },
  {
    number: '04',
    title: 'Видео монтаж',
    desc: 'After Effects жана DaVinci Resolve менен финалдык жыйынтык',
  },
  {
    number: '05',
    title: 'YouTube оптимизациясы',
    desc: 'Түрткү сүрөт, баш ат жана SEO негиздери',
  },
  {
    number: '06',
    title: 'Монетизация',
    desc: 'YouTube дан акча табуу стратегиялары жана канал өстүрүү',
  },
];

export const pricingPlans = [
  {
    name: 'Онлайн',
    price: '10 000',
    tone: 'neutral',
    description: 'Өз темпиңде окуп, негизги инструменттерди түшүнүп чыгуу.',
    features: ['Видео сабактар', 'Өз темпиңде окуу', 'Иштик материалдар', 'Чектелбеген мөөнөт'],
  },
  {
    name: 'Онлайн + Колдоо',
    price: '20 000',
    tone: 'teal',
    badge: '12 орун калды',
    description: 'Онлайн окуу жана Telegram аркылуу тапшырма боюнча кайтарым байланыш.',
    features: ['Онлайн сабактар', 'Видео жазуулар', 'Telegram колдоо', 'Иштик материалдар', '3 ай колдоо'],
  },
  {
    name: 'Premium Оффлайн',
    price: '40 000',
    tone: 'orange',
    badge: 'Premium',
    description: 'Класста VIP окуу, жеке консультация жана портфолио долбоорлору.',
    features: [
      'Класста VIP сабак',
      'Тура аралашуу окутуучу менен',
      'Жеке консультациялар',
      'Бардык материалдар + Bonus',
      '6 ай жеке колдоо',
      'Сертификат жана портфолио',
    ],
  },
];
