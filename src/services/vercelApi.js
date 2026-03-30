import axios from "axios";

const base_rl = "https://api.vercel.com";
const token = import.meta.env.VITE_VERCEL_TOKEN;

const getHeaders = () => ({
  Authorization: `Bearer ${token}`,
});

//Montando Requisição
const api = axios.create({
  baseURL: base_rl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const vercelApi = {
  //Buscar Projetos na vercel

  async getProjects() {
    try {
      const response = await api.get("/v9/projects");
      return response.data.projects || [];
    } catch (error) {
      console.error("Erro ao buscar projetos!", error);
      throw error;
    }
  },
};
