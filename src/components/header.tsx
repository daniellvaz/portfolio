export function Header() {
  return (
    <nav className="w-full p-4 border-b border-b-zinc-900 fixed top-0 bg-zinc-950/75 z-10">
      <div className="w-full max-w-[1120px] m-auto flex items-center justify-between">
        <a href="/portfolio/">
          <img
            className="w-10"
            src="public/img/logo.svg"
            alt="Daniel Murilo Vaz"
          />
        </a>
        <ul className="flex gap-4 text-zinc-50">
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <a
          target="_blank"
          href="https://wa.me/5541984491829?text=Ol%C3%A1%2C%20tudo%20bem%3F"
          className="px-4 py-2 bg-indigo-700 flex gap-4 items-center text-zinc-50 rounded hover:bg-indigo-700/75 transition-colors"
        >
          <p>Entrar em contato</p>
          <i className="ph ph-chat-circle"></i>
        </a>
      </div>
    </nav>
  );
}
