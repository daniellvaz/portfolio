import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import FormImage from "../../../assets/img/code.png";
import { Button } from "../../../components/ui/form/button";
import { ProjectCard } from "../../../components/ui/card/project-card";

export function Home() {
  return (
    <main className="w-full bg-background">
      <div className="w-[358px] h-[358px] fixed -top-[179px] -right-[300px] rounded-full bg-primary-main blur-[350px]"></div>
      <div className="w-[358px] h-[358px] fixed -bottom-[179px] -left-[350px] rounded-full bg-primary-main blur-[350px]"></div>
      <section id="home" className="w-full max-w-[1120px] m-auto p-4">
        <div className="w-fit px-4 py-2 mb-6 mt-8 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
          <div className="w-[8px] h-[8px] rounded-full bg-emerald-500"></div>
          <small className="text-xs">Disponível para freelancer</small>
        </div>
        <h1 className="text-zinc-50 md:text-5xl text-2xl font-bold mb-6">
          Prazer, meu nome é Daniel! <br />
          Sou desenvolvedor de software.
        </h1>
        <p className="text-zinc-50 md:text-xl text-lg mb-8">
          Com mais de 5 anos de experiência atuo no desenvolvimento de soluções
          para as mais diversas áreas do mercado, utilizando as tecnologias mais
          modernas alinhado com padrões de códigos e processos muito bem
          definidos para garantir qualidade e uma entrega rápida.
        </p>
        <Button variant="ghost" iconRight={PaperPlaneTiltIcon}>
          Solicitar um orçamento
        </Button>
      </section>
      <section id="stacks_container">
        <div id="stacks_wrapper"></div>
      </section>
      <hr className="my-16 mb-16 border-zinc-800" />
      <section id="projects" className="w-full max-w-[1120px] m-auto p-4">
        <div id="project_container">
          <h2 className="mb-8 text-3xl font-bold text-zinc-50">
            Projetos recentes 🚀
          </h2>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-zinc-50">
            Projetos pessoais 🔥
          </h2>

          <ProjectCard />
        </div>
      </section>
      <section
        id="contact"
        className="w-full max-w-[1120px] p-4 m-auto grid gap-4 grid-cols-1 md:grid-cols-2 relative overflow-hidden"
      >
        <form className="w-full flex flex-col space-y-4">
          <h2 className="text-zinc-50 font-bold text-2xl">Entre em contato</h2>
          <input
            name="name"
            type="text"
            placeholder="Nome completo"
            className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors"
          />
          <input
            name="subject"
            type="text"
            placeholder="Assunto"
            className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors"
          />
          <input
            name="phone"
            type="text"
            placeholder="Telefone"
            className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors"
          />
          <textarea
            rows={5}
            name="description"
            className="p-2 bg-foreground/10 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-primary-main transition-colors"
          ></textarea>
          <Button iconRight={PaperPlaneTiltIcon}>Enviar</Button>
        </form>
        <div className="relative hidden md:block">
          <img
            className="absolute top-0 left-0 w-screen h-full -ml-1/2 object-cover"
            src={FormImage}
            alt="Codding"
          />
        </div>
      </section>
    </main>
  );
}
