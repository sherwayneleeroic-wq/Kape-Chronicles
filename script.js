/* ============================================
   KAPE CHRONICLES — script.js
   ============================================ */

// ---------- 1. Hamburger Menu (Condition) ----------
const toggle = document.querySelector('.hamburger');
const nav = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
  });
}

// ---------- 2. Array — Featured Drinks ----------
const drinks = ['Espresso', 'Latte', 'Cold Brew', 'Mocha'];
console.log('We serve:', drinks.join(', '));

// ---------- 3. Loop + Condition — Premium Price Check ----------
const prices = [120, 140, 170, 170, 180, 190];
let premiumTotal = 0;
for (const p of prices) {
  if (p >= 170) {
    premiumTotal += p;
  }
}
console.log('Premium drinks total:', premiumTotal);

// ---------- 4. Bonus: Highlight Active Nav Link ----------
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#main-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ---------- 5. Bonus: Smooth Scroll for Anchor Links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});