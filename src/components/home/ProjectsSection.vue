<template>
  <div class="projects-test">
    
   

    <!-- Loading -->
    <div v-if="store.loading" class="loading">
      Carregando projetos...
    </div>

    <!-- Erro -->
    <div v-if="store.error" class="error">
       {{ store.error }}
    </div>

    <!-- Projetos -->
    <div v-if="store.hasProjects" class="projects-container">
      <!-- Grid de Cards -->
      <div class="projects-grid">
        <div 
          v-for="project in store.sortedProjects" 
          :key="project.id"
          class="project-card"
        >
          <!-- Screenshot -->
          <div class="project-image">
            <img :src="project.screenshot" :alt="project.name" />
          </div>

          <!-- Info -->
          <div class="project-info">
            <h3>{{ project.name }}</h3>
            
            <p class="framework">
              <strong>Framework:</strong> {{ project.framework }}
            </p>

            <div class="links">
              <a :href="project.url" target="_blank" class="btn-view">
                Ver Site
              </a>
              
              <a 
                v-if="project.git.url" 
                :href="project.git.url" 
                target="_blank"
                class="btn-github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjectsStore } from '@/stores/projectsStore'
import { onMounted } from 'vue';

const store = useProjectsStore()

onMounted(() =>{
    store.fetchProjects()
})
</script>

<style scoped>
.projects-test {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
}

h1 {
  color: #00ff88;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

h2 {
  color: #00ff88;
  margin: 2rem 0;
}

/* Botão */
button {
  padding: 1rem 2rem;
  background: #00ff88;
  color: #0a0e14;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover:not(:disabled) {
  background: #00cc6a;
  transform: translateY(-2px);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading */
.loading {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #8892b0;
}

/* Erro */
.error {
  padding: 1rem;
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid #ff4444;
  border-radius: 8px;
  color: #ff4444;
  margin: 1rem 0;
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* Card */
.project-card {
  background: rgba(15, 20, 25, 0.5);
  border: 1px solid #1a2332;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: #00ff88;
  box-shadow: 0 15px 40px rgba(0, 255, 136, 0.15);
}

/* Imagem */
.project-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #0a0e14;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

/* Info */
.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  color: #e6e6e6;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.framework {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* Links */
.links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.links a {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-view {
  background: #00ff88;
  color: #0a0e14;
  flex: 1;
  justify-content: center;
}

.btn-view:hover {
  background: #00cc6a;
  transform: translateY(-2px);
}

.btn-github {
  background: transparent;
  border: 1px solid #8892b0;
  color: #8892b0;
}

.btn-github:hover {
  border-color: #00ff88;
  color: #00ff88;
}

/* Debug */
.debug {
  padding: 1rem;
  border-top: 1px solid #1a2332;
  background: rgba(0, 0, 0, 0.2);
}

.debug summary {
  cursor: pointer;
  color: #8892b0;
  font-size: 0.85rem;
  padding: 0.5rem;
}

.debug summary:hover {
  color: #00ff88;
}

.debug pre {
  margin-top: 1rem;
  padding: 1rem;
  background: #0a0e14;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.75rem;
  color: #00ff88;
  line-height: 1.5;
}

/* Responsivo */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .links {
    flex-direction: column;
  }
}
</style>