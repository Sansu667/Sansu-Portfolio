// ========================================
// 1. DATOS Y VARIABLES GLOBALES
// ========================================

/**
 * Datos simulados para los posts del blog.
 */
const blogPosts = [
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
            
            <blockquote>"The best way to predict the future is to invent it." - Alan Kay</blockquote>
        `,
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
        content: `
            <h2>The Nature of Mathematical Reality</h2>
            <p>What are numbers? Do mathematical objects exist independently of human minds, or are they mere constructions? These questions have puzzled philosophers for centuries and remain at the heart of contemporary philosophy of mathematics.</p>
            
            <h3>Platonism vs Nominalism</h3>
            <p><strong>Mathematical Platonism</strong> holds that mathematical objects exist in an abstract realm, independent of physical reality and human thought. According to this view, mathematicians discover truths rather than invent them.</p>
            
            <blockquote>"The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve." - Eugene Wigner</blockquote>
            
            <h3>The Indispensability Argument</h3>
            <p>Quine and Putnam's indispensability argument suggests that we should believe in mathematical objects because they are indispensable to our best scientific theories. If we accept science, we must accept mathematics.</p>
        `,
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
        content: `
            <h2>Getting Started with Python for Statistics</h2>
            <p>Python has become the go-to language for statistical analysis and data science. With its rich ecosystem of libraries and intuitive syntax, complex statistical operations become straightforward and reproducible.</p>
            
            <h3>Essential Libraries</h3>
            <ul>
                <li><strong>NumPy:</strong> Foundation for numerical computing and array operations</li>
                <li><strong>Pandas:</strong> Data manipulation and analysis with DataFrames</li>
                <li><strong>SciPy:</b> Scientific computing and advanced statistical functions</li>
            </ul>
            
            <blockquote>"In God we trust, all others must bring data." - W. Edwards Deming</blockquote>
        `,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        author: "Santiago Suarez",
        tags: ["Python", "Statistics", "Data Science", "Analytics"]
    },
    {
        id: 4,
        title: "Beyond the Click: 5 Questions You Must Ask to Defeat Fake News",
        category: "philosophy", // Usamos philosophy para encajar con Critical Thinking
        categoryName: "Critical Thinking",
        date: "Oct 20, 2025",
        readTime: "7 min read",
        excerpt: "In the age of social media, our greatest defense against misinformation is not skepticism, but critical literacy. Are you truly reading the news, or just scrolling headlines?",
        content: `
            <h2>The Digital Age Dilemma</h2>
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
            <p>Don't just consume media; deconstruct it. Becoming media literate is a daily practice, not a one-time class. Your ability to question and evaluate is the greatest defense against the digital dilemma.</p>
        `,
        image: "https://plus.unsplash.com/premium_vector-1682309401828-775adf726c2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // Imagen abstracta de análisis de datos o noticias
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
        content: `
            <h2>The Core of Justice: Why Do We Punish?</h2>
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
            <p>Finding effective ways to minimize harm, support victims, and ultimately reduce recidivism is the ultimate goal. The philosophical tension between making criminals pay (retribution) and helping them change (rehabilitation) will continue to shape our legal and penal systems for decades to come.</p>
        `,
        image: "https://images.unsplash.com/photo-1721352794721-9a2f91f8dcbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=978", // Imagen abstracta de justicia o balanza
        author: "Santiago Suarez",
        tags: ["Crime", "Justice", "Rehabilitation", "Deterrence", "Ethics"]
    },
    {
        id: 6,
        title: "Princess Mononoke review: violence, love and the crisis of nature",
        category: "philosophy", 
        categoryName: "Philosophy",
        date: "Dec 7, 2024",
        readTime: "20 min read",
        excerpt: "Princess Mononoke, directed by Hayao Miyazaki, is a Japanese animated epic set in a fantastical version of feudal Japan. The story follows Ashitaka, a young prince of the Emishi people, who is cursed by a demon boar while protecting his village. Seeking a cure for his curse, which threatens to kill him, Ashitaka journeys west in search of the source of the boar's suffering.",
        content: `
            <p>
            Princess Mononoke, directed by Hayao Miyazaki, is a Japanese animated epic set in a fantastical version of feudal Japan. The story follows Ashitaka, a young prince of the Emishi people, who is cursed by a demon boar while protecting his village. Seeking a cure for his curse, which threatens to kill him, Ashitaka journeys west in search of the source of the boar's suffering.
            </p>

            <p>
            The lead, Ashitaka, discovers a conflict in which the human interests of the industrial city of Iron Town clash with the spirits of the forest. “Princess Mononoke”, represented by San, fights to protect her home, the forest, and the creatures that inhabit it. Throughout his journey, Ashitaka finds himself caught between these two opposing worlds, where industrial expansion and the exploitation of nature collide with the need for conservation and respect for natural beings. As the story progresses, themes of the relationship between humans and the environment, the destruction caused by greed, and the struggle to find a balance between development and preservation are explored. In his attempt to mediate the conflict, Ashitaka faces moral dilemmas that question notions of progress and sacrifice.
            </p>

            <p>
            Princess Mononoke is a good animated movie that was created in its beautiful Miyazaki’ style, the idea of humanism where love for others can’t be a property, on the contrary, love must be freedom. This message appears when Ashitaka and San fall in love, but can't be together because they’re different people so they must give up their plans together and move on. But, considering the new generation and their low attention span on long movies, the movie may be slower and longer than other Studio Ghibli movies. The movie is clear of traditional stereotypes, presenting multidimensional characters, both human and non-human, without a clear antagonist. Ashitaka, the protagonist, seeks peace between two seemingly opposing worlds, while characters like San and Lady Eboshi represent forces with more complex motivations that are neither entirely good nor entirely bad. In our opinion, this lack of a clear side is ambiguous: although both sides of the conflict believe they are fighting for what is right, neither side is presented as morally superior. The violent and almost genocidal methods of both the humans and the spirits make it difficult to identify a "good" side, which may confuse the viewer about whom to support. 
            </p>

            <p>
            Finally, this movie has an important critic about industrialization and loss of respect for nature. In the present time, society has grown disproportionately and a necessity for new things like food, clothes and new ways of technology. This growth is more than in other times and it happens a breakout in culture, and society. When we need more things, the industries make use of more nature and this affects the environment and increases events like climate change. This movie shows that we can’t lose the balance with nature, because, in Heidegger’ words, we aren’t the master of it, we can’t control nature because nature must be revealed to us and we have to be shepherds who listen and learn about it. If we are shepherds who learn about nature, we will be more respectful with nature than now, where we exploit natural resources. We can use techniques to create new respectful technologies and nature will be that Spirit who lives and owns this planet and gives us a welcome for our short travel called life. 

        `,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NgkEmexqO2ZxxnDdydmZ7w0xSkNSQqxhnA&s", // Imagen abstracta de justicia o balanza
        author: "Santiago Suarez",
        tags: ["Fantasy", "Heidegger", "Dasein", "Technology", "Nature", "Mononoke"]
    }
];

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
    
    const closeNavWithAnimation = () => {
        if (!DOM.mainNav) return;
        DOM.mainNav.classList.remove('active');
        DOM.mainNav.style.opacity = '0';
        DOM.mainNav.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            DOM.mainNav.style.opacity = '';
            DOM.mainNav.style.transform = '';
            document.body.style.overflow = '';
            if(DOM.closeBtn) DOM.closeBtn.style.display = 'none';
        }, 300); 
    };
    
    if(DOM.menuBtn) {
        DOM.menuBtn.addEventListener('click', () => {
            if (!DOM.mainNav) return;
            DOM.mainNav.classList.add('active');
            DOM.mainNav.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
            if(DOM.closeBtn) DOM.closeBtn.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if(DOM.closeBtn) {
        DOM.closeBtn.addEventListener('click', closeNavWithAnimation);
        DOM.closeBtn.style.display = 'none'; 
    }

    DOM.navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('http') || href.includes('blog.html') || !href.startsWith('#')) {
                return;
            }
            
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if(targetSection) {
                if(window.innerWidth < 768 && DOM.mainNav.classList.contains('active')) {
                    closeNavWithAnimation();
                    setTimeout(() => scrollToSection(targetSection), 300);
                } else {
                    scrollToSection(targetSection);
                }
            }
        });
    });
    
    function scrollToSection(targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - (DOM.header ? DOM.header.offsetHeight : 0),
            behavior: 'smooth'
        });
    }
    
    document.addEventListener('click', (e) => {
        if(window.innerWidth < 768 && 
           DOM.mainNav.classList.contains('active') &&
           !DOM.mainNav.contains(e.target) && 
           e.target !== DOM.menuBtn &&
           !DOM.menuBtn.contains(e.target)) {
            closeNavWithAnimation();
        }
    });
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && DOM.mainNav.classList.contains('active')) {
            closeNavWithAnimation();
        }
    });

    updateActiveNavOnScroll();
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = DOM.navLinks;
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// 3. MÓDULO DE EFECTOS Y ANIMACIONES
// ========================================

function initScrollEffects() {
    DOM.header = DOM.header || document.querySelector('.header');
    DOM.scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        if(DOM.header) DOM.header.classList.toggle('scrolled', isScrolled);
        
        if(DOM.scrollTopBtn) {
            DOM.scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
        }
    });
    
    if(DOM.scrollTopBtn) {
        DOM.scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    initScrollReveal();
    initAnimations();
}

function initAnimations() {
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
    
    document.querySelectorAll('.testimonial-card').forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${index * 0.2}s`;
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(element => {
        element.classList.add('reveal-initial');
        revealObserver.observe(element);
    });
}

