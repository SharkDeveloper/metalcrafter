
// Фильтрация проектов
document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация проектов в портфолио
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаление активного класса у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавление активного класса текущей кнопке
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.add('show');
                    item.classList.remove('hidden');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Инициализация: карточки сразу видимы, без автоклика (на случай если стиль .project-item переопределят)
    projectItems.forEach(item => item.classList.add('show'));
    
    // Анимация при прокрутке
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Наблюдение за элементами с классом fade-in
    document.querySelectorAll('.fade-in-element').forEach(el => {
        observer.observe(el);
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация для hero-секции при загрузке
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.style.opacity = '0';
    if (heroSubtitle) heroSubtitle.style.opacity = '0';
    if (heroButtons) heroButtons.style.opacity = '0';
    
    setTimeout(() => {
        if (heroTitle) {
            heroTitle.style.transition = 'opacity 1s ease-out';
            heroTitle.style.opacity = '1';
        }
        if (heroSubtitle) {
            heroSubtitle.style.transition = 'opacity 1s ease-out 0.3s';
            heroSubtitle.style.opacity = '1';
        }
        if (heroButtons) {
            heroButtons.style.transition = 'opacity 1s ease-out 0.6s';
            heroButtons.style.opacity = '1';
        }
    }, 100);
});