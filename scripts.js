// ========================================
// 1. DATOS Y VARIABLES GLOBALES
// ========================================

/**
 * Datos simulados para los posts del blog.
 */
const blogPosts = [
    // ... (Tus datos de blogPosts van aquí, como en la versión anterior)
    {
        id: 1,
        title: "Modern Web Development Practices",
        category: "tech",
        categoryName: "Technology",
        date: "Oct 20, 2025",
        readTime: "5 min read",
        excerpt: "Exploring the latest trends and best practices in modern web development, from responsive design to performance optimization.",
        content: `

            <h2>Introduction to Modern Web Development</h2>

            <p>The web development landscape has evolved dramatically over the past few years. Today's developers have access to powerful tools and frameworks that make building scalable, performant applications easier than ever.</p>

           

            <h3>Key Trends in 2025</h3>

            <p>From server-side rendering to progressive web apps, the industry continues to push boundaries. Performance optimization has become crucial, with Core Web Vitals playing a significant role in SEO rankings.</p>

           

            <h3>Best Practices</h3>

            <ul>

                <li><strong>Mobile-first responsive design:</strong> Start with mobile and scale up</li>

                <li><strong>Accessibility standards (WCAG 2.1):</strong> Make web accessible to all</li>

                <li><strong>Performance optimization:</strong> Lazy loading, code splitting, and caching</li>

                <li><strong>Security best practices:</b> HTTPS, CSP, and secure authentication</li>

                <li><strong>Progressive enhancement:</b> Build for the baseline, enhance for capable browsers</li>

            </ul>

           

            <blockquote>"The best way to predict the future is to invent it." - Alan Kay</blockquote>`, // Contenido completo
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
        author: "Santiago Suarez",
        tags: ["Web Development", "Best Practices", "Technology"]
    },
    {
        id: 2,
        title: "The Philosophy of Mathematical Objects",
        category: "philosophy",
        categoryName: "Philosophy",
        date: "Oct 18, 2025",
        readTime: "8 min read",
        excerpt: "Investigating the nature of mathematical objects and their relationship to reality in contemporary philosophy of mathematics.",
        content: `<h2>The Nature of Mathematical Reality</h2>

            <p>What are numbers? Do mathematical objects exist independently of human minds, or are they mere constructions? These questions have puzzled philosophers for centuries and remain at the heart of contemporary philosophy of mathematics.</p>

           

            <h3>Platonism vs Nominalism</h3>

            <p><strong>Mathematical Platonism</strong> holds that mathematical objects exist in an abstract realm, independent of physical reality and human thought. According to this view, mathematicians discover truths rather than invent them.</p>

           

            <blockquote>"The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve." - Eugene Wigner</blockquote>

           

            <h3>The Indispensability Argument</h3>

            <p>Quine and Putnam's indispensability argument suggests that we should believe in mathematical objects because they are indispensable to our best scientific theories. If we accept science, we must accept mathematics.</p>`, // Contenido completo
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop",
        author: "Santiago Suarez",
        tags: ["Philosophy", "Mathematics", "Epistemology", "Metaphysics"]
    },
    {
        id: 3,
        title: "Statistical Analysis in Python",
        category: "data",
        categoryName: "Data Science",
        date: "Oct 15, 2025",
        readTime: "6 min read",
        excerpt: "A practical guide to performing statistical analysis using Python's data science libraries.",
        content: `<h2>Getting Started with Python for Statistics</h2>

            <p>Python has become the go-to language for statistical analysis and data science. With its rich ecosystem of libraries and intuitive syntax, complex statistical operations become straightforward and reproducible.</p>

           

            <h3>Essential Libraries</h3>

            <ul>

                <li><strong>NumPy:</strong> Foundation for numerical computing and array operations</li>

                <li><strong>Pandas:</strong> Data manipulation and analysis with DataFrames</li>

                <li><strong>SciPy:</b> Scientific computing and advanced statistical functions</li>

            </ul>

           

            <blockquote>"In God we trust, all others must bring data." - W. Edwards Deming</blockquote>`, // Contenido completo
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        author: "Santiago Suarez",
        tags: ["Python", "Statistics", "Data Science", "Analytics"]
    },
     {
        id: 4,
        title: "Beyond the Click: 5 Questions You Must Ask to Defeat Fake News",
        category: "philosophy", 
        categoryName: "Critical Thinking",
        date: "Oct 20, 2025",
        readTime: "7 min read",
        excerpt: "In the age of social media, our greatest defense against misinformation is not skepticism, but critical literacy. Are you truly reading the news, or just scrolling headlines?",
        content: `<h2>The Digital Age Dilemma</h2>

            <p>In today's information-rich world, media literacy is no longer an optional skill—it's a necessity. We must learn to navigate content thoughtfully, question underlying motives, and avoid the trap of misinformation.</p>

           

            <h3>5 Critical Questions for Media Consumers</h3>

           

            <h4>1. Who Made This and Why? (Source Check)</h4>

            <p>Investigate the <strong>authority</strong> and funding behind the message. Is the source an established news organization, an expert, or a partisan blog? Look beyond the headline to find the author and their credentials. Remember: credible journalism prioritizes impartiality.</p>



            <h4>2. What is the Purpose and What is Missing? (Context Check)</h4>

            <p>Is the message meant to inform, persuade, or sell a product/ideology? A hallmark of manipulation is omission. Look for statistics or facts that were deliberately excluded to paint a biased picture. Critical thinking requires seeking the complete story.</p>

           

            <h4>3. How is the Evidence Presented? (Verification)</h4>

            <p>Does the article cite credible research or is it based on anonymous opinions? Use non-partisan fact-checking tools like Snopes or Politifact to cross-examine key claims. If the article presents statistics, evaluate the methodology and sample size.</p>



            <h4>4. How Inflammatory is the Language? (Bias Identification)</h4>

            <p>Analyze the tone. Highly emotive or inflammatory language often signals an intent to manipulate, not to inform. Look for buzzwords and evaluate if the language reflects a political or financial bias.</p>

           

            <h4>5. Can I Find a Counter-Argument? (Multiple Perspectives)</h4>

            <p>One of the best ways to test a claim is to look for opposing views from credible sources. If every source confirms one narrow perspective, you may be stuck in an echo chamber. Seek out well-reasoned analyses that challenge your assumptions.</p>



            <blockquote>"We are prone to believe what we wish to be true." - Julius Caesar</blockquote>



            <h3>Conclusion</h3>

            <p>Don't just consume media; deconstruct it. Becoming media literate is a daily practice, not a one-time class. Your ability to question and evaluate is the greatest defense against the digital dilemma.</p>`, // Contenido completo
        image: "https://plus.unsplash.com/premium_vector-1682309401828-775adf726c2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        author: "Santiago Suarez",
        tags: ["Critical Thinking", "Media Literacy", "Misinformation", "Journalism"]
    },
    {
        id: 5,
        title: "Rehabilitation vs. Retribution: The Two Faces of Justice",
        category: "philosophy", 
        categoryName: "Ethics & Justice",
        date: "Oct 20, 2025",
        readTime: "8 min read",
        excerpt: "Why does society punish? The debate over justice systems has always centered on two opposing goals: making criminals pay their debt, or helping them become productive citizens.",
        content: `<h2>The Core of Justice: Why Do We Punish?</h2>

            <p>The way a society treats its prisoners is a profound reflection of its own morality and philosophical foundation. The entire concept of a justice system is built upon two fundamentally different approaches to handling crime.</p>

           

            <h3>The Retributive Model: Paying the Debt</h3>

            <p>The retributive model is rooted in the principle of 'an eye for an eye.' Its primary goal is retribution and deterrence. The penalty imposed must be proportional to the harm caused, ensuring the criminal 'pays their debt' to society. This philosophy heavily influences strict sentencing guidelines and supports severe measures like capital punishment.</p>

           

            <blockquote>"The best way to predict the future is to invent it." - Alan Kay</blockquote>

           

            <h4>Key Concepts in Retribution:</h4>

            <ul>

                <li><strong>Deterrence:</strong> Punishing individuals to discourage others from committing similar crimes.</li>

                <li><strong>Incapacitation:</strong> Removing the criminal from society (imprisonment) to prevent future harm.</li>

                <li><strong>Proportionality:</strong> Ensuring the punishment matches the severity of the crime.</li>

            </ul>

           

            <h3>The Rehabilitative Model: The Path to Reintegration</h3>

            <p>Conversely, the rehabilitative model sees crime as a symptom of deeper societal or personal issues (poverty, addiction, lack of education). Its goal is to address the root causes of criminal behavior. Programs in prison focus on vocational training, therapy, and education, aiming to reduce recidivism (the tendency of a convicted criminal to re-offend).</p>

           

            <h4>The Modern Dilemma</h4>

            <p>Can these two opposing philosophies coexist? Modern criminal justice systems often attempt a hybrid approach, leading to intense debates. Measures like long-term solitary confinement are viewed as purely retributive and harmful, while programs focused on restorative justice aim to heal the victims and reintegrate the offenders, reflecting the rehabilitative ideal.</p>

           

            <h3>Conclusion</h3>

            <p>Finding effective ways to minimize harm, support victims, and ultimately reduce recidivism is the ultimate goal. The philosophical tension between making criminals pay (retribution) and helping them change (rehabilitation) will continue to shape our legal and penal systems for decades to come.</p>`, // Contenido completo
        image: "https://images.unsplash.com/photo-1721352794721-9a2f91f8dcbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=978",
        author: "Santiago Suarez",
        tags: ["Crime", "Justice", "Rehabilitation", "Deterrence", "Ethics"]
    },
    {
        id: 6,
        title: "Princess Mononoke review: violence, love and the crisis of nature",
        category: "philosophy", 
        categoryName: "Philosophy",
        date: "Dec 7, 2024",
        readTime: "8 min read", // Ajustado tiempo de lectura
        excerpt: "Princess Mononoke, directed by Hayao Miyazaki, is a Japanese animated epic set in a fantastical version of feudal Japan...", // Acortado
        content: `<p>

            Princess Mononoke, directed by Hayao Miyazaki, is a Japanese animated epic set in a fantastical version of feudal Japan. The story follows Ashitaka, a young prince of the Emishi people, who is cursed by a demon boar while protecting his village. Seeking a cure for his curse, which threatens to kill him, Ashitaka journeys west in search of the source of the boar's suffering.

            </p>



            <p>

            The lead, Ashitaka, discovers a conflict in which the human interests of the industrial city of Iron Town clash with the spirits of the forest. “Princess Mononoke”, represented by San, fights to protect her home, the forest, and the creatures that inhabit it. Throughout his journey, Ashitaka finds himself caught between these two opposing worlds, where industrial expansion and the exploitation of nature collide with the need for conservation and respect for natural beings. As the story progresses, themes of the relationship between humans and the environment, the destruction caused by greed, and the struggle to find a balance between development and preservation are explored. In his attempt to mediate the conflict, Ashitaka faces moral dilemmas that question notions of progress and sacrifice.

            </p>



            <p>

            Princess Mononoke is a good animated movie that was created in its beautiful Miyazaki’ style, the idea of humanism where love for others can’t be a property, on the contrary, love must be freedom. This message appears when Ashitaka and San fall in love, but can't be together because they’re different people so they must give up their plans together and move on. But, considering the new generation and their low attention span on long movies, the movie may be slower and longer than other Studio Ghibli movies. The movie is clear of traditional stereotypes, presenting multidimensional characters, both human and non-human, without a clear antagonist. Ashitaka, the protagonist, seeks peace between two seemingly opposing worlds, while characters like San and Lady Eboshi represent forces with more complex motivations that are neither entirely good nor entirely bad. In our opinion, this lack of a clear side is ambiguous: although both sides of the conflict believe they are fighting for what is right, neither side is presented as morally superior. The violent and almost genocidal methods of both the humans and the spirits make it difficult to identify a "good" side, which may confuse the viewer about whom to support.

            </p>



            <p>

            Finally, this movie has an important critic about industrialization and loss of respect for nature. In the present time, society has grown disproportionately and a necessity for new things like food, clothes and new ways of technology. This growth is more than in other times and it happens a breakout in culture, and society. When we need more things, the industries make use of more nature and this affects the environment and increases events like climate change. This movie shows that we can’t lose the balance with nature, because, in Heidegger’ words, we aren’t the master of it, we can’t control nature because nature must be revealed to us and we have to be shepherds who listen and learn about it. If we are shepherds who learn about nature, we will be more respectful with nature than now, where we exploit natural resources. We can use techniques to create new respectful technologies and nature will be that Spirit who lives and owns this planet and gives us a welcome for our short travel called life.`, // Contenido completo
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NgkEmexqO2ZxxnDdydmZ7w0xSkNSQqxhnA&s",
        author: "Santiago Suarez",
        tags: ["Fantasy", "Heidegger", "Dasein", "Technology", "Nature", "Mononoke"]
    }
];

