<template>
  <div class="app-layout">
    <!-- Header -->
    <header class="header">
      <div class="container header-content">
        <a href="#home" class="logo" @click.prevent="scrollToSection('home')">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">DZ</span>
          <span class="logo-bracket">/&gt;</span>
        </a>

        <nav class="nav" :class="{ 'nav-open': menuOpen }">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="`#${item.id}`"
            class="nav-link"
            @click.prevent="handleMenuClick(item.id)"
          >
            <span class="nav-number">{{ item.number }}.</span>
            {{ item.label }}
          </a>
        </nav>

        <!-- Menu Hamburger (Mobile) -->
        <button 
          class="menu-toggle" 
          @click="toggleMenu"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          :aria-expanded="menuOpen"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <slot></slot>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; {{ currentYear }} Daniel de Oliveira Zanchetta. Todos os direitos reservados.</p>
        <div class="social-links">
          <a href="https://github.com/DanZx819" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/daniel-zanchetta-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>

    <!-- Orbs decorativos -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <!-- Grid overlay -->
    <div class="grid-overlay"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const menuOpen = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const menuItems = [
  { id: 'home', label: 'Home', number: '00' },
  { id: 'skills', label: 'Skills', number: '01' },
  { id: 'about', label: 'Sobre', number: '02' },
  { id: 'projects', label: 'Projetos', number: '03' },
  { id: 'contact', label: 'Contato', number: '04' }
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`)
  
  if (element) {
    const headerOffset = 80 // Altura do header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleMenuClick = (sectionId) => {
  scrollToSection(sectionId)
  menuOpen.value = false // Fechar menu mobile após clicar
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 14, 20, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'Courier New', monospace;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
}

.logo:hover {
  color: var(--primary-green);
  transform: scale(1.05);
}

.logo-bracket {
  color: var(--primary-green);
  font-size: 1.8rem;
}

.logo-text {
  color: var(--text-primary);
}

/* Navigation */
.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--primary-green);
  transform: translateY(-2px);
}

.nav-number {
  color: var(--primary-green);
  font-size: 0.85rem;
}

/* Menu Toggle (Mobile) */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger-line {
  width: 30px;
  height: 2px;
  background: var(--primary-green);
  transition: all 0.3s ease;
}

.menu-toggle:hover .hamburger-line {
  background: var(--secondary-green);
}

/* Main Content */
.main-content {
  min-height: 100vh;
  padding-top: 80px; /* Altura do header */
}

/* Footer */
.footer {
  background: rgba(15, 20, 25, 0.8);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
  margin-top: 6rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: var(--text-secondary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.social-links a:hover {
  color: var(--primary-green);
  transform: translateY(-3px);
}

/* Orbs decorativos */
.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--primary-green);
  top: -250px;
  right: -250px;
  animation: float 20s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--primary-green);
  bottom: -200px;
  left: -200px;
  animation: float 25s ease-in-out infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--secondary-green);
  top: 50%;
  left: 50%;
  animation: float 30s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

/* Grid overlay */
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

/* Responsivo */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(10, 14, 20, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    gap: 2rem;
    border-left: 1px solid var(--border-color);
    transition: right 0.3s ease;
  }

  .nav.nav-open {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .main-content {
    padding-top: 80px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .header-content {
    height: 70px;
  }

  .logo {
    font-size: 1.3rem;
  }

  .logo-bracket {
    font-size: 1.5rem;
  }

  .main-content {
    padding-top: 70px;
  }
}
</style>