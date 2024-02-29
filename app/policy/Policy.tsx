import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Termos e Condições da Plataforma
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Uma das nossas principais prioridades no site CURSOS.ISPTEC.AO é a privacidade das informações dos nossos usuários. Este documento contém informações detalhadas sobre quais informações coletamos do site Becodemy e como as utilizamos.

        Se tiver alguma dúvida ou precisar de mais informações sobre a nossa política de privacidade, não hesite em nos contactar.

        Esta Política de Privacidade aplica-se apenas às nossas atividades online e é válida para informações compartilhadas pelos visitantes do nosso site e/ou coletadas do site CURSOS.ISPTEC.AO. Esta política não se aplica a quaisquer informações coletadas off-line ou através de canais que não sejam este site.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        * Consentimento
        <br />
        Ao usar nosso site, você concorda com nossa Política de Privacidade e Termos.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        * Quais são as informações que coletamos?
        <br />
        Quando solicitarmos que você forneça suas informações pessoais no Site, você será informado do motivo pelo qual está sendo solicitado a fornecê-las.
        Se você entrar em contato conosco diretamente, poderemos coletar informações adicionais sobre você, como seu nome, endereço de e-mail, número de telefone, conteúdo da comunicação e/ou quaisquer anexos ou outras informações que você nos enviar.

        Ao abrir uma conta em nosso site, você deverá fornecer algumas informações pessoais, como seu nome, endereço de e-mail, foto, número de celular, endereço, etc. base necessária com sua permissão. Não compartilhamos suas informações com ninguém sem a sua permissão e mantemos a confidencialidade das informações.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        * Permissão e mantemos a confidencialidade das informações.
        <br />
        Confidencialidade de senhas pessoais

        A senha que você deverá inserir para fazer login ao abrir uma conta em nosso site é criptografada e armazenada de forma segura em nosso banco de dados. Como resultado, não podemos ver o conteúdo original da sua senha. Assim a privacidade da sua senha fica devidamente protegida em nosso site. Além disso, para proteger a privacidade da sua senha, nunca a compartilhe com ninguém. Se você acha que sua senha foi comprometida por outra pessoa, altere sua senha no site imediatamente. Se de alguma forma você não conseguir alterar a senha, entre em contato com nosso suporte.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        * Cookies
        <br />
        Como todos os outros sites, o site e o navegador da Becodemy utilizam cookies (“cookies”). Esses cookies são usados ​​para armazenar informações, incluindo preferências do visitante e páginas do site que o visitante acessou ou visitou. As informações são usadas para otimizar a experiência dos usuários, personalizando o conteúdo de nossas páginas da web com base no tipo de navegador dos visitantes e/ou outras informações.
        </p>
        <br />
        <br />
      </ul>
      </div>
    </div>
  );
};

export default Policy;
