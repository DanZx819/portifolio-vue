<script setup>
import { onMounted, ref } from "vue";
import DefaultLayout from "@/layouts/Default.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import Button from "@/components/ui/Button.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";

onMounted(() => {
  // Intersection Observer para animações de scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observar todos os elementos com animação
  const animatedElements = document.querySelectorAll(
    ".hero, .section-title, .skill-category, .tech-card, .about-preview, .about-content, .cta-section"
  );

  animatedElements.forEach((el) => observer.observe(el));
});

// Props dos Componentes
const heroData = ref({
  saudacao: "Olá, meu nome é",
  nome: "Daniel de Oliveira Zanchetta",
  titulo: "Desenvolvedor Full Stack",
  descricao:
    "Eu construo experiências digitais excepcionais. Especializado em criar aplicações web modernas, responsivas e de alta performance.",
  textoBotao: "Ver Meus Projetos",
});

const aboutData = ref({
  p1: "Tenho 18 anos e me chamo Daniel de Oliveira Zanchetta. Atualmente, curso Análise e Desenvolvimento de Sistemas na FATEC Ourinhos, onde venho construindo uma base sólida em programação e desenvolvimento de software. Ao longo da minha formação, tenho buscado não apenas acompanhar o conteúdo acadêmico, mas também evoluir de forma prática, desenvolvendo projetos e explorando novas tecnologias por conta própria.",
  p2: "Hoje, estou focado em me profissionalizar na área de desenvolvimento web, com ênfase em tecnologias modernas como Vue.js e React no front-end, além de Laravel e NestJS no back-end. Tenho como objetivo me tornar um desenvolvedor completo, capaz de construir aplicações eficientes, escaláveis e bem estruturadas, sempre buscando aprendizado contínuo e crescimento profissional.",
});
// Handlers
const handleCtaClick = () => {
  // Scroll suave para a seção de projetos ou redirecionar
  console.log("CTA clicado!");
};

const handleContactClick = () => {
  // Redirecionar para página de contato ou abrir modal
  window.open("https://wa.me/5518996830098?text=Olá%20quero%20falar%20sobre%20um%20projeto!", "_blank");
};
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <HeroSection
      id="home"
      :saudacao="heroData.saudacao"
      :nome="heroData.nome"
      :titulo="heroData.titulo"
      :descricao="heroData.descricao"
      :texto-botao="heroData.textoBotao"
      @cta-click="handleCtaClick"
    />

    <!-- Skills Section -->
    <SkillsSection id="skills" />

    <!-- Project Section-->
    
    <!-- About Preview -->

    <AboutSection id="about" :p1="aboutData.p1" :p2="aboutData.p2" />
    
    <section id="projects">
      <SectionTitle numero="03" titulo="Projetos Frontend"></SectionTitle>
      <ProjectsSection/>
    </section>
    <!-- CTA Section -->
    <section id="contact" class="cta-section">
      <h2>Vamos trabalhar juntos?</h2>
      <p>Estou disponível para novos projetos e oportunidades</p>

      <Button variant="primary" @click="handleContactClick">
        Entre em Contato
      </Button>
    </section>
  </DefaultLayout>
</template>

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

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.cta-section.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.15s;
}

.cta-section h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
}

.cta-section p {
  color: var(--text-secondary);
  font-size: 1.2rem;
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

/* Desabilitar animações para quem prefere movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .about-preview,
  .cta-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>