function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    if(typingElement) {
        const words = typingElement.getAttribute('data-words').split(',').map(w => w.trim());
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const type = () => {
            const currentWord = words[wordIndex];
            let typeSpeed = isDeleting ? 50 : 100;
            
            typingElement.textContent = currentWord.substring(0, charIndex);
            typingElement.classList.add('cursor');
            
            if(isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }
            
            if(!isDeleting && charIndex > currentWord.length) {
                typeSpeed = 1500;
                isDeleting = true;
            } else if(isDeleting && charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        };
        
        setTimeout(type, 1000);
    }
}


// ========================================
// 4. MÓDULO DE PROYECTOS Y HABILIDADES
// ========================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if(filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const isMatch = filter === 'all' || card.classList.contains(filter);
                
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    card.style.display = isMatch ? 'flex' : 'none';
                    if (isMatch) {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    }
                }, 300);
            });
        });
    });
}

function initSkillsProgress() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    const skillsSection = document.querySelector('.skills-section');
    
    if(!skillsSection) return;
    
    const animateProgress = () => {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-progress');
            bar.style.width = percentage + '%';
        });
    };
    
    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                setTimeout(animateProgress, 300);
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressObserver.observe(skillsSection);
}


// ========================================
// 5. MÓDULO DE CONTACTO Y UTILIDADES
// ========================================

