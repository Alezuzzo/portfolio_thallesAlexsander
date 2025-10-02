export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  repoUrl?: string;
  tags: string[];
}

export const userProjects: Project[] = [
  {
    id: 1,
    title: "Site para venda de mandalas",
    description:
      "Uma plataforma para venda de mandalas completa desenvolvida com React, com formulário de encomenda que manda email para a artísta com as específicações da encomenda",
    imageUrl: "/mandalas.png",
    projectUrl: "https://ozzum-mandala.vercel.app/",
    repoUrl: "https://github.com/Alezuzzo/ozzum-mandala",
    tags: ["React", "TypeScript", "Cypress"],
  },
  {
    id: 2,
    title: "Landing page para Rafter Engenharia",
    description:
      "Uma landing page desenvolvida para a Rafter Engenharia, utilizando HTML, CSS e JavaScript puro.",
    imageUrl: "/rafter.png",
    projectUrl: "https://rafterengenharia.com.br/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "Blog Pessoal com Flex Box",
    description:
      "Um blog pessoal com conteúdo e produtos, com planos.",
    imageUrl: "/flexblog.png",
    projectUrl: "https://flex-blog-sage.vercel.app/",
    repoUrl: "https://github.com/Alezuzzo/FlexBlog",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Site expositivo de guitarras",
    description:
      "Um site expositivo para uma empresa de guitarras, com formulário de encomendas.",
    imageUrl: "/sitemusica.png",
    projectUrl: "https://muzzoguitars.vercel.app/",
    repoUrl: "https://github.com/Alezuzzo/Muzzoguitars",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
  },
  {
    id: 5,
    title: "Sistema de orçamentos, contratos e dashboard",
    description:
      "Sistema de gestão para salão de beleza focado na criação dinâmica de orçamentos e contratos. Com dashboard para análise de rendimentos e foi desenvolvido com tecnologias modernas. Se trata de projeto exclusivo, sem repositório público.",
    imageUrl: "/sistemaHS.png",
    projectUrl: "#",
    tags: ["React", "Typescript", "Express", "POSTGRES", "SQL"],
  },
  {
    id: 6,
    title: "Site expositivo para clínica odontológica",
    description:
      "Site expositivo criado com o objetivo de ser um modelo para clínicas odontológicas, desenvolvido com React, Typescript e estilizado com TailwindCSS.",
    imageUrl: "/odonto.png",
    projectUrl: "https://clinica-web-blond.vercel.app/",
    repoUrl: "https://github.com/Alezuzzo/Clinica_web",
    tags: ["React", "Typescript", "TailwindCSS"],
  },
];
