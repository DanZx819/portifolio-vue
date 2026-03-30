<template>
  <h2 class="section-title">
    <span class="title-number">{{ numero }}.</span> {{ titulo }}
  </h2>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    numero: String,
    titulo: String
})
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-number {
  color: var(--primary-green);
  font-family: 'Courier New', monospace;
  font-size: 2rem;
}
</style>