function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if(!contactForm) return;

    // --- Helper Functions (Requeridas por initContactForm) ---
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        let errorElement = formGroup.querySelector('.form-error-message');
        if(!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'form-error-message';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
        input.classList.add('error');
    }
    function removeError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error-message');
        if(errorElement) errorElement.textContent = '';
        input.classList.remove('error');
    }
    function showFormSuccess(form) {
        removeFormMessages(form);
        const successMessage = document.createElement('div');
        successMessage.className = 'form-message success';
        successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!';
        form.parentNode.insertBefore(successMessage, form);
        setTimeout(() => successMessage.remove(), 5000);
    }
    function showFormError(form) {
        removeFormMessages(form);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-message error';
        errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> There was a problem sending your message. Please try again.';
        form.parentNode.insertBefore(errorMessage, form);
        setTimeout(() => errorMessage.remove(), 5000);
    }
    function removeFormMessages(form) {
        const messages = form.parentNode.querySelectorAll('.form-message');
        messages.forEach(message => message.remove());
    }
    // --- Fin Helper Functions ---

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('#name');
        const emailInput = contactForm.querySelector('#email');
        const subjectInput = contactForm.querySelector('#subject');
        const messageInput = contactForm.querySelector('#message');
        
        let isValid = true;
        
        if(!nameInput.value.trim()) { showError(nameInput, 'Please enter your name'); isValid = false; } else { removeError(nameInput); }
        if(!validateEmail(emailInput.value)) { showError(emailInput, 'Please enter a valid email address'); isValid = false; } else { removeError(emailInput); }
        if(!subjectInput.value.trim()) { showError(subjectInput, 'Please enter a subject'); isValid = false; } else { removeError(subjectInput); }
        if(!messageInput.value.trim()) { showError(messageInput, 'Please enter your message'); isValid = false; } else { removeError(messageInput); }
        
        if(isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then(() => {
                showFormSuccess(contactForm);
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                showFormError(contactForm);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
        }
    });
    
    contactForm.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => removeError(input));
    });
}

