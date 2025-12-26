// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(!href || href === '#') return;
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Mobile menu: toggles nav visibility
const mobileBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
mobileBtn && mobileBtn.addEventListener('click', () => {
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Open resume preview in a new window when user clicks iframe area (optional little UX)
const resumeIframe = document.querySelector('.resume-preview iframe');
if(resumeIframe){
  resumeIframe.addEventListener('click', () => {
    window.open('Radhika_Kumbhar.pdf', '_blank', 'noopener');
  });
}
