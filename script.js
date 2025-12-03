/* ============================================
   DOTPAY - JAVASCRIPT
   Script otimizado para o design da DotPay
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ============================================
       MENU MOBILE
       Abre e fecha o menu em dispositivos móveis
       ============================================ */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Abre o menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show');
        });
    }

    // Fecha o menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    }

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    /* ============================================
       SCROLL ATIVO
       Destaca o link do menu da seção visível
       ============================================ */
    function scrollActive() {
        const scrollY = window.pageYOffset;
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const sectionLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (sectionLink) {
                    sectionLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    /* ============================================
       SMOOTH SCROLL
       Rolagem suave ao clicar nos links
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#' || !targetId) return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = 80;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       BOTÃO "VER COMO FUNCIONA"
       Pode ser customizado para abrir modal/vídeo
       ============================================ */
    const btnComoFunciona = document.getElementById('btn-como-funciona');

    if (btnComoFunciona) {
        btnComoFunciona.addEventListener('click', function () {
            // Rola para a seção de soluções
            const solucoes = document.getElementById('solucoes');
            if (solucoes) {
                const headerHeight = 80;
                const targetPosition = solucoes.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Alternativa: Abrir modal com vídeo
            // showVideoModal('https://www.youtube.com/embed/...');
        });
    }

    /* ============================================
       SCROLL REVEAL ANIMATIONS
       Animações quando elementos entram na viewport
       ============================================ */

    // Configuração do Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Opcional: parar de observar após animar
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos a serem animados
    const animatedElements = document.querySelectorAll(`
        .section__header,
        .solution-card,
        .feature,
        .benefit,
        .management__visual,
        .management__content,
        .financing-hero__content,
        .financing-hero__visual,
        .financing-ideal,
        .financing-why__card,
        .cta__content,
        .stat
    `);

    // Observar cada elemento
    animatedElements.forEach((el, index) => {
        // Adicionar delay escalonado para cards em grid
        if (el.classList.contains('solution-card') ||
            el.classList.contains('feature') ||
            el.classList.contains('benefit') ||
            el.classList.contains('financing-step') ||
            el.classList.contains('stat')) {
            el.style.transitionDelay = `${(index % 6) * 0.1}s`;
        }
        observer.observe(el);
    });

    /* ============================================
       PARALLAX SUAVE NO HERO
       ============================================ */
    const heroVisual = document.querySelector('.hero__visual');

    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;

            if (scrolled < 800) { // Limitar o efeito
                heroVisual.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    /* ============================================
       CONSOLE LOG
       Easter egg para desenvolvedores
       ============================================ */
    console.log(
        '%c🚀 DOTPAY',
        'font-size: 24px; font-weight: bold; color: #5B4FE6;'
    );
    console.log(
        '%c💼 Plataforma Completa de Pagamentos',
        'font-size: 14px; color: #6B7280;'
    );
});