function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        element.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            
            const rect = element.getBoundingClientRect();
            tooltip.style.top = rect.top + window.scrollY - 10 + 'px';
            tooltip.style.left = rect.left + window.scrollX + (rect.width / 2) + 'px';
            
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translate(-50%, -10px)';
            }, 10);
            
            element.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', () => {
            if(element.tooltip) {
                element.tooltip.style.opacity = '0';
                element.tooltip.style.transform = 'translate(-50%, 0)';
                
                setTimeout(() => {
                    if(element.tooltip) {
                        element.tooltip.remove();
                        delete element.tooltip;
                    }
                }, 200);
            }
        });
    });
}


// ========================================
// 6. MÓDULO ESPECÍFICO DEL BLOG
// ========================================

function openModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post || !DOM.modal) return;

    DOM.modal.querySelector('.modal-image').src = post.image;
    DOM.modal.querySelector('.modal-image').alt = post.title;
    DOM.modal.querySelector('.modal-category').textContent = post.categoryName;
    DOM.modal.querySelector('.modal-title').textContent = post.title;
    DOM.modal.querySelector('.modal-author').textContent = post.author;
    DOM.modal.querySelector('.modal-date').textContent = post.date;
    DOM.modal.querySelector('.modal-read-time').textContent = post.readTime;
    DOM.modal.querySelector('.modal-body').innerHTML = post.content;
    
    const tagsContainer = DOM.modal.querySelector('.tags-list');
    tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    DOM.modal.classList.add('active');
    DOM.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    const modalContent = DOM.modal.querySelector('.modal-content');
    modalContent.scrollTop = 0; 
    
    DOM.modal.querySelector('.modal-close').focus();
    
    updateReadingProgress(); 
}

function closeModal() {
    if (!DOM.modal) return;
    
    DOM.modal.classList.remove('active');
    DOM.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    if (DOM.progressIndicator) {
        DOM.progressIndicator.style.width = '0%';
    }
}

/**
 * ASIGNACIÓN DE EVENTOS DEL MODAL (CRÍTICA)
 */
function setupModalListeners() {
    if (!DOM.modal) return;

    const closeBtn = DOM.modal.querySelector('.modal-close');
    const overlay = DOM.modal.querySelector('.modal-overlay');
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Configura el evento click para todos los enlaces 'Read More'
    DOM.readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(link.dataset.postId);
            openModal(postId);
        });
    });

    // También permite abrir el modal al hacer click en toda la tarjeta del post
    DOM.blogPosts.forEach(postCard => {
         postCard.addEventListener('click', (e) => {
             // Evitar doble evento si ya se hizo clic en el enlace 'Leer Más'
             if (e.target.closest('.read-more')) return;

             const postId = parseInt(postCard.dataset.postId);
             openModal(postId);
         });
    });


    // Eventos de compartir
    DOM.modal.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.share; 
            const readMoreLink = DOM.modal.querySelector('.modal-content a[data-post-id]');
            
            // Encuentra el ID del post actual del modal
            const postElement = document.querySelector(`.blog-post[data-post-id="${DOM.modal.dataset.currentPostId}"]`);
            const currentPostId = postElement ? parseInt(postElement.dataset.postId) : null;
            const post = blogPosts.find(p => p.id === currentPostId);

            if (post) sharePost(platform, post);
        });
    });
}

