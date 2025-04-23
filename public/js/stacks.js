const stacksContainer = document.getElementById("stacks_wrapper");

const stacks = [
  {
    id: Math.random(),
    image: "public/img/stacks/bootstrap.svg",
    alt: "Bootstrap",
  },
  { id: Math.random(), image: "public/img/stacks/expo.svg", alt: "Expo" },
  { id: Math.random(), image: "public/img/stacks/github.svg", alt: "Github" },
  {
    id: Math.random(),
    image: "public/img/stacks/laravel.svg",
    alt: "Laravel",
  },
  { id: Math.random(), image: "public/img/stacks/nextjs.svg", alt: "Nextjs" },
  { id: Math.random(), image: "public/img/stacks/nodejs.svg", alt: "Nodejs" },
  { id: Math.random(), image: "public/img/stacks/php.svg", alt: "PHP" },
  {
    id: Math.random(),
    image: "public/img/stacks/prisma.svg",
    alt: "Prismajs",
  },
  { id: Math.random(), image: "public/img/stacks/radix.svg", alt: "Radix-ui" },
  { id: Math.random(), image: "public/img/stacks/react.svg", alt: "React" },
  {
    id: Math.random(),
    image: "public/img/stacks/tailwindcss.svg",
    alt: "Tailwindcss",
  },
];

stacks.forEach((stack) => {
  const img = document.createElement("img");

  img.src = stack.image;
  img.alt = stack.alt;

  stacksContainer.appendChild(img);
});