// ========================================
// NUEVO: MÓDULO DE INTERNACIONALIZACIÓN (i18n)
// ========================================

const translations = {
    'es': {
        'title': 'Santiago Suarez | Análisis y Desarrollo',
        'hero_intro': 'Hola, soy Santiago Suarez.',
        'hero_title_p1': 'LA DUALIDAD DE UN',
        'hero_title_dev': 'FULL-STACK DEV',
        'hero_title_data': 'DATA ANALYST',
        'hero_caption': 'Mi enfoque: Estadística rigurosa en software moderno.',
        'btn_web': 'DESARROLLO WEB',
        'btn_data': 'DATA & ANÁLISIS',
        // Navegación
        'nav_home': 'Inicio',
        'nav_about': 'Acerca',
        'nav_projects': 'Proyectos',
        'nav_skills': 'Habilidades',
        'nav_contact': 'Contacto',
        'nav_blog': 'Blog',
        'nav_about_f': 'Acerca',
        'nav_projects_f': 'Proyectos',
        'nav_blog_f': 'Blog Personal',
        // Sección About
        'about_title': 'Acerca de Mí',
        'about_lead': 'Soy Santiago Suarez, un profesional con una curiosa dualidad de enfoque: <strong>Desarrollo de Software robusto</strong> y <strong>Análisis Estadístico profundo</strong>. Mi objetivo es construir soluciones elegantes que no solo funcionen, sino que también aporten valor basado en datos.',
        'about_body_p1': 'Mi formación en Filosofía me dota de un pensamiento crítico y lógico, complementando perfectamente mi habilidad para el código (HTML, CSS, JavaScript, Django) y la ciencia de datos (Python, R, Power BI). Como freelance, he gestionado proyectos desde el <em>front-end</em> hasta la lógica de <em>back-end</em> y la implementación de soluciones de datos.',
        'about_btn_contact': 'Empecemos a trabajar',
        'about_btn_github': 'GitHub Profile',
        'detail_formacion_title': 'Formación Dual',
        'detail_formacion_text': 'Estudiante de Filosofía y Estadística (Universidad Nacional) y desarrollador certificado (SENA).',
        'detail_idiomas_title': 'Habilidades Lingüísticas',
        'detail_idiomas_text': 'Trilingüe: Español (nativo), Inglés (fluido) e Italiano (intermedio).',
        'detail_ubicacion_title': 'Ubicación',
        'detail_ubicacion_text': 'Colombia (Disponible para trabajo remoto global).',
        // Sección Proyectos
        'projects_title': 'Proyectos Destacados',
        'projects_subtitle': 'Explora mi trabajo filtrado por áreas de especialización.',
        'filter_all': 'Todos',
        'filter_web': 'Desarrollo Web',
        'filter_data': 'Data Science & Python',
        'tag_web_dev': 'Desarrollo Web',
        'tag_py_gui': 'Python & GUI',
        'tag_web_responsive': 'Web Responsive',
        'tag_game_dev': 'Desarrollo de Juegos',
        'tag_js_logic': 'Lógica JavaScript',
        'project_demo_btn': 'Ver Page', // Añadido
        'project_code_btn': 'Ver Código', // Añadido
        // Sección Skills
        'skills_title': 'Skills & Expertise',
        'skill_data_title': 'Data & Statistics',
        'skill_dev_title': 'Core Web Dev',
        'skill_soft_title': 'Soft Skills',
        'skill_tag_modelado': 'Modelado Estadístico',
        'skill_tag_viz': 'Visualización',
        'skill_tag_responsive': 'Diseño Responsive',
        'skill_tag_logica': 'Lógica Filosófica',
        'skill_tag_critico': 'Pensamiento Crítico',
        'skill_tag_trilingue': 'Trilingüe (ES/EN/IT)',
        'skill_tag_investigacion': 'Investigación',
        // Sección Contacto
        'contact_title': '¿Listo para el Próximo Desafío?',
        'contact_subtitle': 'Si buscas una mente que combine precisión estadística y ejecución de software, envíame un mensaje.',
        'contact_btn': 'Enviar Correo',
        'contact_small_text': 'o conéctate conmigo en LinkedIn y GitHub.',
        // Footer
        'footer_role': 'Software Developer & Data Analyst',
        'footer_copyright': '© 2025 Sansu Inc. Todos los derechos reservados.',
        'footer_connect': 'Conecta',
        'footer_explore': 'Explorar',
        // Blog Specific (Added)
        'blog_page_title': 'Blog | Santiago Suarez',
        'blog_title': 'Explora mi Blog',
        'blog_subtitle': 'Ideas sobre Tecnología, Filosofía y Ciencia de Datos.',
        'blog_search_placeholder': 'Buscar posts...',
        'filter_tech': 'Tecnología',
        'filter_philosophy': 'Filosofía',
        'filter_data_blog': 'Data Science',
        'filter_ethics': 'Ética',
        'category_tech': 'Tecnología',
        'category_philosophy': 'Filosofía',
        'category_data': 'Data Science',
        'category_critical': 'Pensamiento Crítico',
        'category_ethics': 'Ética y Justicia',
        'blog_read_more': 'Leer Más',
        'newsletter_title': 'Únete a la Comunidad y Recibe Novedades',
        'newsletter_subtitle': 'Recibe mis últimas reflexiones y guías técnicas directamente en tu bandeja de entrada.',
        'newsletter_placeholder': 'Ingresa tu correo electrónico',
        'newsletter_button': 'Suscribirse',
        'newsletter_privacy': 'Tu correo está seguro. Sin spam, puedes cancelar en cualquier momento.',
        'modal_tags_title': 'Etiquetas:',
        'modal_share_title': 'Comparte este post:',
        'modal_copy_link': 'Copiar Enlace',
        'notification_copied': 'Enlace copiado al portapapeles.',
    },
    'en': {
        'title': 'Santiago Suarez | Analysis & Development',
        'hero_intro': 'Hello, I\'m Santiago Suarez.',
        'hero_title_p1': 'THE DUALITY OF A',
        'hero_title_dev': 'FULL-STACK DEV',
        'hero_title_data': 'DATA ANALYST',
        'hero_caption': 'My approach: Rigorous statistics in modern software.',
        'btn_web': 'WEB DEVELOPMENT',
        'btn_data': 'DATA & ANALYTICS',
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_projects': 'Projects',
        'nav_skills': 'Skills',
        'nav_contact': 'Contact',
        'nav_blog': 'Blog',
        'nav_about_f': 'About',
        'nav_projects_f': 'Projects',
        'nav_blog_f': 'Personal Blog',
        // Sección About
        'about_title': 'About <span class="highlight-color">Me</span>',
        'about_lead': 'I\'m Santiago Suarez, a professional with a curious dual focus: <strong>Robust Software Development</strong> and <strong>In-Depth Statistical Analysis</strong>. My goal is to build elegant solutions that not only work but also provide data-driven value.',
        'about_body_p1': 'My background in Philosophy equips me with critical and logical thinking, perfectly complementing my coding skills (HTML, CSS, JavaScript, Django) and data science expertise (Python, R, Power BI). As a freelancer, I manage projects from <em>front-end</em> design to <em>back-end</em> logic and data solution implementation.',
        'about_btn_contact': 'Let\'s start working',
        'about_btn_github': 'GitHub Profile',
        'detail_formacion_title': 'Dual Education',
        'detail_formacion_text': 'Student of Philosophy and Statistics (National University) and certified developer (SENA).',
        'detail_idiomas_title': 'Language Skills',
        'detail_idiomas_text': 'Trilingual: Spanish (native), English (fluent), and Italian (intermediate).',
        'detail_ubicacion_title': 'Location',
        'detail_ubicacion_text': 'Colombia (Available for global remote work).',
        // Sección Proyectos
        'projects_title': 'Featured <span class="highlight-color">Projects</span>',
        'projects_subtitle': 'Explore my work filtered by areas of expertise.',
        'filter_all': 'All',
        'filter_web': 'Web Development',
        'filter_data': 'Data Science & Python',
        'tag_web_dev': 'Web Development',
        'tag_py_gui': 'Python & GUI',
        'tag_web_responsive': 'Responsive Web',
        'tag_game_dev': 'Game Development',
        'tag_js_logic': 'JavaScript Logic',
        'project_demo_btn': 'View Page', // Added
        'project_code_btn': 'View Code', // Added
        // Sección Skills
        'skills_title': 'Skills & Expertise',
        'skill_data_title': 'Data & Statistics',
        'skill_dev_title': 'Core Web Dev',
        'skill_soft_title': 'Soft Skills',
        'skill_tag_modelado': 'Statistical Modeling',
        'skill_tag_viz': 'Data Visualization',
        'skill_tag_responsive': 'Responsive Design',
        'skill_tag_logica': 'Philosophical Logic',
        'skill_tag_critico': 'Critical Thinking',
        'skill_tag_trilingue': 'Trilingual (ES/EN/IT)',
        'skill_tag_investigacion': 'Research',
        // Sección Contacto
        'contact_title': 'Ready for the <span class="highlight-color">Next Challenge</span>?',
        'contact_subtitle': 'If you are looking for a mind that combines statistical precision and software execution, send me a message.',
        'contact_btn': 'Send Email',
        'contact_small_text': 'or connect with me on LinkedIn and GitHub.',
        // Footer
        'footer_role': 'Software Developer & Data Analyst',
        'footer_copyright': '© 2025 Sansu Inc. All rights reserved.',
        'footer_connect': 'Connect',
        'footer_explore': 'Explore',
        // Blog Specific (Added)
        'blog_page_title': 'Blog | Santiago Suarez',
        'blog_title': 'Explore my <span class="highlight-color">Blog</span>',
        'blog_subtitle': 'Ideas about Technology, Philosophy, and Data Science.',
        'blog_search_placeholder': 'Search posts...',
        'filter_tech': 'Technology',
        'filter_philosophy': 'Philosophy',
        'filter_data_blog': 'Data Science',
        'filter_ethics': 'Ethics',
        'category_tech': 'Technology',
        'category_philosophy': 'Philosophy',
        'category_data': 'Data Science',
        'category_critical': 'Critical Thinking',
        'category_ethics': 'Ethics & Justice',
        'blog_read_more': 'Read More',
        'newsletter_title': 'Join the Community and Receive News',
        'newsletter_subtitle': 'Get my latest thoughts and technical guides delivered straight to your inbox.',
        'newsletter_placeholder': 'Enter your email address',
        'newsletter_button': 'Subscribe',
        'newsletter_privacy': 'Your email is secure. No spam, cancel anytime.',
        'modal_tags_title': 'Tags:',
        'modal_share_title': 'Share this post:',
        'modal_copy_link': 'Copy Link',
        'notification_copied': 'Link copied to clipboard!',
    }
};

