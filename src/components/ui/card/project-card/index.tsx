export function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
      <div>
        <div className="w-fit px-4 py-2 mb-6 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
          <div className="w-[8px] h-[8px] rounded-full primary-light"></div>
          <small className="text-xs">Finalizado em 2024</small>
        </div>
        <h2 className="text-2xl font-bold text-zinc-50">
          Support Track - Plataforma de suportes web.
        </h2>
        <p className="text-zinc-50 my-4">
          A plataforma consiste em uma solução para fornecer um suporte ao
          cliente direto do site, fornecendo ao usuário uma forma barata e
          eficiente de se conectar com seu cliente. A plataforma irá dispor de
          um chat real-time, abertura de tickets e inclusão de feedbacks sobre o
          produto ou serviço, tudo isso com pagamentos mensais e com um valor
          justo.
        </p>
        <a
          className="text-zinc-50 underline"
          href="https://github.com/daniellvaz/support-track"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositório Github
        </a>
        <div className="py-4 flex gap-2 items-center">
          <div className="px-3 py-1 bg-foreground/10 border border-zinc-600 text-zinc-50 rounded">
            <small className="text-xs">Nodejs</small>
          </div>
          <div className="px-3 py-1 bg-foreground/10 border border-zinc-600 text-zinc-50 rounded">
            <small className="text-xs">React</small>
          </div>
          <div className="px-3 py-1 bg-foreground/10 border border-zinc-600 text-zinc-50 rounded">
            <small className="text-xs">Postgresql</small>
          </div>
          <div className="px-3 py-1 bg-foreground/10 border border-zinc-600 text-zinc-50 rounded">
            <small className="text-xs">Prismajs</small>
          </div>
        </div>
      </div>
      <img
        className="w-full rounded-lg fade-in"
        src="public/img/projects/support-track.png"
        alt="Placeholder"
      />
    </div>
  );
}
