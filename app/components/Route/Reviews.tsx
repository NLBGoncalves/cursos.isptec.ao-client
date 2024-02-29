import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";
import { people01, people02, people03, people04 } from "../../../public/assests";

type Props = {};

export const reviews = [
  {
    name: "Cirineu Marques",
    img: people02,
    profession: "Studante | Bolseiro em França",
    comment:
    "Tive o prazer de explorar cursos.isptec.ao, um site que disponibiliza uma vasta gama de cursos sobre diversos temas relacionados com a tecnologia. Fiquei totalmente impressionado com minha experiência, pois o site oferece uma seleção abrangente de cursos que atendem a diferentes níveis de habilidade e interesses.",
},
  {
    name: "Jóse Kassoma",
    img: people03,
    profession: "Estudante | Engenharia Informática",
    comment:
    "Obrigado pelo seu incrível Projecto! O estilo de ensino é excelente e a qualidade dos seus cursos é excelente. Sua capacidade de dividir tópicos complexos em partes gerenciáveis e cobrir diversas habilidades é realmente impressionante. Se você deseja aprimorar seus conhecimentos e habilidades na indústria de tecnologia e não so, recomendo fortemente dar uma olhada no cursos.isptec.ao!",
},
  {
    name: "Victor Miranda",
    img: people04,
    profession: "Estudante | Engenharia Mecânica",
    comment:
    "Seu envolvimento com o público promove um ambiente de aprendizagem favorável. Obrigado por sua dedicação, conhecimento e paixão por ensinar e continue com o trabalho fantástico!"},
  {
    name: "Paulo Kimbundo",
    img: people01,
    profession: "Estudante | Engenharia Mecânica",
    comment:
    "CURSOS.ISPTEC.AO faz um bom trabalho ao explicar os conceitos de forma clara e concisa, e os exemplos são bem escolhidos. No geral, este é um recurso valioso para quem quer seguir ou esta segundo engenharia",
},
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Nossos alunos são <span className="text-gradient">a essência de nossa força</span>{" "}
            <br /> Veja o que eles têm a dizer sobre nós
          </h3>
          <br />
          <p className={styles.label}>
            Nossos alunos não apenas constituem nossa comunidade educacional, mas também são a própria essência de nossa instituição. São eles que impulsionam nosso compromisso com a excelência acadêmica, motivando-nos a oferecer os recursos e o suporte necessários para que alcancem seus objetivos educacionais e profissionais. 
          </p>
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;
