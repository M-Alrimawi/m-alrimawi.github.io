document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.toggle-option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            const sectionId = this.textContent === 'Experience' ? 'experience-content' : 'education-content';
            document.getElementById(sectionId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.toggle-option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            const sectionId = this.textContent === 'Experience' ? 'experience-content' : 'education-content';
            document.getElementById(sectionId).classList.add('active');
        });
    });

    const sections = [
        { id: 'about', link: document.querySelector('a[href="#"]') },
        { id: 'experience', link: document.querySelector('a[href="#experience"]') },
        { id: 'skills', link: document.querySelector('a[href="#skills"]') },
        { id: 'projects', link: document.querySelector('a[href="#projects"]') },
        { id: 'contact', link: document.querySelector('a[href="#contact"]') }
    ];

    function highlightNav() {
        const scrollPosition = window.scrollY + 150;
        let currentSection = 'about';

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section) {
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop) {
                    currentSection = sections[i].id;
                    break;
                }
            }
        }

        sections.forEach(item => {
            if (item.link) {
                item.link.classList.remove('active');
                if (item.id === currentSection) {
                    item.link.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        const icon = this.querySelector('i');
        if (mainNav.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    mainNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('show');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}