let currentLang = localStorage.getItem('lang') || 'es'; // Idioma por defecto

/**
 * Aplica la traducción a todos los elementos con el atributo data-key.
 */
function setLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return;

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (texts[key] !== undefined) { // Usar !== undefined para permitir strings vacíos
            // Manejar título de la página
            if (element.tagName === 'TITLE') {
                element.textContent = texts[key];
            } 
            // Manejar placeholders de inputs/textarea
            else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                 if (element.placeholder !== undefined) { // Solo si tiene placeholder
                    element.placeholder = texts[key];
                }
            } 
            // Manejar contenido HTML (para conservar <span>, <strong>, etc.)
            else {
                element.innerHTML = texts[key];
            }
        } else {
             console.warn(`Translation key "${key}" not found for language "${lang}".`);
        }
    });

    // Actualizar el atributo lang del HTML para accesibilidad
    document.documentElement.lang = lang;

    // Actualizar el texto del botón y el localStorage
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.textContent = lang.toUpperCase() === 'ES' ? 'ES / EN' : 'EN / ES';
        langBtn.setAttribute('aria-label', lang === 'es' ? 'Toggle language to English' : 'Cambiar idioma a Español');
    }
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

/**
 * Inicializa el módulo de traducción y asigna el evento al botón.
 */
