<template>
  <router-view />
</template>

<script setup>
</script>

<style>
/* Reset global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variáveis CSS globais */
:root {
  --primary-green: #00ff88;
  --secondary-green: #00cc6a;
  --dark-green: #003d29;
  --bg-dark: #0a0e14;
  --bg-darker: #050810;
  --bg-card: #0f1419;
  --text-primary: #e6e6e6;
  --text-secondary: #8892b0;
  --border-color: #1a2332;
}

/* Estilos do body */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-dark);
  color: var(--text-primary);
  overflow-x: hidden;
}

/* Scrollbar customizada */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-darker);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-green);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-green);
}

/* Seleção de texto */
::selection {
  background: var(--primary-green);
  color: var(--bg-dark);
}

::-moz-selection {
  background: var(--primary-green);
  color: var(--bg-dark);
}

/* Links padrão */
a {
  color: var(--primary-green);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-green);
}

/* Títulos */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 600;
}

/* Parágrafos */
p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Código inline */
code {
  font-family: 'Courier New', monospace;
  background: rgba(0, 255, 136, 0.1);
  color: var(--primary-green);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
}

/* Remove outline padrão e adiciona custom */
button:focus,
a:focus,
input:focus,
textarea:focus {
  outline: 2px solid var(--primary-green);
  outline-offset: 2px;
}

/* Animação fade para transições de rota */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>