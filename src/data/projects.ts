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
    title: "Site de conversão de links para QR CODE",
    description:
      "Um site desenvolvido para conversão de links para QR CODE, desenvolvido com NEXTJS e Typescript.",
    imageUrl: "/qr.png",
    projectUrl: "https://qr-code-generator-wheat.vercel.app/",
    repoUrl: "https://github.com/Alezuzzo/qrCode-Generator",
    tags: ["Next.js", "Typescript"],
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
      "Sistema para criação dinâmica de orçamentos em tempo mínimo e criação de contratos a partir destes orçamentos, com dashboard integrado para visualização de dados como por exemplo o rendimento com orçamentos aprovados construído com React, Typescript e para o backend Express, além do banco de dados em postgres sql. O sistema foi criado de forma exclusiva para um salão de beleza, por isso, é possível ver apenas prints do sistema funcionando.",
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
