const stacksContainer = document.getElementById("stacks_wrapper");
const projectsContainer = document.getElementById("project_container");

const stacks = [
  {
    id: Math.random(),
    image: "/public/img/stacks/bootstrap.svg",
    alt: "Bootstrap",
  },
  { id: Math.random(), image: "/public/img/stacks/expo.svg", alt: "Expo" },
  { id: Math.random(), image: "/public/img/stacks/github.svg", alt: "Github" },
  {
    id: Math.random(),
    image: "/public/img/stacks/laravel.svg",
    alt: "Laravel",
  },
  { id: Math.random(), image: "/public/img/stacks/nextjs.svg", alt: "Nextjs" },
  { id: Math.random(), image: "/public/img/stacks/nodejs.svg", alt: "Nodejs" },
  { id: Math.random(), image: "/public/img/stacks/php.svg", alt: "PHP" },
  {
    id: Math.random(),
    image: "/public/img/stacks/prisma.svg",
    alt: "Prismajs",
  },
  { id: Math.random(), image: "/public/img/stacks/radix.svg", alt: "Radix-ui" },
  { id: Math.random(), image: "/public/img/stacks/react.svg", alt: "React" },
  {
    id: Math.random(),
    image: "/public/img/stacks/tailwindcss.svg",
    alt: "Tailwindcss",
  },
];

const projects = [
  {
    id: Math.random(),
    title:
      "Distribuidora Pneu Top - integração com api de um ERP e automação de processos",
    description:
      "Nesse projetos desenvolvi uma integração com o ERP do Bling e automatizei processos de transporte conectando a plataforma com as empresas de entrega. A medida que os produtos são entregues a integração informa a plataforma do status do pedido facilitando o processo de baixa dos pedidos finalizados. Além disso, passamos a ter um histórico completo do rastreamento do pedido bem como uma média de tempo de enterga e qual empresa é mais rápida nesse processo.",
    image: "https://placehold.co/600x400",
    concluded_at: null,
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
    image: "https://placehold.co/600x400",
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
    image: "https://placehold.co/600x400",
    completed_at: "2022",
    projectStacks: [
      { id: Math.random(), title: "Python" },
      { id: Math.random(), title: "Flask" },
      { id: Math.random(), title: "HTML" },
      { id: Math.random(), title: "CSS" },
    ],
  },
];

const stackBadge = (title) => `
  <div class="px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-50 rounded">
    <small class="text-xs">${title}</small>
  </div>
`;

const projectCard = (project) => `
  <div class="mt-8 grid grid-cols-2 gap-2 items-start">
    <div>
      <div class="w-fit px-4 py-2 mb-6 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
        <div class="w-[8px] h-[8px] rounded-full ${
          project.completed_at ? "bg-indigo-500" : "bg-emerald-500"
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
        ${project.projectStacks.forEach((stack) => stackBadge(stack.title))}
      </div>
    </div>
    <img class="w-full rounded-lg" src="${project.image}" alt="${
  project.title
}">
  </div>
`;

projects.forEach((project) => {
  projectsContainer.innerHTML += projectCard(project);
});

stacks.forEach((stack) => {
  const img = document.createElement("img");

  img.src = stack.image;
  img.alt = stack.alt;

  stacksContainer.appendChild(img);

  stacks.forEach((stack) => {
    const img = document.createElement("img");

    img.src = stack.image;
    img.alt = stack.alt;

    stacksContainer.appendChild(img);
  });
});
