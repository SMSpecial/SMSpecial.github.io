/**
 * Special Mark Technologies - Official Website Script
 * business development & Information technologies company
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. التحكم في شريط التنقل (Header Scroll Effect)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            // تحسين المظهر عند النزول لأسفل لجعل القراءة أسهل
            header.classList.add('bg-slate-950', 'shadow-xl', 'py-3');
            header.classList.remove('bg-slate-900/95', 'backdrop-blur-sm', 'py-4');
        } else {
            // العودة للمظهر الافتراضي عند الصعود لأعلى الصفحة
            header.classList.remove('bg-slate-950', 'shadow-xl', 'py-3');
            header.classList.add('bg-slate-900/95', 'backdrop-blur-sm', 'py-4');
        }
    });

    // 2. إضافة تأثير ظهور تدريجي عند التمرير (Scroll Reveal Effect)
    const cards = document.querySelectorAll('#services .grid > div');
    
    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    };

    // إعداد البطاقات لتكون مخفية في البداية وتظهر بسلاسة
    cards.forEach(card => {
        card.classList.add('transition-all', 'duration-700', 'ease-out', 'transform', 'opacity-0', 'translate-y-10');
    });

    // تشغيل التأثير عند التمرير وعند تحميل الصفحة لأول مرة
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 3. تأكيد إرسال النموذج بشكل احترافي (Form Submission Handler)
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // نترك النموذج يرسل البيانات بشكل طبيعي إلى Web3Forms
            // ولكن نضيف تأثير بصري اختياري لمنع الضغط المزدوج
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "Sending Securely...";
                submitBtn.classList.add('bg-slate-700', 'cursor-not-allowed');
            }
        });
    }

    console.log("⚡ Special Mark Technologies Core JS Loaded Successfully.");
});
