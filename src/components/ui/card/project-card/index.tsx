import { Text } from "@/components/typograph/text";
import type { Project } from "../../../../http/generated/api.schemas";
import { Heading } from "@/components/typograph/heading";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  data?: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
  if (!data) {
    return <Text>Sem items para mostrar</Text>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start mb-12">
      <div>
        <div className="w-fit px-4 py-2 mb-6 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
          <div
            data-concluded={!!data.concludedAt}
            className="w-[8px] h-[8px] rounded-full data-[concluded=true]:bg-primary-main data-[concluded=false]:bg-blue-500"
          ></div>
          <Text as="small">
            {data.concludedAt
              ? `Finalizado em ${data.concludedAt}`
              : "Em andamento"}
          </Text>
        </div>
        <Heading className="mb-4">{data.title}</Heading>
        <Text>{data.description}</Text>
        {data.repoUrl && (
          <Link
            target="_blank"
            to={data.repoUrl}
            rel="noopener noreferrer"
            className="text-zinc-50 underline"
          >
            Repositório Github
          </Link>
        )}
        <div className="py-4 flex gap-2 items-center mt-4">
          {data.stacks &&
            data.stacks?.map((stack) => (
              <div
                key={stack.id}
                className="px-3 py-1 bg-foreground/10 border border-zinc-600 text-zinc-50 rounded"
              >
                <Text as="small">{stack.name}</Text>
              </div>
            ))}
        </div>
      </div>
      <img
        src={data.cover?.url}
        className="w-full rounded-lg fade-in"
        alt={data.cover?.alternativeText}
      />
    </div>
  );
}
