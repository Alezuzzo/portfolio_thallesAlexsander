export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const workExperiences: Experience[] = [
  {
    id: 1,
    role: 'Desenvolvedor low code',
    company: 'Ponto e Vírgula',
    period: 'Maio 2024 - Julho 2025',
    description: [
      'Desenvolvi uma plataforma de geração de orçamentos para um estúdio de música, utilizando AppSheet, uma tecnologia desenvolvida pela Google.',
      'Atuei no desenvolvimento de uma feature para criação de PDF dinamicamente.',
      'Desenvolvi uma feature para geração automática de contratos a partir dos orçamentos aprovados.',
      'Implementei patterns para garantir uma estrutura limpa e organizada, para um desenvolvimento ágil e escalável.',
      'Atualmente a aplicação já conta com mais de 1900 orçamentos criados, sendo mais de 750 aprovados.'
    ],
  },
  {
    id: 2,
    role: 'Estagiário',
    company: 'Prefeitura Municipal de Pedralva',
    period: 'Fevereiro 2022 - Março 2024',
    description: [
      'Desenvolvi sistemas web de controle de estoque com React, Tailwind CSS e AppSheet, resultando em maior automação e precisão.',
      'Modelei e otimizei fluxos operacionais internos, reduzindo o retrabalho e facilitando a visualização de dados em tempo real.',
      'Elaborei planilhas automatizadas com fórmulas avançadas e validações de dados.',
      'Estruturei processos de digitalização e organização documental, promovendo maior agilidade na localização de arquivos.',
      'Participei ativamente na análise de requisitos e entrega de soluções sob medida para diferentes setores da Prefeitura.'
    ],
  },
  {
    id: 3,
    role: 'Web Designer',
    company: 'Boomerangoo',
    period: 'Outubro 2021 - Fevereiro 2022',
    description: [
      'Criei wireframes, protótipos navegáveis e interfaces finais no Figma, contribuindo com decisões estratégicas de UX/UI.',
      'Atuei na coesão visual e definição de um design system escalável, promovendo consistência em todos os módulos da aplicação.',
      'Colaborei em um ambiente ágil utilizando Scrum e Trello para garantir entregas iterativas.',
      'Realizei testes automatizados utilizando Cypress para validação de funcionalidades em aplicações web.'
    ],
  },
  {
    id: 4,
    role: 'Desenvolvedor e Gerente de Comunicações',
    company: 'byron.solutions',
    period: 'Maio 2020 - Fevereiro 2022',
    description: [
      'Idealizei, projetei e desenvolvi interfaces responsivas para websites e sistemas personalizados, utilizando HTML, CSS, JavaScript e jQuery.',
      'Transformei ideias de clientes em protótipos interativos e funcionais, utilizando softwares como Figma e Photoshop.',
      'Gerenciei a comunicação digital da marca, incluindo redes sociais e identidade visual.',
      'Criei apresentações comerciais, landing pages e materiais de marketing para aquisição de novos clientes.',
      'Coordenei pequenas equipes e freelancers para execução de projetos multimídia.'
    ],
  },
];
