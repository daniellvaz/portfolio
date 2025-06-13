const projectsContainer = document.getElementById("project_container");

const stackBadge = (title) => `
  <div class="px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-50 rounded">
    <small class="text-xs">${title}</small>
  </div>
`;

const projects = [
  {
    id: Math.random(),
    title: "Active Track - App de rastreamento de frotas",
    description:
      "Nesse projeto desenvolvi um app de rastreamento de frotas. Através do app é possível visualizar a localização dos veículos em tempo real, além de ter acesso a informações como velocidade, rota e histórico de viagens. O app foi desenvolvido utilizando React Native e Node.js.",
    image: "public/img/projects/active-track.png",
    concluded_at: "2024",
    projectStacks: [
      { id: Math.random(), title: "React Native" },
      { id: Math.random(), title: "React query" },
      { id: Math.random(), title: "Google api" },
    ],
  },
  {
    id: Math.random(),
    title:
      "Distribuidora Pneu Top - integração com api de um ERP e automação de processos",
    description:
      "Nesse projetos desenvolvi uma integração com o ERP do Bling e automatizei processos de transporte conectando a plataforma com as empresas de entrega. A medida que os produtos são entregues a integração informa a plataforma do status do pedido facilitando o processo de baixa dos pedidos finalizados. Além disso, passamos a ter um histórico completo do rastreamento do pedido bem como uma média de tempo de enterga e qual empresa é mais rápida nesse processo.",
    image: "public/img/projects/distribuidora-pneu-top.png",
    completed_at: "2024",
    projectStacks: [
      { id: Math.random(), title: "Nodejs" },
      { id: Math.random(), title: "React" },
      { id: Math.random(), title: "Postgres" },
      { id: Math.random(), title: "Mongodb" },
    ],
  },
  {
    id: Math.random(),
    title: "Engaje - Plataforma de gestão de processos seletivos.",
    description:
      "Nesse projeto desenvolvi uma aplicação web aonde a empresa gerencia a abertura de novas vagas pelos seus clientes, cadastrando informações do cargo disponível e disponibilizando ao cliente um visão geral do processo, desde o inicio da triagem até a contratação.",
    image: "public/img/projects/engaje.png",
    completed_at: "2023",
    projectStacks: [
      { id: Math.random(), title: "PHP" },
      { id: Math.random(), title: "Mysql" },
      { id: Math.random(), title: "Javascript" },
    ],
  },
  {
    id: Math.random(),
    title: "OUI - Plataforma de gestão de processos jurídicos.",
    description:
      "Nesse projeto foi desenvolvido uma aplicação para gerenciamento de processos jurídicos. Atuei em alguns pontos do back-end da aplicação que utilizava o Flask do Python (o que fui um grande desavio) e na estruturação do HTML e CSS da plataforma.",
    image: "public/img/projects/oui.png",
    completed_at: "2022",
    projectStacks: [
      { id: Math.random(), title: "Python" },
      { id: Math.random(), title: "Flask" },
      { id: Math.random(), title: "HTML" },
      { id: Math.random(), title: "CSS" },
    ],
  },
];

const projectCard = (project) => `
  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
    <div>
      <div class="w-fit px-4 py-2 mb-6 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
        <div class="w-[8px] h-[8px] rounded-full ${
          project.completed_at ? "primary-light" : "bg-emerald-500"
        }"></div>
        <small class="text-xs">
          ${
            project.completed_at
              ? "Finalizado em " + project.completed_at
              : "Em desenvolvimento"
          }
        </small>
      </div>
      <h2 class="text-2xl font-bold text-zinc-50">
        ${project.title}
      </h2>
      <p class="text-zinc-50 mt-4">
        ${project.description}
      </p>
      <div class="py-4 flex gap-2 items-center">
        ${project.projectStacks.map((stack) => stackBadge(stack.title))}
      </div>
    </div>
    <img class="w-full rounded-lg fade-in" src="${project.image}" alt="${
  project.title
}">
  </div>
`;

projects.forEach((project) => {
  projectsContainer.innerHTML += projectCard(project);
});