function initLanguageModule() {
    setLanguage(currentLang); // Aplicar idioma al cargar

    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
}

/**
 * Almacena referencias a los elementos del DOM.
 */
const DOM = {};


// ========================================
// 2. MÓDULO DE NAVEGACIÓN Y MENU MÓVIL
// ========================================

function initNavigation() {
    DOM.header = document.querySelector('.header');
    DOM.menuBtn = document.querySelector('.menu-btn');
    DOM.closeBtn = document.querySelector('.close-btn');
    DOM.mainNav = document.querySelector('.main-nav');
    DOM.navLinks = document.querySelectorAll('.main-nav a');

    // Función para cerrar el menú con animación
    const closeNavWithAnimation = () => {
        if (!DOM.mainNav || !DOM.mainNav.classList.contains('active')) return;
        DOM.mainNav.style.right = '-100%'; // Mover fuera de pantalla
        setTimeout(() => {
            DOM.mainNav.classList.remove('active');
            document.body.style.overflow = '';
            if(DOM.closeBtn) DOM.closeBtn.style.display = 'none'; // Asegurar ocultar
        }, 400); // Tiempo de la transición CSS
    };

    // Abrir menú
    if(DOM.menuBtn && DOM.mainNav) {
        DOM.menuBtn.addEventListener('click', () => {
            DOM.mainNav.classList.add('active');
            DOM.mainNav.style.right = '0'; // Mover a la vista
            document.body.style.overflow = 'hidden';
            if(DOM.closeBtn) DOM.closeBtn.style.display = 'block'; // Mostrar botón cerrar
        });
    }

    // Cerrar menú con botón X
    if(DOM.closeBtn) {
        DOM.closeBtn.addEventListener('click', closeNavWithAnimation);
    }

    // Cerrar menú al hacer clic en un enlace (para móvil)
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Solo cerrar si es enlace interno y estamos en móvil
            if (href.startsWith('#') && window.innerWidth < 768 && DOM.mainNav.classList.contains('active')) {
                closeNavWithAnimation();
                // Permitir que el scroll suave ocurra después
            }
            // Si es enlace a otra página (blog.html), no prevenir default
             if (!href.startsWith('#') && !href.startsWith('index.html#')) {
                 return; 
             }

            // Scroll suave para enlaces internos
            if (href.startsWith('#') || href.startsWith('index.html#')) {
                e.preventDefault();
                const targetId = href.includes('#') ? href.substring(href.lastIndexOf('#')) : '#home';
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                     // Esperar un poco si el menú se estaba cerrando
                    const delay = (window.innerWidth < 768 && DOM.mainNav.classList.contains('active')) ? 400 : 0;
                    setTimeout(() => scrollToSection(targetElement), delay);
                }
            }
        });
    });

    // Cerrar menú si se hace clic fuera (overlay invisible)
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 768 && DOM.mainNav && DOM.mainNav.classList.contains('active')) {
            if (!DOM.mainNav.contains(e.target) && e.target !== DOM.menuBtn && !DOM.menuBtn.contains(e.target)) {
                closeNavWithAnimation();
            }
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.mainNav && DOM.mainNav.classList.contains('active')) {
            closeNavWithAnimation();
        }
    });

    // Función scroll suave
    function scrollToSection(targetElement) {
        const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }

    updateActiveNavOnScroll(); // Actualizar enlace activo al cargar y al hacer scroll
}


