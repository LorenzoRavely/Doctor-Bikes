// ── MENU MOBILE ──
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('menu-open');
}

function closeMenu() {
  const nav = document.getElementById('nav');
  // Desativa transições temporariamente ao fechar
  document.body.classList.add('no-transition');
  nav.classList.remove('menu-open');
  setTimeout(() => document.body.classList.remove('no-transition'), 50);
}

// ── RODA — gera os raios dinamicamente ──
const wheelOuter = document.getElementById('wheelOuter');

if (wheelOuter) {
  for (let i = 0; i < 12; i++) {
    const spoke = document.createElement('div');
    spoke.className = 'spoke';
    spoke.style.transform = `rotate(${i * 30}deg)`;
    wheelOuter.appendChild(spoke);
  }
}

// ── NAVBAR — muda fundo ao rolar ──
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(13,13,13,0.97)';
  } else {
    nav.style.background = 'rgba(13,13,13,0.85)';
  }
});

// ── FAQ — abre/fecha itens ──
function toggleFaq(el) {
  const isOpen = el.classList.contains('open');

  // fecha todos
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('open');
  });

  // se estava fechado, abre o clicado
  if (!isOpen) {
    el.classList.add('open');
  }
}

// ── FADE IN — anima elementos ao entrar na tela ──
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // para de observar depois de animar
      }
    });
  },
  { threshold: 0.12 }
);

fades.forEach(el => observer.observe(el));

// ── FILTRO DE CATEGORIAS ──
document.querySelectorAll('.filtro').forEach(btn => {
  btn.addEventListener('click', () => {

    // Marca o botão ativo
    document.querySelectorAll('.filtro').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');

    const filtro = btn.dataset.filtro;

    document.querySelectorAll('.bv-card').forEach(card => {
      if (filtro === 'todos' || card.dataset.categoria === filtro) {
        card.classList.remove('oculto');
      } else {
        card.classList.add('oculto');
      }
    });
  });
});

// ── BOTÃO LIKE / FAVORITAR ──
document.querySelectorAll('.bv-like').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
  });
});