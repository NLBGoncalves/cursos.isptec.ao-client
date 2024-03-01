import Link from 'next/link';
import React from 'react';

type Props = {}

const Footer = (props: Props) => {

  const abrirLinkEmNovaAba = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Sobre</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Nossa história
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Minha conta
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Painel do curso
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Links sociais</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCNjEEtfJWNV5tU08UaRy2_Q"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault(); // Impede o comportamento padrão de navegação
                    abrirLinkEmNovaAba("https://www.youtube.com/channel/UCNjEEtfJWNV5tU08UaRy2_Q");
                  }}
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault(); // Impede o comportamento padrão de navegação
                    abrirLinkEmNovaAba("https://www.instagram.com/");
                  }}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkdin.com/"
                  className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault(); // Impede o comportamento padrão de navegação
                    abrirLinkEmNovaAba("https://www.linkdin.com/");
                  }}
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Informações de contacto</h3>
            <a className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white pb-2" href="tel:+244 956 004 820">
              Número: +244 956 004 820
            </a>
           
            <p className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white pb-2">
              Endereço: #############
            </p>
         
            <a href="mailto:geral@cursos.isptec.ao" className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white  pb-2">
              Envie-nos um e-mail: geral@cursos.isptec.ao
            </a>
            
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2024 CURSOS.<span className="text-gradient1">ISPTEC</span>.AO | Todos os direitos reservados
          <br/>
          <br/>
          Made By
        </p>
        <br/>
        <div className="text-center text-black dark:text-white">
          <Link
            href="https://www.instagram.com/nilsongoncalves__/"
            className="text-base text-slate-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={(e) => {
              e.preventDefault(); // Impede o comportamento padrão de navegação
              abrirLinkEmNovaAba("https://www.instagram.com/nilsongoncalves__/");
            }}
            >
              Nilson Gonçalves
          </Link>
        </div>
      </div>
      <br />
    </footer>
  )
}

export default Footer;
