<template>
  <div class="tech-card">
    <div class="tech-icon">
      <slot name="icon"></slot>
    </div>
    <span class="tech-name">{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.tech-card {
  background: rgba(15, 20, 25, 0.5);
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* Animação inicial - invisível */
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity 0.5s ease, 
    transform 0.5s ease, 
    border-color 0.3s ease, 
    box-shadow 0.3s ease,
    background 0.3s ease;
}

/* Quando entra na viewport */
.tech-card.animate-in {
  opacity: 1;
  transform: translateY(0);
  animation: cardGlow 1s ease;
}

/* Efeito de hover */
.tech-card:hover {
  border-color: var(--primary-green);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 255, 136, 0.15);
  background: rgba(0, 255, 136, 0.05);
}

/* Efeito de brilho de fundo ao hover */
.tech-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  pointer-events: none;
}

.tech-card:hover::before {
  width: 200%;
  height: 200%;
}

/* Container do ícone */
.tech-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.tech-card:hover .tech-icon {
  transform: scale(1.1) rotate(5deg);
}

/* SVG dentro do ícone */
.tech-icon :deep(svg) {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: filter 0.3s ease;
}

.tech-card:hover .tech-icon :deep(svg) {
  filter: drop-shadow(0 8px 16px rgba(0, 255, 136, 0.4));
}

/* Nome da tecnologia */
.tech-name {
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Courier New', monospace;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.tech-card:hover .tech-name {
  color: var(--primary-green);
}

/* Animação de entrada com brilho */
@keyframes cardGlow {
  0% {
    box-shadow: 0 0 0 rgba(0, 255, 136, 0);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
  }
  100% {
    box-shadow: 0 0 0 rgba(0, 255, 136, 0);
  }
}

/* Delays escalonados para animação em cascata */
.tech-card:nth-child(1) { transition-delay: 0.05s; }
.tech-card:nth-child(2) { transition-delay: 0.1s; }
.tech-card:nth-child(3) { transition-delay: 0.15s; }
.tech-card:nth-child(4) { transition-delay: 0.2s; }
.tech-card:nth-child(5) { transition-delay: 0.25s; }
.tech-card:nth-child(6) { transition-delay: 0.3s; }
.tech-card:nth-child(7) { transition-delay: 0.35s; }
.tech-card:nth-child(8) { transition-delay: 0.4s; }
.tech-card:nth-child(9) { transition-delay: 0.45s; }
.tech-card:nth-child(10) { transition-delay: 0.5s; }

/* Efeito de partículas ao hover (opcional - decorativo) */
.tech-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(0, 255, 136, 0.03) 50%,
    transparent 70%
  );
  transform: rotate(0deg);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.tech-card:hover::after {
  transform: rotate(180deg);
}

/* Estado de focus para acessibilidade */
.tech-card:focus-visible {
  outline: 2px solid var(--primary-green);
  outline-offset: 4px;
}

/* Responsivo */
@media (max-width: 480px) {
  .tech-card {
    padding: 1rem;
  }

  .tech-icon {
    width: 45px;
    height: 45px;
  }

  .tech-name {
    font-size: 0.85rem;
  }

  .tech-card:hover {
    transform: translateY(-4px);
  }
}

/* Desabilitar animações para quem prefere movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .tech-card,
  .tech-icon,
  .tech-name {
    transition: none;
    animation: none;
  }
  
  .tech-card {
    opacity: 1;
    transform: none;
  }

  .tech-card:hover {
    transform: none;
  }

  .tech-card:hover .tech-icon {
    transform: none;
  }
}
</style>