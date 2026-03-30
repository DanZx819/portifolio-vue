<template>
  <div class="skill-category">
    <h3 class="category-title">
      <span v-if="icon" class="category-icon">{{ icon }}</span>
      {{ title }}
    </h3>
    <div class="tech-grid">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.skill-category {
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Quando entra na viewport */
.skill-category.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Título da categoria */
.category-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-color);
  position: relative;
  font-weight: 600;
  transition: color 0.3s ease;
}

/* Ícone emoji da categoria */
.category-icon {
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  filter: grayscale(0.3);
}

.skill-category.animate-in .category-icon {
  animation: iconBounce 0.6s ease;
}

@keyframes iconBounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Linha decorativa animada */
.category-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, var(--primary-green), transparent);
  transition: width 0.8s ease;
}

.skill-category.animate-in .category-title::after {
  width: 100%;
}

/* Efeito de hover na categoria inteira */
.skill-category:hover .category-title {
  color: var(--primary-green);
}

.skill-category:hover .category-icon {
  transform: scale(1.1);
  filter: grayscale(0);
}

/* Grid de tecnologias */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 2rem;
}

/* Efeito de brilho sutil ao entrar */
.skill-category.animate-in {
  animation: categoryGlow 1.5s ease;
}

@keyframes categoryGlow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.05);
  }
}

/* Responsivo */
@media (max-width: 968px) {
  .skill-category {
    margin-bottom: 3rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.5rem;
  }

  .category-title {
    font-size: 1.6rem;
  }

  .category-icon {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .category-title {
    font-size: 1.5rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}

@media (max-width: 480px) {
  .skill-category {
    margin-bottom: 2.5rem;
  }

  .category-title {
    font-size: 1.3rem;
    padding-bottom: 0.75rem;
  }

  .category-icon {
    font-size: 1.5rem;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Desabilitar animações para quem prefere movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .skill-category {
    opacity: 1;
    transform: none;
    transition: none;
    animation: none;
  }

  .category-title::after {
    width: 100%;
    transition: none;
  }

  .category-icon {
    animation: none;
  }
}
</style>