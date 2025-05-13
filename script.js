// alert("kalyanam abhinav");

const menuBtn = document.querySelector('.menu-button');
const menuBtn2 = document.querySelector('.menu-button2');
const menuOpen = document.querySelector('.menu-open');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add("hidden");
    menuBtn2.classList.remove('hidden');
    menuOpen.classList.remove('hidden');
});

menuBtn2.addEventListener('click', () => {
    menuBtn2.classList.add('hidden');
    menuOpen.classList.add('hidden');
    menuBtn.classList.remove('hidden');
});

document.querySelector('#scroll-top')
.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.remove('translate-x-225');
            entry.target.classList.remove('-translate-x-225');
        }
    });
}, {
    threshold: 1
});

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});