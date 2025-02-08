export function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="w-full max-w-[1120px] py-4 m-auto flex items-start justify-between">
        <div>
          <a href="/portifolio">
            <img src="public/img/logo.svg" alt="Daniel Murilo Vaz" />
          </a>
          <div className="mt-6">
            <strong className="text-zinc-50">Siga-me nas redes sociais</strong>
            <div className="mt-2 flex gap-2">
              <a
                className="p-2 bg-zinc-800 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://www.instagram.com/daniellmurilo"
              >
                <i className="ph ph-instagram-logo"></i>
              </a>
              <a
                className="p-2 bg-zinc-800 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100084374073135"
              >
                <i className="ph ph-facebook-logo"></i>
              </a>
              <a
                className="p-2 bg-zinc-800 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="#"
              >
                <i className="ph ph-twitch-logo"></i>
              </a>
              <a
                className="p-2 bg-zinc-800 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://x.com/daniellmvaz"
              >
                <i className="ph ph-x-logo"></i>
              </a>
              <a
                className="p-2 bg-zinc-800 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://www.linkedin.com/in/daniel-murilo-vaz/"
              >
                <i className="ph ph-linkedin-logo"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <strong className="text-zinc-50">Contato</strong>
          <ul className="text-zinc-50 text-sm mt-4">
            <li>
              <strong>(41) 99705-7041</strong>
            </li>
            <li>
              <strong>(41) 98449-1829 - Whatsapp</strong>
            </li>
            <li>
              <strong>daniellmvaz@gmail.com</strong>
            </li>
          </ul>
        </div>
        <div>
          <strong className="text-zinc-50">Mapa do site</strong>
          <ul className="text-zinc-50 mt-4">
            <li>
              <a className="hover:text-zinc-400 transition-colors" href="#home">
                Início
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors"
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors"
                href="#projects"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors"
                href="#contact"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t border-t-zinc-900">
        <div className="w-full max-w-[1120px] m-auto py-4 flex items-center justify-between">
          <small className="text-zinc-50 text-xs">
            2024 Daniel Murilo Vaz - Todos os direitos reservados
          </small>

          <button
            id="up"
            className="p-4 bg-indigo-700 flex gap-4 items-center text-zinc-50 rounded hover:bg-indigo-700/75 transition-colors"
          >
            <i className="ph ph-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
