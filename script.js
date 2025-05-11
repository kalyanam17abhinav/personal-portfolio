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

