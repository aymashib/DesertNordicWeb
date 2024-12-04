document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const container = document.querySelector(".container");
  const particlesContainer = document.getElementById("particles");
  const particleCount = 20;

  // Función para crear partículas
  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 256}px`;
    particle.style.bottom = `${Math.random() * 20}px`;
    particlesContainer.appendChild(particle);

    animateParticle(particle);
  }

  // Función para animar partículas
  function animateParticle(particle) {
    const duration = 3000 + Math.random() * 2000;
    const keyframes = [
      { transform: `translate(${Math.random() * 256}px, ${-Math.random() * 40}px)` },
      { transform: `translate(${Math.random() * 256}px, ${-Math.random() * 20}px)` },
      { transform: `translate(${Math.random() * 256}px, 0px)` }
    ];

    particle.animate(keyframes, {
      duration: duration,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  }

  // Crear partículas
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }

  // Ocultar loader después de 3 segundos
  setTimeout(() => {
    loader.classList.add("hidden");
    container.classList.remove("hidden");
  }, 3000);

  // Actualización de fecha y hora
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  function updateDateTime() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    dateElement.textContent = `${day}/${month}/${year}`;
    timeElement.textContent = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
