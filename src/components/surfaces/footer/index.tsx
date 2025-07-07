import {
  ArrowUpIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitchLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

import Logo from "../../../assets/img/logo.svg";

export function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="w-full max-w-[1120px] p-4 m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <a href="/portifolio">
            <img src={Logo} alt="Daniel Murilo Vaz" />
          </a>
          <div className="mt-6">
            <strong className="text-zinc-50">Siga-me nas redes sociais</strong>
            <div className="mt-2 flex gap-2">
              <a
                className="p-2 bg-foreground/10 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://www.instagram.com/daniellmurilo"
              >
                <InstagramLogoIcon />
              </a>
              <a
                className="p-2 bg-foreground/10 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100084374073135"
              >
                <FacebookLogoIcon />
              </a>
              <a
                className="p-2 bg-foreground/10 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="#"
              >
                <TwitchLogoIcon />
              </a>
              <a
                className="p-2 bg-foreground/10 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://x.com/daniellmvaz"
              >
                <XLogoIcon />
              </a>
              <a
                className="p-2 bg-foreground/10 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
                target="_blank"
                href="https://www.linkedin.com/in/daniel-murilo-vaz/"
              >
                <LinkedinLogoIcon />
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
      <div className="w-full border-t border-t-zinc-900 p-4">
        <div className="w-full max-w-[1120px] m-auto py-4 flex items-center justify-between">
          <small className="text-zinc-50 text-xs">
            2024 Daniel Murilo Vaz - Todos os direitos reservados
          </small>

          <button className="p-4 bg-primary-main flex gap-4 items-center text-zinc-50 rounded hover:bg-primary-dark transition-colors cursor-pointer">
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