function filterPosts(category) {
    if (!DOM.blogPosts || !DOM.categoryButtons) return;

    DOM.categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
        btn.setAttribute('aria-pressed', btn.dataset.category === category);
    });

    DOM.blogPosts.forEach(post => {
        const isVisible = category === 'all' || post.dataset.category === category;
        
        if (isVisible) {
            post.style.display = 'flex'; 
            setTimeout(() => post.style.opacity = '1', 10); 
        } else {
            post.style.opacity = '0'; 
            setTimeout(() => post.style.display = 'none', 300); 
        }
    });
}

function setupSearch() {
    if (!DOM.searchInput || !DOM.blogPosts || !DOM.categoryButtons) return;

    DOM.searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // Desactivar el filtro de categorías al buscar
        DOM.categoryButtons.forEach(btn => {
             btn.classList.remove('active');
             btn.setAttribute('aria-pressed', 'false');
        });

        DOM.blogPosts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
            const category = post.dataset.category.toLowerCase();
            
            const matchesSearch = title.includes(searchTerm) || 
                                  excerpt.includes(searchTerm) ||
                                  category.includes(searchTerm);
            
            if (matchesSearch) {
                post.style.display = 'flex';
                setTimeout(() => post.style.opacity = '1', 10);
            } else {
                post.style.opacity = '0';
                setTimeout(() => post.style.display = 'none', 300);
            }
        });
    });
}

function setupNewsletter() {
    if (!DOM.newsletterForm) return;

    DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = DOM.newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        showNotification(`¡Gracias por suscribirte con ${email}!`);
        
        emailInput.value = '';
        const submitBtn = DOM.newsletterForm.querySelector('button');
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.disabled = false;
        }, 3000); 
    });
}

