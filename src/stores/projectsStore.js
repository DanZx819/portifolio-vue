import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { vercelApi } from "@/services/vercelApi";

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const projectCount = computed(() => projects.value.length);
  const hasProjects = computed(() => projects.value.length > 0);

  const sortedProjects = computed(() => {
    return [...projects.value].sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  });

  async function fetchProjects() {
    loading.value = true;
    error.value = null;

    try {
      // Buscar dados
      const rawProjects = await vercelApi.getProjects();

      //Transformar em dados
      projects.value = rawProjects.map(transformProject);

      //Log para debug
      console.log("Projetos carregados:", projects.value);
    } catch (err) {
      error.value = "Erro ao carregar projetos";
      console.error("Erro ao buscar projetos", err);
    } finally {
      loading.value = false;
    }
  }

  /**
   * Transforma os dados crus da API em dados formatados
   */
  function transformProject(rawProject) {
    // Pegar URL de produção
    const productionAlias = rawProject.targets?.production?.alias?.[0];
    const url = productionAlias
      ? `https://${productionAlias}`
      : `https://${rawProject.name}.vercel.app`;

    // Gerar URL do screenshot
    const encodedUrl = encodeURIComponent(url);
    const screenshot = `https://v1.screenshot.11ty.dev/${encodedUrl}/opengraph/`;

    // Formatar nome (capitalizar palavras)
    const name = rawProject.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Mapear framework para nome amigável
    const frameworkMap = {
      vite: "Vue.js",
      nextjs: "Next.js",
      react: "React",
      vue: "Vue.js",
      nuxtjs: "Nuxt.js",
      gatsby: "Gatsby",
      astro: "Astro",
      svelte: "Svelte",
      remix: "Remix",
    };
    const framework =
      frameworkMap[rawProject.framework] || rawProject.framework || "Website";

    // Pegar info do Git
    const gitRepo = rawProject.link?.repo || null;
    const gitOrg = rawProject.link?.org || null;
    const gitUrl =
      gitRepo && gitOrg ? `https://github.com/${gitOrg}/${gitRepo}` : null;

    // Retornar objeto formatado
    return {
      id: rawProject.id,
      name: name,
      url: url,
      screenshot: screenshot,
      framework: framework,
      createdAt: rawProject.createdAt,
      updatedAt: rawProject.updatedAt,
      git: {
        url: gitUrl,
        repo: gitRepo,
        org: gitOrg,
      },
    };
  }

  /**
   * Limpa os dados (útil para refresh)
   */
  function clearProjects() {
    projects.value = [];
    error.value = null;
  }

  /**
   * Busca um projeto específico pelo ID
   */
  function getProjectById(id) {
    return projects.value.find((p) => p.id === id);
  }

  // ============================================
  // RETURN (expor para os componentes)
  // ============================================

  return {
    // State
    projects,
    loading,
    error,

    // Getters
    projectCount,
    hasProjects,
    sortedProjects,

    // Actions
    fetchProjects,
    clearProjects,
    getProjectById,
  };
});
