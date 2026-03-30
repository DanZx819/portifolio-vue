<template>
    <section class="about-preview">
        <SectionTitle numero="02" titulo="Sobre mim"/>
        
        <div class="about-content">
            <p>
            {{p1}}
            </p>
            <p>
            {{ p2 }}
            </p>
        </div>
    </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue';
import { defineProps } from 'vue';

defineProps({
    p1: String,
    p2: String
})
</script>

<style scoped>
/* About Preview */
.about-preview {
  padding: 6rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.about-preview.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.about-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-content p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Responsivo */
@media (max-width: 768px) {
  .about-preview {
    padding: 4rem 0;
  }

  .about-content p {
    font-size: 1rem;
  }

  .cta-section {
    padding: 6rem 0;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-section p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about-preview {
    padding: 3rem 0;
  }

  .cta-section {
    padding: 4rem 0;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-section p {
    font-size: 1rem;
  }
}
</style>