function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = DOM.navLinks; // Usar la referencia guardada
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
        const scrollPosition = window.scrollY + headerHeight + 50; // Offset para activar antes
        
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                currentSectionId = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
             // Solo comparar la parte del hash
            const linkHref = link.getAttribute('href');
            const linkHash = linkHref.includes('#') ? linkHref.substring(linkHref.lastIndexOf('#')) : null;
            
            link.classList.remove('active');
            if (linkHash && linkHash === currentSectionId) {
                link.classList.add('active');
            } else if (!currentSectionId && linkHash === '#home') { // Activar Home si está arriba
                 link.classList.add('active');
            }
        });
    });
     // Ejecutar una vez al cargar para establecer estado inicial
    window.dispatchEvent(new Event('scroll'));
}

// ========================================
// 3. MÓDULO DE EFECTOS Y ANIMACIONES
// ========================================

function initScrollEffects() {
    DOM.header = DOM.header || document.querySelector('.header'); // Asegurar referencia
    // ... (resto de la lógica de scroll effects como la tenías) ...
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        if(DOM.header) DOM.header.classList.toggle('scrolled', isScrolled);
        // ... (resto de scroll effects) ...
        updateReadingProgress(); // Asegurar que se llame aquí también
    });

    initScrollReveal(); // Llamar a la función de scroll reveal
}

