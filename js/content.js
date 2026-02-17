// Content population - fills in static data for all sections

export function populateContent() {
    populateSoftwareGrid();
    populatePricingCards();
    populateFAQ();
    populateTestimonials();
    populateCurriculum();
    populateResults();
    populateInstructor();
}

// Software Grid
function populateSoftwareGrid() {
    const software = [
        { name: 'Blender', image: 'assets/icons/blender.png' },
        { name: 'After Effects', image: 'assets/icons/after-effects.png' },
        { name: 'Photoshop', image: 'assets/icons/photoshop.png' },
        { name: 'Substance', image: 'assets/icons/substanse.png' },
        { name: 'DaVinci', image: 'assets/icons/DaVinci.png' },
        { name: 'iClone 8', image: 'assets/icons/Iclone-8.png' }
    ];

    const grid = document.querySelector('.software-grid');
    if (!grid) return;

    grid.innerHTML = software.map(soft => `
        <div class="software-card animate-slide">
            <img src="${soft.image}" alt="${soft.name}">
            <h3>${soft.name}</h3>
        </div>
    `).join('');
}

// Pricing Cards
function populatePricingCards() {
    const pricing = [
        {
            name: 'BASIC',
            price: '12,000',
            originalPrice: '15,000',
            features: [
                'Blender негиздери',
                '3D моделдөө',
                'Текстуралоо',
                'Жарыктандыруу',
                'Анимация негиздери'
            ]
        },
        {
            name: 'PREMIUM',
            price: '25,000',
            originalPrice: '30,000',
            featured: true,
            badge: 'ЭҢ ПОПУЛЯРДУУ',
            features: [
                'Blender толук',
                'After Effects',
                'Photoshop',
                'Substance Painter',
                'Портфолио',
                'Кесиптик проекттер',
                '1 жылдык колдоо'
            ]
        },
        {
            name: 'VIP',
            price: '40,000',
            originalPrice: '50,000',
            features: [
                'Бардык керектөөчүлөр',
                'Жеке менторство',
                'Өмүр бою колдоо',
                'Эксклюзивдуу материалдар',
                'Иш табууга жардам',
                'Сертификат',
                'Кошумча проекттер'
            ]
        }
    ];

    const container = document.querySelector('.pricing-cards');
    if (!container) return;

    container.innerHTML = pricing.map(plan => `
        <div class="pricing-card ${plan.featured ? 'featured' : ''} animate-fade">
            ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
            <div class="pricing-header">
                <h3>${plan.name}</h3>
            </div>
            <div class="pricing-price">
                ${plan.price} сом
                ${plan.originalPrice ? `<div style="text-decoration: line-through; font-size: 18px; color: #666;">${plan.originalPrice} сом</div>` : ''}
            </div>
            <ul class="pricing-features">
                ${plan.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="#contact" class="btn btn-primary" style="width: 100%;">Тандоо</a>
        </div>
    `).join('');
}

// FAQ
function populateFAQ() {
    const faqs = [
        {
            q: 'Курс канча убакытка созулат?',
            a: 'Курс 8 жумага созулат, жумасына 3 сабак. Ар бир сабак 2 саатка созулат.'
        },
        {
            q: 'Алдын ала тажрыйба керекпи?',
            a: 'Жок, бул курс башталгычтар үчүн түзүлгөн. Биз бардык нерселерди нөлдөн баштайбыз.'
        },
        {
            q: 'Кандай программалар керек?',
            a: 'Биз Blender, After Effects, Photoshop жана башка ачык программаларды колдонобуз. Бардык керектүү программалар сабак учурунда көрсөтүлөт.'
        },
        {
            q: 'Аяктаганда сертификат беребисизби?',
            a: 'Ооба, курсту ийгиликтүү аяктаган студенттерге расмий сертификат берилет.'
        },
        {
            q: 'Алыстан окууга мүмкүнчүлүк барбы?',
            a: 'Ооба, курс онлайн форматта болот, демек сиз дүйнөнүн каалаган жеринен окуй аласыз.'
        }
    ];

    const list = document.getElementById('faq-list');
    if (!list) return;

    list.innerHTML = faqs.map((faq, i) => `
        <div class="faq-item animate-fade">
            <button class="faq-question" data-index="${i}">
                ${faq.q}
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">${faq.a}</div>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            item.classList.toggle('active');
        });
    });
}

// Testimonials
function populateTestimonials() {
    const testimonials = [
        {
            name: 'Азамат К.',
            text: 'Мыкты курс! Азыр мен фрилансер катары иштеп, айына 50,000 сом тап жатам.',
            rating: 5
        },
        {
            name: 'Нургуль А.',
            text: '3 айда портфолио түзүп, студияга иштеп кирдим. Рахмат Mariza 3D!',
            rating: 5
        },
        {
            name: 'Эрлан С.',
            text: 'Профессионалдык устаттардан үйрөнүү - бул үлкөн артыкчылык!',
            rating: 5
        }
    ];

    const container = document.getElementById('testimonials');
    if (!container) return;

    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card animate-fade">
            <div class="testimonial-rating">
                ${'⭐'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <p class="testimonial-name">- ${t.name}</p>
        </div>
    `).join('');
}

