<template>
  <section class="hero">
    <div class="hero-content">
      <p class="hero-greeting">{{ saudacao }}</p>
      <h1 class="hero-name">{{ nome }}</h1>
      <h2 class="hero-title">{{ titulo }}</h2>
      <p class="hero-description">
        {{ descricao }}
      </p>
      <Button @click="$emit('cta-click')">{{ ctaText }}</Button>
    </div>

    <div class="hero-image">
      <div class="image-placeholder">
        <span class="code-symbol">&lt;/&gt;</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import Button from "../ui/Button.vue";
defineProps({
  saudacao: String,
  nome: String,
  titulo: String,
  descricao: String,
  ctaText: { type: String, default: "Ver meus projetos" },
});

defineEmits(["cta-click"]);
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-greeting {
  color: var(--primary-green);
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
}

.hero-name {
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.1;
}

.hero-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 540px;
}

.cta-button {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--primary-green);
  color: var(--primary-green);
  font-size: 1rem;
  font-family: "Courier New", monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  font-weight: 600;
}

.cta-button:hover {
  background: rgba(0, 255, 136, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 400px;
  height: 400px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 136, 0.1),
    rgba(0, 204, 106, 0.05)
  );
  border: 2px solid var(--primary-green);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-placeholder::before {
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 255, 136, 0.1),
    transparent
  );
  animation: shimmer 3s infinite;
}

.image-placeholder {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 204, 106, 0.05));
  border: 2px solid var(--primary-green);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-placeholder::before {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 136, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.code-symbol {
  font-size: 8rem;
  color: var(--primary-green);
  font-family: 'Courier New', monospace;
  opacity: 0.3;
  z-index: 1;
}

/* Responsivo */
@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-name {
    font-size: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .image-placeholder {
    width: 300px;
    height: 300px;
  }

  .code-symbol {
    font-size: 6rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .category-title {
    font-size: 1.5rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .cta-section h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .image-placeholder {
    width: 250px;
    height: 250px;
  }

  .code-symbol {
    font-size: 4rem;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

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
}
</style>