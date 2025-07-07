import type { Project } from "../../../../http/generated/api.schemas";

interface ProjectCardProps {
  data?: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
  if (!data) {
    return <p>Sem items para mostrar</p>;
  }

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start mb-12">
      <div>
        <div className="w-fit px-4 py-2 mb-6 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
          <div
            data-concluded={!!data.concludedAt}
            className="w-[8px] h-[8px] rounded-full data-[concluded=true]:bg-primary-main data-[concluded=false]:bg-blue-500"
          ></div>
          <small className="text-xs">
            {data.concludedAt
              ? `Finalizado em ${data.concludedAt}`
              : "Em andamento"}
          </small>
        </div>
        <h2 className="text-2xl font-bold text-zinc-50">{data.title}</h2>
        <p className="text-zinc-50 my-4">{data.description}</p>
        <a
          target="_blank"
          href={data.repoUrl}
          rel="noopener noreferrer"
          className="text-zinc-50 underline"
        >
          Repositório Github
        </a>
        <div className="py-4 flex gap-2 items-center">
          {data.stacks &&
            data.stacks?.map((stack) => (
              <div
                key={stack.id}
                className="px-3 py-1 bg-foreground/10 border border-zinc-600 text-zinc-50 rounded"
              >
                <small className="text-xs">{stack.name}</small>
              </div>
            ))}
        </div>
      </div>
      <img
        src={import.meta.env.VITE_STRAPI_URL + data.cover?.url}
        className="w-full rounded-lg fade-in"
        alt={data.cover?.alternativeText}
      />
    </div>
  );
}