// NUEVO: Función para Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Dejar de observar una vez revelado
            }
        });
    }, { 
        threshold: 0.1, // Revelar cuando el 10% es visible
        rootMargin: '0px 0px -50px 0px' // Revelar un poco antes de que entre completamente
    });

    revealElements.forEach(element => {
        element.classList.add('reveal-initial'); // Estado inicial oculto
        revealObserver.observe(element);
    });
}


// ========================================
// 4. MÓDULO DE PROYECTOS Y HABILIDADES
// ========================================

function initProjectFilters() {
    DOM.filterButtons = document.querySelectorAll('.category-filter .filter-btn');
    DOM.projectCards = document.querySelectorAll('.projects-grid .project-card');

    if (DOM.filterButtons.length === 0 || DOM.projectCards.length === 0) return;

    DOM.filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            DOM.filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            DOM.projectCards.forEach(card => {
                const category = card.dataset.category;
                const isMatch = filter === 'all' || category === filter;
                
                // Aplicar transición de opacidad y escala
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                // Esperar a que termine la animación antes de ocultar/mostrar
                setTimeout(() => {
                    card.classList.toggle('hidden', !isMatch);
                     if (isMatch) {
                        // Forzar reflow antes de animar la entrada
                         void card.offsetWidth; 
                         card.style.opacity = '1';
                         card.style.transform = 'scale(1)';
                    }
                }, 300); 
            });
        });
    });

    // Activar filtro "Todos" al inicio
    document.querySelector('.filter-btn[data-filter="all"]')?.click();
}


