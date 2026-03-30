<template>
  <button 
    class="cta-button"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="btn-spinner"></span>
    <span :class="{ 'btn-text-hidden': loading }">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
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
</style>