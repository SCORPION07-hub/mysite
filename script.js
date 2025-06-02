// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleDark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Exemplo de chatbot (simples)
console.log("Chatbot ativo: envie uma mensagem para iniciar.");