// ========================================
// 5. MÓDULO DE CONTACTO Y UTILIDADES
// ========================================
// ... (Mantener initContactForm, showNotification, etc.) ...
function showNotification(message, isError = false) {
    let notification = document.getElementById('notification');
    if (notification) notification.remove(); 
    
    notification = document.createElement('div');
    notification.className = `notification ${isError ? 'error' : ''}`; // Añadir clase error si es necesario
    notification.id = 'notification';
    notification.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    DOM.notification = notification; 

    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// ========================================
// 6. MÓDULO ESPECÍFICO DEL BLOG
// ========================================
// ... (Mantener openModal, closeModal, setupModalListeners, etc.) ...
function openModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post || !DOM.modal) return;

    DOM.modal.dataset.currentPostId = postId; 
    
    DOM.modal.querySelector('.modal-image').src = post.image;
    DOM.modal.querySelector('.modal-image').alt = post.title;

    const categoryElement = DOM.modal.querySelector('.modal-category');
    categoryElement.className = 'modal-category'; 
    categoryElement.classList.add(`tag-${post.category}`);
    categoryElement.textContent = post.categoryName; 

    DOM.modal.querySelector('.modal-title').textContent = post.title;
    DOM.modal.querySelector('.modal-date').textContent = post.date;
    DOM.modal.querySelector('.modal-read-time').textContent = post.readTime;
    DOM.modal.querySelector('.modal-body').innerHTML = post.content;
    
    const tagsContainer = DOM.modal.querySelector('.tags-list');
    tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag tag-${post.category}">${tag}</span>`).join('');

    DOM.modal.classList.add('active');
    DOM.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    const modalContent = DOM.modal.querySelector('.modal-content');
    modalContent.scrollTop = 0; 
    
    updateReadingProgress(); 
}

function closeModal() {
    if (!DOM.modal || !DOM.modal.classList.contains('active')) return; // Evitar cerrar si ya está cerrado
    
    DOM.modal.classList.remove('active');
    DOM.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    if (DOM.progressIndicator) {
        DOM.progressIndicator.style.width = '0%';
    }
}

function setupModalListeners() {
    if (!DOM.modal) return;

    const closeBtn = DOM.modal.querySelector('.modal-close');
    const overlay = DOM.modal.querySelector('.modal-overlay');
    const modalContent = DOM.modal.querySelector('.modal-content');
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    modalContent.addEventListener('scroll', updateReadingProgress);

    // Eventos de compartir
    DOM.modal.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.share; 
            const currentPostId = parseInt(DOM.modal.dataset.currentPostId);
            const post = blogPosts.find(p => p.id === currentPostId);

            if (post) sharePost(platform, post);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function mapDataToBlogCards() {
    if (!DOM.blogPosts) return;

    DOM.blogPosts.forEach(postCard => {
        const postId = parseInt(postCard.dataset.postId);
        // Configura el evento click para abrir el modal
        postCard.addEventListener('click', (e) => {
             // Solo abrir si el click NO es en un enlace dentro de la card
            if (!e.target.closest('a')) { 
                const targetPostId = parseInt(postCard.dataset.postId);
                openModal(targetPostId);
            }
        });
        // Asegurarse que el botón 'Leer Más' también funcione
        const readMoreBtn = postCard.querySelector('.read-more-btn-card');
        if(readMoreBtn){
            readMoreBtn.addEventListener('click', (e) => {
                 e.stopPropagation(); // Evitar que el click en el botón active el click de la card
                 const targetPostId = parseInt(readMoreBtn.dataset.postId);
                 openModal(targetPostId);
            });
        }
    });
}


function setupSearch() { // Renombrado desde filterPosts
    if (!DOM.searchInput || !DOM.blogPosts || !DOM.blogCategoryButtons) return;

    DOM.searchInput.addEventListener('input', () => {
        const searchTerm = DOM.searchInput.value.toLowerCase().trim();
        
        // Desactivar filtro de categoría al buscar
        DOM.blogCategoryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        // Activar 'Todas' si la búsqueda está vacía
        if (searchTerm === '' && DOM.blogCategoryButtons[0]) {
             DOM.blogCategoryButtons[0].classList.add('active');
             DOM.blogCategoryButtons[0].setAttribute('aria-pressed', 'true');
        }

        filterAndDisplayPosts(searchTerm, 'all'); // Filtrar por búsqueda, categoría 'all'
    });
}

function setupCategoryFilters() {
     if (!DOM.blogCategoryButtons) return;
     // Event listeners para filtros de categoría
    DOM.blogCategoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
             // Limpiar búsqueda al usar filtro
             if (DOM.searchInput) DOM.searchInput.value = ''; 
             
             DOM.blogCategoryButtons.forEach(b => b.classList.remove('active'));
             btn.classList.add('active');
             btn.setAttribute('aria-pressed', 'true');
             
             const category = btn.dataset.category;
             filterAndDisplayPosts('', category); // Filtrar por categoría, búsqueda vacía
        });
    });
}


function filterAndDisplayPosts(searchTerm, category) {
    if (!DOM.blogPosts) return;

    DOM.blogPosts.forEach(post => {
        const title = post.querySelector('h3')?.textContent.toLowerCase() || '';
        const excerpt = post.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
        const postCategory = post.dataset.category?.toLowerCase() || '';

        const matchesSearch = searchTerm === '' || title.includes(searchTerm) || excerpt.includes(searchTerm);
        const matchesCategory = category === 'all' || postCategory === category;

        const isVisible = matchesSearch && matchesCategory;

        // Animar visibilidad
        post.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (isVisible) {
            post.style.display = 'flex'; // O 'block' si prefieres
            setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'scale(1)';
            }, 10);
        } else {
            post.style.opacity = '0';
            post.style.transform = 'scale(0.95)';
            setTimeout(() => {
                 // Solo ocultar si todavía debe estar oculto (evita parpadeo si cambia rápido)
                 if (post.style.opacity === '0') { 
                      post.style.display = 'none';
                 }
            }, 300);
        }
    });
}


