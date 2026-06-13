// Loader
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 800);
    }
});

// Header scroll
const header = document.querySelector('.header-premium');
window.addEventListener('scroll', function () {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Mobile menu
const mobileBtn = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        this.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            if (mobileBtn) {
                mobileBtn.classList.remove('active');
            }
        });
    });
}

// Counter Animation
const counters = document.querySelectorAll('.counter');
const observerOptions = { threshold: 0.5 };

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const start = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(ease * target);
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = target;
                }
            }
            requestAnimationFrame(update);
            counterObserver.unobserve(el);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    });
});
