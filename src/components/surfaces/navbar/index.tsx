import { ChatCircleIcon, ListIcon } from "@phosphor-icons/react";

import Logo from "../../../assets/img/logo.svg";

export function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-b-zinc-800 bg-background z-10 fixed top-0">
      <div className="w-full max-w-[1120px] m-auto flex items-center justify-between">
        <a href="/portfolio/">
          <img className="w-1/2" src={Logo} alt="Daniel Murilo Vaz" />
        </a>
        <ul className="gap-4 text-zinc-50 hidden md:flex">
          <li>
            <a href="#home">Início</a>
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
          className="w-fit hidden md:flex px-4 py-2 bg-primary-main gap-4 items-center text-zinc-50 rounded hover:bg-primary-main/75 transition-colors"
        >
          <p>Contato</p>
          <ChatCircleIcon size={24} color="#fff" />
        </a>
        <button
          id="menu-button"
          className="md:hidden cursor-pointer p-2 bg-foreground/10 rounded shadow-lg text-zinc-50 flex itens-center justify-center hover:bg-zinc-900 transition-colors"
        >
          <ListIcon size={24} color="#fff" />
        </button>
      </div>
      <div
        id="menu"
        data-state="close"
        className="w-full p-4 data-[state=close]:hidden"
      >
        <ul className="w-full text-zinc-50 text-center p-4">
          <li className="w-full p-4">
            <a href="#home">Início</a>
          </li>
          <li className="w-full p-4">
            <a href="#projects">Projetos</a>
          </li>
          <li className="w-full p-4">
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <a
          target="_blank"
          href="https://wa.me/5541984491829?text=Ol%C3%A1%2C%20tudo%20bem%3F"
          className="w-full flex px-4 py-2 bg-primary-main gap-2 items-center justify-center text-zinc-50 rounded hover:bg-primary-main/75 transition-colors"
        >
          <p>Contato</p>
          <ChatCircleIcon size={24} color="#fff" />
        </a>
      </div>
    </nav>
  );
}