function sharePost(platform, post) {
    // Genera una URL única para el post (ej. usando hash o query param)
    const postUrl = `${window.location.origin}${window.location.pathname}#post-${post.id}`;
    // O podrías usar query params: `${window.location.origin}${window.location.pathname}?post=${post.id}`;
    const text = `¡Mira este post! "${post.title}"`;

    let shareUrl = '';

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(postUrl)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(postUrl).then(() => {
                showNotification(translations[currentLang].notification_copied || 'Link copied!');
            }).catch(err => {
                 console.error('Error copying link: ', err);
                 showNotification('Error copying link.', true); // Mostrar error
            });
            return; // No abrir nueva ventana
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
    }
}

function updateReadingProgress() {
    DOM.progressIndicator = DOM.progressIndicator || document.querySelector('.reading-progress-bar');
    if (!DOM.progressIndicator) return;

    let totalHeight, scrolled, progress;
    const modalContent = DOM.modal && DOM.modal.classList.contains('active') 
                            ? DOM.modal.querySelector('.modal-content') 
                            : null;

    if (modalContent) {
        // Scroll dentro del modal
        scrolled = modalContent.scrollTop;
        totalHeight = modalContent.scrollHeight - modalContent.clientHeight;
        DOM.progressIndicator.style.position = 'absolute'; // Cambiar a absoluto dentro del modal
        DOM.progressIndicator.style.top = '0'; // Asegurar que esté arriba del modal container
    } else {
        // Scroll del documento (página principal o blog sin modal)
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrolled = window.scrollY;
        totalHeight = scrollableHeight;
        DOM.progressIndicator.style.position = 'fixed'; // Mantener fijo en la página
        DOM.progressIndicator.style.top = `${DOM.header ? DOM.header.offsetHeight : 0}px`; // Debajo del header
    }

    progress = (totalHeight <= 0) ? 100 : Math.min((scrolled / totalHeight) * 100, 100); // Evitar > 100%

    DOM.progressIndicator.style.width = progress + '%';
}


function initBlog() {
    // 1. Inicializar referencias del DOM del blog
    DOM.modal = document.getElementById('blogModal');
    DOM.searchInput = document.getElementById('searchInput');
    DOM.blogCategoryButtons = document.querySelectorAll('.blog-categories .category-btn'); // Más específico
    DOM.blogPosts = document.querySelectorAll('.blog-grid .blog-post'); // Más específico
    DOM.newsletterForm = document.getElementById('newsletterForm');
    DOM.progressIndicator = document.querySelector('.reading-progress-bar');

    if (!DOM.blogPosts || DOM.blogPosts.length === 0) return; // Salir si no hay posts

    // 2. Mapear datos a tarjetas y configurar clics
    mapDataToBlogCards();

    // 3. Configurar filtros y búsqueda
    setupCategoryFilters(); // Separado de la búsqueda
    setupSearch();

    // 4. Configurar modal y sus listeners
    setupModalListeners();

    // 5. Configurar newsletter (si existe)
    if(DOM.newsletterForm) {
        DOM.newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = DOM.newsletterForm.querySelector('input[type="email"]');
            showNotification(translations[currentLang].newsletter_thanks || `Thanks for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // 6. Configurar barra de progreso de lectura (global)
    window.addEventListener('scroll', updateReadingProgress);
    
    // 7. Aplicar filtro inicial 'Todas'
    filterAndDisplayPosts('', 'all'); // Mostrar todos al inicio
}


// ========================================
// 7. MÓDULO DE TEMA (DARK MODE) - Placeholder
// ========================================

function initDarkMode() {
    // Asume que el dark mode se maneja por CSS o ya está implementado
    // Podrías añadir un toggle si lo necesitas
}

// ========================================
// 8. OTRAS FUNCIONES DEL PORTAFOLIO (Placeholders)
// ========================================

function initHeroInteraction() {
     // Lógica para mostrar/ocultar .floating-profile si existe
     const choiceBtns = document.querySelectorAll('.choice-btn');
     const profile = document.querySelector('.floating-profile');
     if (!choiceBtns.length || !profile) return;

     choiceBtns.forEach(button => {
        button.addEventListener('mouseover', () => profile.classList.add('visible'));
        // Podrías añadir lógica para ocultar en mouseout si prefieres
         button.addEventListener('click', () => profile.classList.add('visible')); // Mantener visible al click
     });
}

// ========================================
// 9. FUNCIÓN DE INICIALIZACIÓN PRINCIPAL
// ========================================

function initApp() {
    // 1. Core Funcionality (Se ejecuta en todas las páginas)
    initNavigation();
    initScrollEffects(); // Incluye Scroll Reveal
    initDarkMode();
    initLanguageModule(); // Inicializa la traducción

    // 2. Lógica específica de la página principal (Portafolio)
    if (document.querySelector('.hero-attention')) {
        initHeroInteraction();
        initProjectFilters(); // Filtros de proyectos del portafolio
        // initSkillsProgress(); // Si tienes barras de progreso en Skills
    }

    // 3. Lógica específica de la página del Blog
    if (document.getElementById('blogGrid')) {
        initBlog(); 
    }

    // 4. Módulos genéricos (si existen en la página actual)
    // initContactForm(); 
    // initTooltips();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);