function showNotification(message) {
    let notification = document.getElementById('notification');
    if (notification) notification.remove(); 
    
    notification = document.createElement('div');
    notification.className = 'notification';
    notification.id = 'notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    DOM.notification = notification; 

    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function sharePost(platform, post) {
    const url = window.location.origin + window.location.pathname + `?post=${post.id}`; 
    const text = `¡Mira este post! "${post.title}"`;

    switch(platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`, '_blank', 'width=600,height=400');
            break;
        case 'copy':
            navigator.clipboard.writeText(url).then(() => {
                showNotification('¡Enlace copiado al portapapeles!');
            }).catch(err => {
                 console.error('Error al copiar el enlace: ', err);
            });
            break;
    }
}

function updateReadingProgress() {
    DOM.progressIndicator = DOM.progressIndicator || document.querySelector('.reading-progress');
    if (!DOM.progressIndicator) return;

    let totalHeight, scrolled, progress;
    const modalContent = DOM.modal && DOM.modal.classList.contains('active') 
                         ? DOM.modal.querySelector('.modal-content') 
                         : null;

    if (modalContent) {
        scrolled = modalContent.scrollTop;
        totalHeight = modalContent.scrollHeight - modalContent.clientHeight;
    } else {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrolled = window.scrollY;
        totalHeight = scrollableHeight;
    }

    progress = (totalHeight === 0) ? 100 : (scrolled / totalHeight) * 100;

    DOM.progressIndicator.style.width = progress + '%';
}

function initBlog() {
    // 1. Inicializar/Actualizar todas las referencias del DOM del blog
    DOM.modal = document.getElementById('blogModal');
    DOM.searchInput = document.getElementById('searchInput');
    DOM.categoryButtons = document.querySelectorAll('.category-btn');
    DOM.readMoreLinks = document.querySelectorAll('.read-more');
    DOM.blogPosts = document.querySelectorAll('.blog-post');
    DOM.newsletterForm = document.getElementById('newsletterForm');
    DOM.progressIndicator = document.querySelector('.reading-progress');

    // 2. Configurar filtros y búsqueda
    DOM.categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => filterPosts(btn.dataset.category));
    });
    setupSearch();

    // 3. Configurar modal (SOLUCIÓN para clics en posts)
    setupModalListeners();

    // 4. Configurar newsletter
    setupNewsletter();

    // 5. Configurar barra de progreso de lectura (scroll del modal)
    window.addEventListener('scroll', updateReadingProgress);
    if (DOM.modal) {
        DOM.modal.querySelector('.modal-content').addEventListener('scroll', updateReadingProgress);
    }
    
    // 6. Configurar navegación por teclado (Escape para cerrar modal)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.modal && DOM.modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 7. Ocultar mensaje de carga (SOLUCIÓN al mensaje persistente)
    const loadingMessage = document.querySelector('.loading');
    if (loadingMessage) {
        loadingMessage.remove(); 
    }
}


// ========================================
// 7. MÓDULO DE TEMA (DARK MODE)
// ========================================

function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme') || 
                         (prefersDarkScheme.matches ? 'dark' : 'light');
    
    const setTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        if(darkModeToggle) {
            darkModeToggle.classList.toggle('active', theme === 'dark');
        }
        localStorage.setItem('theme', theme);
    };

    if(currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(darkModeToggle) darkModeToggle.classList.add('active');
    }
    
    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    prefersDarkScheme.addEventListener('change', (e) => {
        if(!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// ----------------------------------------
// Funciones de Portafolio (Necesarias para initApp, aunque no fueron modificadas)
// ----------------------------------------

function initReadMoreDescription() {
    const description = document.getElementById('filomates-description');
    if (!description) return;
    
    const readMoreBtn = description.querySelector('.read-more-btn');
    const shortText = description.querySelector('.short-text');
    const fullText = description.querySelector('.full-text');

    if (!readMoreBtn) return;

    readMoreBtn.addEventListener('click', function() {
        const isCollapsed = shortText.style.display !== 'none';
        
        if (isCollapsed) {
            shortText.style.display = 'none';
            fullText.style.display = 'inline';
            readMoreBtn.textContent = 'Read Less';
        } else {
            shortText.style.display = 'inline';
            fullText.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
}

function initLightbox() {
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    if(lightboxTriggers.length === 0) return;

    let lightbox = document.querySelector('.lightbox');

    if(!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <div class="lightbox-image-container">
                    <img class="lightbox-image" src="" alt="Project Image">
                </div>
                <div class="lightbox-details">
                    <h3 class="lightbox-title"></h3>
                    <p class="lightbox-description"></p>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        const closeBtn = document.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    
    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            
            const card = trigger.closest('.project-card');
            const imgSrc = trigger.getAttribute('data-image') || card.querySelector('img')?.src;
            const title = trigger.getAttribute('data-title') || card.querySelector('h3')?.textContent || '';
            const description = trigger.getAttribute('data-description') || card.querySelector('p')?.textContent || '';
            
            lightboxImage.src = imgSrc;
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}


// ========================================
// 8. FUNCIÓN DE INICIALIZACIÓN PRINCIPAL
// ========================================

function initApp() {
    // 1. Core Funcionality (Se ejecuta en todas las páginas)
    initNavigation();
    initScrollEffects();
    initDarkMode();
    initTypingEffect();

    // 2. Project/Skills Modules (Se ejecuta en la página principal)
    initProjectFilters();
    initSkillsProgress();
    initLightbox();
    initReadMoreDescription();

    // 3. Contact/Utility Modules (Se ejecuta en todas las páginas)
    initContactForm();
    initTooltips();

    // 4. Blog/Especialized Modules (SOLUCIÓN: Ejecutar solo si los elementos existen)
    if (document.getElementById('blogGrid')) {
        initBlog(); 
    }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);