// Curriculum
function populateCurriculum() {
    const modules = [
        {
            week: 1,
            title: 'Blender Негиздери',
            topics: ['Интерфейс', 'Навигация', 'Объекттер менен иштөө']
        },
        {
            week: 2,
            title: '3D Моделдөө',
            topics: ['Полигон моделдөө', 'Modifiers', 'Hard Surface']
        },
        {
            week: 3,
            title: 'Текстуралоо жана Материалдар',
            topics: ['UV Mapping', 'Shader Editor', 'Substance Painter']
        },
        {
            week: 4,
            title: 'Жарыктандыруу жана Рендеринг',
            topics: ['3-Point Lighting', 'HDRI', 'Cycles/Eevee']
        },
        {
            week: 5,
            title: 'Анимация',
            topics: ['Keyframes', 'Rigging', 'Character Animation']
        },
        {
            week: 6,
            title: 'After Effects жана Композитинг',
            topics: ['Motion Graphics', 'VFX', 'Compositing']
        },
        {
            week: 7,
            title: 'Кесиптик Проект',
            topics: ['Идея', 'Пландаштыруу', 'Аткаруу']
        },
        {
            week: 8,
            title: 'Портфолио жана Презентация',
            topics: ['Showreel', 'Portfolio', 'Деловой Жактар']
        }
    ];

    const list = document.getElementById('curriculum-list');
    if (!list) return;

    list.innerHTML = modules.map(mod => `
        <div class="curriculum-item animate-slide">
            <div class="curriculum-week">Жума ${mod.week}</div>
            <div class="curriculum-content">
                <h4>${mod.title}</h4>
                <ul>
                    ${mod.topics.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Results
function populateResults() {
    const results = [
        { number: '50+', label: 'Бүтүрүүчүлөр' },
        { number: '95%', label: 'Канааттануу' },
        { number: '80%', label: 'Иш таптылар' },
        { number: '100+', label: 'Проекттер' }
    ];

    const grid = document.querySelector('.results-grid');
    if (!grid) return;

    grid.innerHTML = results.map(r => `
        <div class="result-card animate-fade">
            <div class="result-number gradient-text">${r.number}</div>
            <div class="result-label">${r.label}</div>
        </div>
    `).join('');
}

// Instructor
function populateInstructor() {
    const instructor = document.querySelector('.instructor-content');
    if (!instructor) return;

    instructor.innerHTML = `
        <div class="instructor-info">
            <div class="instructor-header">
                <h2>Жаназ Сай Эргашова</h2>
                <p class="instructor-title">3D Дизайнер & Инструктор</p>
            </div>
            <div class="instructor-bio">
                <p>5 жылдык тажрыйбасы бар кесиптик 3D аниматор жана инструктор.</p>
                <ul class="instructor-achievements">
                    <li>✓ 100+ коммерциялык проектт</li>
                    <li>✓ Major Studio партнер</li>
                    <li>✓ 200+ студент үйрөттү</li>
                    <li>✓ Award-winning портфолио</li>
                </ul>
            </div>
        </div>
    `;
}
