import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import FormImage from "../../../assets/img/code.png";
import { Button } from "../../../components/ui/form/button";
import { ProjectCard } from "../../../components/ui/card/project-card";
import { useGetProjects } from "../../../http/generated/project/project";
import { useGetStacks } from "../../../http/generated/stack/stack";
import { ContactForm } from "./components/contact-form";
import { Text } from "@/components/typograph/text";
import { Heading } from "@/components/typograph/heading";

export function Home() {
  const { data: projects } = useGetProjects({
    populate: "*",
  });
  const { data: stacks } = useGetStacks({
    populate: "*",
  });

  return (
    <main className="w-full bg-background mt-[5rem]">
      <div className="w-[358px] h-[358px] fixed -top-[179px] -right-[300px] rounded-full bg-primary-main blur-[350px]"></div>
      <div className="w-[358px] h-[358px] fixed -bottom-[179px] -left-[350px] rounded-full bg-primary-main blur-[350px]"></div>
      <section id="home" className="w-full max-w-[1120px] m-auto p-4">
        <div className="w-fit px-4 py-2 mb-6 mt-8 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
          <div className="w-[8px] h-[8px] rounded-full bg-emerald-500"></div>
          <Text as="small" size="xs">
            Disponível para novos projetos
          </Text>
        </div>

        <Heading as="h1" size="3xl" className="mb-4">
          Olá, nós somos a Moveup! <br />
          Transformamos ideias em soluções digitais inteligentes.
        </Heading>
        <Text className="mb-12">
          Na Moveup Tecnologia, desenvolvemos softwares, aplicativos, automações{" "}
          <br />e integrações sob medida para impulsionar o crescimento da sua
          empresa.
        </Text>
        <Button variant="ghost" iconRight={PaperPlaneTiltIcon}>
          Solicitar um orçamento
        </Button>
      </section>
      <section id="stacks_container">
        <div id="stacks_wrapper">
          {stacks &&
            stacks.data &&
            stacks.data.map((stack) => (
              <img src={import.meta.env.VITE_STRAPI_URL + stack.image?.url} />
            ))}
        </div>
      </section>
      <hr className="my-16 mb-16 border-zinc-800" />
      <section id="projects" className="w-full max-w-[1120px] m-auto p-4">
        <div id="project_container">
          <Heading className="mb-4">Projetos recentes 🚀</Heading>
        </div>

        {projects &&
          projects.data &&
          projects.data.map(
            (item) =>
              !item.isPersonal && <ProjectCard data={item} key={item.id} />
          )}

        <div className="mt-16">
          <Heading className="mb-4">Projetos pessoais 🔥</Heading>

          {projects &&
            projects.data &&
            projects.data.map(
              (item) =>
                item.isPersonal && <ProjectCard data={item} key={item.id} />
            )}
        </div>
      </section>
      <section
        id="contact"
        className="w-full max-w-[1120px] p-4 m-auto grid gap-4 grid-cols-1 md:grid-cols-2 relative overflow-hidden"
      >
        <ContactForm />
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
