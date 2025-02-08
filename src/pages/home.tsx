export function Home() {
  return (
    <main className="w-full mt-24">
      <div className="w-[358px] h-[358px] fixed -top-[179px] -right-[300px] rounded-full bg-indigo-700 blur-[350px]"></div>
      <div className="w-[358px] h-[358px] fixed -bottom-[179px] -left-[350px] rounded-full bg-indigo-700 blur-[350px]"></div>
      <section id="home" className="w-full max-w-[1120px] m-auto">
        <div className="w-fit px-4 py-2 mb-6 mt-8 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
          <div className="w-[8px] h-[8px] rounded-full bg-emerald-500"></div>
          <small className="text-xs">Disponível para freelancer</small>
        </div>
        <h1 className="text-zinc-50 text-5xl font-bold mb-6">
          Prazer, meu nome é Daniel! <br />
          Sou desenvolvedor de software.
        </h1>
        <p className="text-zinc-50 text-xl mb-8">
          Com mais de 5 anos de experiência atuo no desenvolvimento de soluções
          para as mais diversas áreas do mercado, utilizando as tecnologias mais
          modernas alinhado com padrões de códigos e processos muito bem
          definidos para garantir qualidade e uma entrega rápida.
        </p>
        <a
          href="form.html"
          className="w-fit px-4 py-2 bg-zinc-50 flex gap-4 items-center text-zinc-950 rounded hover:bg-zinc-100 transition-colors"
        >
          <p>Solicitar um orçamento</p>
        </a>
      </section>
      <hr className="max-w-[1120px] m-auto mt-16 mb-16 border-zinc-800" />
      <section
        id="about"
        className="w-full max-w-[1120px] m-auto grid gap-12 grid-cols-3"
      >
        <div className="w-full col-span-2">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Um pouco mais sobre mim! 😎
          </h2>
          <p className="text-zinc-50 mt-4">
            Atualmente trabalho como desenvolvedor fullstack em uma grande rede
            de supermercados aqui do Paraná. Atuo no desenvolvimento e
            manutenção de sistemas internos bem como integrações com API`s de
            terceiros. Atualmente utilizamos como ferramentas de desenvolvimento
            Nodejs, React, Mysql e Oracle e ainda PHP com Laravel em alguns
            projetos. Além do código, atuo na parte de deploy automático das
            aplicações e na revisão de códigos de desenvolvedores juniors. Parar
            saber mais sobre mim e minha trajetória acesse os links abaixo:
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-murilo-vaz/"
              className="w-fit px-4 py-2 bg-indigo-700 flex gap-4 items-center text-zinc-50 rounded hover:bg-indigo-800 transition-colors"
            >
              <p>Minha trajetória</p>
            </a>
            <a
              href="mailto:daniellmvaz@gmail.com"
              className="w-fit px-4 py-2 bg-zinc-50 flex gap-4 items-center text-zinc-950 rounded hover:bg-zinc-100 transition-colors"
            >
              <p>Envie um email</p>
              <i className="ph ph-envelope"></i>
            </a>
          </div>
        </div>

        <img
          className="col-start-3"
          src="public/img/avatar.png"
          alt="Daniel Murilo Vaz"
        />
      </section>
      <section id="stacks_container">
        <div id="stacks_wrapper"></div>
      </section>
      <section id="projects" className="w-full max-w-[1120px] m-auto mt-16">
        <div id="project_container">
          <h2 className="mb-8 text-3xl font-bold text-zinc-50">
            Projetos recentes 🚀
          </h2>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-zinc-50">
            Projetos pessoais 🔥
          </h2>

          <div className="grid grid-cols-2 gap-2 items-start">
            <div>
              <div className="w-fit px-4 py-2 mb-6 bg-zinc-900 border border-zinc-600 rounded text-zinc-50 flex gap-4 items-center">
                <div className="w-[8px] h-[8px] rounded-full bg-emerald-500"></div>
                <small className="text-xs">Em desenvolvimento</small>
              </div>
              <h2 className="text-2xl font-bold text-zinc-50">
                Support Track - Plataforma de suportes web.
              </h2>
              <p className="text-zinc-50 mt-4">
                A plataforma consiste em uma solução para fornecer um suporte ao
                cliente direto do site, fornecendo ao usuário uma forma barata e
                eficiente de se conectar com seu cliente. A plataforma irá
                dispor de um chat real-time, abertura de tickets e inclusão de
                feedbacks sobre o produto ou serviço, tudo isso com pagamentos
                mensais e com um valor justo.
              </p>
              <div className="py-4 flex gap-2 items-center">
                <div className="px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-50 rounded">
                  <small className="text-xs">Nodejs</small>
                </div>
                <div className="px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-50 rounded">
                  <small className="text-xs">React</small>
                </div>
                <div className="px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-50 rounded">
                  <small className="text-xs">Postgresql</small>
                </div>
                <div className="px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-50 rounded">
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
        </div>
      </section>
      <section
        id="contact"
        className="w-full max-w-[1120px] m-auto mt-16 grid gap-4 grid-cols-2 relative overflow-hidden"
      >
        <form className="w-full flex flex-col space-y-4">
          <h2 className="text-zinc-50 font-bold text-2xl">Entre em contato</h2>
          <input
            name="name"
            type="text"
            placeholder="Nome completo"
            className="p-2 bg-zinc-800 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-indigo-700 transition-colors"
          />
          <input
            name="subject"
            type="text"
            placeholder="Assunto"
            className="p-2 bg-zinc-800 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-indigo-700 transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="p-2 bg-zinc-800 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-indigo-700 transition-colors"
          />
          <input
            name="phone"
            type="text"
            placeholder="Telefone"
            className="p-2 bg-zinc-800 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-indigo-700 transition-colors"
          />
          <textarea
            rows={5}
            name="description"
            className="p-2 bg-zinc-800 text-zinc-50 placeholder-zinc-600 border border-zinc-600 rounded outline-none focus:border-indigo-700 transition-colors"
          ></textarea>
          <button className="w-fit px-4 py-2 bg-indigo-700 flex gap-4 items-center justify-center text-zinc-50 rounded hover:bg-indigo-700/75R transition-colors">
            Enviar
            <i className="ph ph-paper-plane-tilt"></i>
          </button>
        </form>
        <div className="relative">
          <img
            className="absolute top-0 left-0 w-screen h-full -ml-1/2 object-cover"
            src="public/img/code.png"
            alt="Codding"
          />
        </div>
      </section>
    </main>
  );
}
